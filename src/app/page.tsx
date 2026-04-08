import ContactForm from "@/components/ContactForm";
import MotionReveal from "@/components/MotionReveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig, skillGroups } from "@/data/portfolio";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-hidden text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_82%_22%,rgba(167,139,250,0.2),transparent_26%)]" />
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a
            href="#hero"
            className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-sm font-semibold tracking-[0.16em] text-transparent"
          >
            {siteConfig.name}
          </a>
          <ul className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <li>
              <a href="#about" className="transition duration-300 hover:text-cyan-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="transition duration-300 hover:text-cyan-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="transition duration-300 hover:text-cyan-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="transition duration-300 hover:text-cyan-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-28">
        <section id="hero" className="grid min-h-[88vh] items-center gap-10 py-20 lg:grid-cols-[1fr_auto]">
          <MotionReveal className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200">
              Available for freelance and full-time roles
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-zinc-300 sm:text-2xl">{siteConfig.role}</p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {siteConfig.intro}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 font-semibold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_rgba(56,189,248,0.8)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 font-semibold text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                Contact Me
              </a>
            </div>
          </MotionReveal>
          <MotionReveal className="mx-auto lg:mx-0" delay={0.15}>
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-300/40 shadow-[0_20px_55px_-25px_rgba(34,211,238,0.75)] sm:h-72 sm:w-72">
              <Image
                src="/profile.png"
                alt="Justine Camello profile photo"
                fill
                sizes="(max-width: 640px) 256px, 288px"
                priority
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </section>

        <section id="about" className="scroll-mt-24 py-20">
          <MotionReveal>
            <SectionHeading
              title="About Me"
              subtitle="I craft scalable web products with strong attention to user experience, performance, and maintainable code."
            />
            <div className="rounded-3xl border border-white/10 bg-zinc-900/55 p-8 leading-relaxed text-zinc-300 shadow-[0_24px_60px_-32px_rgba(34,211,238,0.5)] backdrop-blur">
              <p>
                I am a web developer who enjoys building polished user interfaces backed by solid APIs
                and clean database design. My approach balances rapid delivery with long-term code
                quality, making products easier to ship and easier to maintain.
              </p>
            </div>
          </MotionReveal>
        </section>

        <section id="projects" className="scroll-mt-24 py-20">
          <SectionHeading
            title="Projects"
            subtitle="Selected work showcasing full-stack development, design detail, and real-world product thinking."
          />
          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <MotionReveal
                key={project.title}
                delay={index * 0.1}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900/55 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/35 hover:shadow-[0_25px_45px_-28px_rgba(34,211,238,0.65)]"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 flex-1 text-zinc-300">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-zinc-700/70 bg-zinc-800/70 px-3 py-1 text-xs text-zinc-300 transition duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-4 text-sm">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-cyan-300 transition duration-300 hover:text-cyan-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-cyan-300 transition duration-300 hover:text-cyan-200"
                  >
                    Source
                  </a>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20">
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I use to design, build, and deploy reliable web products."
          />
          <div className="grid gap-7 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <MotionReveal
                key={group.title}
                delay={index * 0.1}
                className="group rounded-3xl border border-white/10 bg-zinc-900/55 p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-[0_24px_45px_-28px_rgba(167,139,250,0.75)]"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-2.5 text-zinc-300">
                  {group.skills.map((skill) => (
                    <li key={skill} className="transition duration-300 group-hover:text-zinc-100">
                      {skill}
                    </li>
                  ))}
                </ul>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <MotionReveal>
            <SectionHeading
              title="Contact"
              subtitle="Have an idea or opportunity? Send a message and I will get back to you."
            />
            <ContactForm />
          </MotionReveal>
        </section>
      </main>

      <footer className="border-t border-white/10 py-9">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-zinc-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.socials.github}
              className="font-medium text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              className="font-medium text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:text-cyan-300"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
