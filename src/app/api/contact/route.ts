import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

export async function GET(request: Request) {
  void request;
  return NextResponse.json(
    { message: "Message inbox is disabled in no-database mode." },
    { status: 501 },
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Please provide valid contact information." },
        { status: 400 },
      );
    }

    const { name, email, message } = parsed.data;
    console.info("Contact form submission received", { name, email, message });

    return NextResponse.json({ message: "Message received." }, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error while sending message.";

    return NextResponse.json(
      {
        message:
          process.env.NODE_ENV === "development"
            ? errorMessage
            : "Something went wrong while sending your message.",
      },
      { status: 500 },
    );
  }
}
