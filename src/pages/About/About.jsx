import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Full-Stack Developer, Problem Solver, Innovation Enthusiast
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="Aarav Mody"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm <span className="font-bold text-white">Aarav Mody</span>, a passionate full-stack developer specializing in creating robust web and mobile solutions with modern technologies. Currently pursuing Computer Engineering at DJSCE (CGPA 9.20) and Data Science at IIT Madras, I combine strong academic foundation with practical industry experience.
              </p>
              <p className="text-white">
                As a Software Development Engineer in Test at BrowserStack, I've driven automation coverage to 100%, optimized regression suites, and built AI-powered testing workflows. My expertise spans React.js, Node.js, Flutter, and testing frameworks like Playwright and WebDriverIO, with a proven track record of delivering high-impact solutions.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm passionate about building scalable applications, optimizing performance, and contributing to the developer community. Whether it's automating complex testing workflows, developing cross-platform applications, or mentoring others, I'm driven to create meaningful impact through technology.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Aarav Mody
                    </cite>
                    <span className="text-gray-400 text-sm">SDET | Full-Stack Developer | Innovation Enthusiast</span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
