import {
  ArrowUpRight,
  Code2,
  Globe,
  Mail,
  UserRound,
} from "lucide-react";

const Developer = () => {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-[5%] py-16 text-white md:px-[7%] md:py-20">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[3px] text-[#ff6b1a]">
            Meet The Developer
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Kasinath Mandal.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            Full-Stack Web Developer passionate about creating modern,
            responsive, and user-friendly web experiences.
          </p>
        </div>

        {/* Main Developer Card */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

          <div className="grid md:grid-cols-2">

            {/* Profile Section */}
            <div className="flex min-h-[400px] items-center justify-center bg-[#111216] p-8 md:border-r md:border-white/10 md:p-12">
              <div className="text-center">

                {/* Profile Icon */}
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#ff6b1a] shadow-2xl shadow-orange-500/20">
                  <UserRound
                    size={58}
                    strokeWidth={1.8}
                    className="text-white"
                  />
                </div>

                <h2 className="mt-7 text-2xl font-black">
                  Kasinath M.
                </h2>

                <p className="mt-2 text-sm font-semibold text-[#ff6b1a]">
                  Full-Stack Web Developer
                </p>

                <p className="mt-4 text-sm text-gray-500">
                  Building modern digital experiences.
                </p>
              </div>
            </div>

            {/* About Section */}
            <div className="p-8 md:p-12">

              <div className="flex items-center gap-3">
                <Code2
                  size={24}
                  className="text-[#ff6b1a]"
                />

                <h2 className="text-xl font-bold">
                  About The Developer
                </h2>
              </div>

              <p className="mt-6 text-sm leading-8 text-gray-400">
                Hi, I'm Kasinath M. I build modern websites and web
                applications with a focus on clean design, responsive
                layouts, smooth user experiences, and maintainable code.
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-400">
                This website was designed and developed for
                HARAPARVATI Bike Garage & Spare Parts to provide customers
                with an easy way to explore motorcycle parts, accessories,
                and garage services.
              </p>

              {/* Technologies */}
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-[2px] text-white">
                  Technologies
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "HTML",
                    "CSS",
                    "Git",
                    "Responsive Design",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links / Contact Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Portfolio */}
          <a
            href="https://personal-portfolio-pi-olive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b1a]/50 hover:bg-white/[0.05]"
          >
            <Globe
              size={23}
              className="text-[#ff6b1a]"
            />

            <h3 className="mt-4 font-bold">
              Portfolio
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              View my personal portfolio and projects.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-400 transition group-hover:text-[#ff6b1a]">
              Visit Portfolio
              <ArrowUpRight size={15} />
            </div>
          </a>

          {/* Projects */}
          <a
            href="https://github.com/kasinath2000?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b1a]/50 hover:bg-white/[0.05]"
          >
            <Code2
              size={23}
              className="text-[#ff6b1a]"
            />

            <h3 className="mt-4 font-bold">
              Projects
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Explore my development projects and work.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-400 transition group-hover:text-[#ff6b1a]">
              Explore Projects
              <ArrowUpRight size={15} />
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:kasi21.12.2000@email.com"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6b1a]/50 hover:bg-white/[0.05]"
          >
            <Mail
              size={23}
              className="text-[#ff6b1a]"
            />

            <h3 className="mt-4 font-bold">
              Contact
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Have a project or idea? Get in touch.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-gray-400 transition group-hover:text-[#ff6b1a]">
              Send Email
              <ArrowUpRight size={15} />
            </div>
          </a>
        </div>

        {/* Bengali Tagline */}
        <div className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="text-base font-semibold text-[#ff6b1a] md:text-lg">
            কোড দিয়ে তৈরি করি সুন্দর ও কার্যকর ডিজিটাল অভিজ্ঞতা।
          </p>

          <p className="mt-3 text-[10px] font-bold uppercase tracking-[4px] text-gray-600">
            Design • Develop • Deliver
          </p>
        </div>
      </div>
    </main>
  );
};

export default Developer;