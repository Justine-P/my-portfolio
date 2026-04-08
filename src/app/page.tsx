import ContactForm from "@/components/ContactForm";
import MotionReveal from "@/components/MotionReveal";
import SectionHeading from "@/components/SectionHeading";
import { projects, siteConfig, skillGroups } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#hero" className="text-sm font-semibold tracking-wide text-cyan-300">
            {siteConfig.name}
          </a>
          <ul className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <li>
              <a href="#about" className="transition hover:text-cyan-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-cyan-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="transition hover:text-cyan-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="transition hover:text-cyan-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24">
        <section id="hero" className="grid min-h-[80vh] items-center py-16">
          <MotionReveal className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 px-4 py-1 text-sm text-cyan-300">
              Available for freelance and full-time roles
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-xl text-cyan-300 sm:text-2xl">{siteConfig.role}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
              {siteConfig.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </MotionReveal>
        </section>

        <section id="about" className="scroll-mt-24 py-16">
          <MotionReveal>
            <SectionHeading
              title="About Me"
              subtitle="I craft scalable web products with strong attention to user experience, performance, and maintainable code."
            />
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 leading-relaxed text-zinc-300">
              <p>
                I am a web developer who enjoys building polished user interfaces backed by solid APIs
                and clean database design. My approach balances rapid delivery with long-term code
                quality, making products easier to ship and easier to maintain.
              </p>
            </div>
          </MotionReveal>
        </section>

        <section id="projects" className="scroll-mt-24 py-16">
          <SectionHeading
            title="Projects"
            subtitle="Selected work showcasing full-stack development, design detail, and real-world product thinking."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <MotionReveal
                key={project.title}
                delay={index * 0.1}
                className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-zinc-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
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
                    className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Source
                  </a>
                </div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-16">
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I use to design, build, and deploy reliable web products."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <MotionReveal
                key={group.title}
                delay={index * 0.1}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-zinc-300">
                  {group.skills.map((skill) => (
                    <li key={skill}>- {skill}</li>
                  ))}
                </ul>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-16">
          <MotionReveal>
            <SectionHeading
              title="Contact"
              subtitle="Have an idea or opportunity? Send a message and I will get back to you."
            />
            <ContactForm />
          </MotionReveal>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-zinc-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.socials.github}
              className="font-medium text-zinc-300 transition hover:text-cyan-300"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              className="font-medium text-zinc-300 transition hover:text-cyan-300"
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
