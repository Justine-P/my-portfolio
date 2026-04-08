type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}
