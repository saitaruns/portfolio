import Link from "next/link";
import { Link as VLink } from "next-view-transitions";
import { BentoGrid, BentoGridItem } from "./components/bento";
import { cn } from "../../utils/cn";
import Image from "next/image";
import Clone from "./components/clone";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-6 ">
      <div>
        <h1 className="text-4xl font-bold">Sai Tarun</h1>
        <p className="text-sm md:text-md text-slate-400">
          saitarunsanagapati@gmai.com
        </p>
        <div className="flex gap-x-2 mt-2 flex-wrap">
          {[
            {
              link: "https://www.linkedin.com/in/saitaruns",
              text: "LinkedIn",
            },
            {
              link: "https://github.com/saitaruns",
              text: "GitHub",
            },
            {
              link: "https://drive.google.com/file/d/10VdN18HVUD2QdS7Ycjwms1Hce6xjkDUh/view?usp=sharing",
              text: "Resume",
            },
          ].map(({ link, text }) => (
            <Link
              key={text}
              href={link}
              target="_blank"
              className="flex text-blue-600 "
            >
              <span className="hover:underline text-lg ">{text}</span>
            </Link>
          ))}
        </div>
      </div>

      <p className="text-lg">
        I&apos;m a software engineer based in India. I have done my B.Tech in
        Computer Science from IIITS, AP. I&apos;m passionate about building
        products that are accessible, inclusive, and delightful.
      </p>

      <section className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold">Career</h2>
        <ol class="relative border-s dark:border-neutral-600 border-neutral-400 ml-[11.5px] flex flex-col gap-8">
          {[
            {
              time: "Feb 2023",
              title: "Cogoport",
              role: "SDE - I",
              description:
                "Worked on the Public site, Blogs . Also worked on the company's internal tools such as CMS.",
            },
            {
              time: "May 2022",
              title: "Grorapid Labs",
              role: "Frontend Developer Intern",
              description: "Worked on company's internal drag and drop tool.",
            },
          ].map(({ time, title, role, description }) => (
            <li class="ms-7" key={title}>
              <div class="absolute size-3 dark:bg-neutral-600 bg-neutral-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black"></div>
              <time class="text-sm font-mono leading-none text-neutral-800 dark:text-neutral-200">
                {time}
              </time>
              <h2 class="text-xl mt-1 font-semibold text-neutral-900 dark:text-neutral-100 block cogo">
                {title}
              </h2>
              <h4 class="text-sm mt-2 font-medium dark:text-neutral-100 text-neutral-900 block">
                {role}
              </h4>
              <p class="mt-1 dark:text-neutral-200 text-neutral-800 text-pretty font-mono">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {[
            "Next.js",
            "Astro",
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Python",
            "C++",
            "Java",
            "HTML",
            "CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Git",
          ].map((skill) => (
            <span
              key={skill}
              className={cn(
                "px-2 py-1 text-sm font-medium rounded-md dark:bg-neutral-600 bg-neutral-400"
              )}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {[
            {
              title: "Portfolio",
              description:
                "My personal portfolio built with Next.js, Tailwind CSS, and Vercel.",
              header: (
                <div className="w-full h-4/6 relative rounded-md">
                  <Clone />
                </div>
              ),
            },
            {
              title: "Debate0",
              description:
                "A platform for users to engage in healthy and respectful debates with people from all over the world.",
              header: (
                <Link
                  href={"https://debate-xi.vercel.app/arg/197"}
                  target="_blank"
                  className={
                    "w-full h-4/6 relative hover:opacity-80 group transition-opacity"
                  }
                >
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-all">
                    <span className="text-md font-bold text-black text-center">
                      Open in new tab
                    </span>
                  </div>
                  <Image
                    src="/debate0.png"
                    alt="Debate0"
                    className=" rounded-md"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Link>
              ),
            },
          ].map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              // className={i === 1 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>
    </main>
  );
}
