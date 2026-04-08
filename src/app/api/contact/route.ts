import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

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

    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    return NextResponse.json({ message: "Message received." }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}
