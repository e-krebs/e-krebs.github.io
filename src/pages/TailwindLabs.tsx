import { FC } from "react";
import { Svg } from "../components/Svg";

const comicBg = new URL("../img/comic-bg.svg", import.meta.url);

export const TailwindLabs: FC = () => (
  <>
    <div className="w-full h-screen bg-gradient-to-br from-yellow-500 to-teal-500">
      <div
        style={{ backgroundImage: `url(${comicBg.href})` }}
        className="w-full h-screen overflow-y-scroll"
      >
        <div
          className={`mx-auto backdrop-blur-md backdrop-brightness-[40%]
        prose prose-invert md:prose-lg md:max-w-[100ch]`}
        >
          <title className="z-10 block px-6 md:px-12 py-6 sticky -top-3 bg-gradient-to-bl from-teal-500 to-yellow-500 -skew-y-6 -translate-y-12 md:-translate-y-14 shadow-md">
            <div className="skew-y-6 translate-y-10 md:translate-y-12 flex flex-col">
              <div className="md:flex md:justify-between">
                <div className="flex flex-col md:flex-row order-2 float-right md:float-none">
                  <div className="flex">
                    <a href="https://github.com/tailwindlabs" target="_blank">
                      <Svg
                        image="tailwindlabs"
                        width={64}
                        height={64}
                        className="my-0 md:my-0 p-2 bg-slate-700 rounded-full max-w-14 max-h-14 md:max-w-16 md:max-h-16 border-2"
                      />
                    </a>
                    <a href="/home" className="-ml-6">
                      <Svg
                        image="person"
                        width={64}
                        height={64}
                        className="my-0 md:my-0 bg-yellow-500 rounded-full max-w-14 max-h-14 md:max-w-16 md:max-h-16 border-2"
                      />
                    </a>
                  </div>
                  <div className="flex md:flex-col justify-end md:justify-normal p-1 gap-2">
                    <a href="https://github.com/e-krebs" title="github" target="_blank">
                      <Svg
                        image="github"
                        className="max-w-5 max-h-5 md:max-w-6 md:max-h-6 m-0 md:m-0"
                        width={24}
                        height={24}
                      />
                    </a>
                    <a href="https://twitter.com/emmkrebs" title="twitter" target="_blank">
                      <Svg
                        image="twitter"
                        className="max-w-5 max-h-5 md:max-w-6 md:max-h-6 m-0 md:m-0"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
                <h1 className="order-1">
                  Emmanuel Krebs
                  <br />x Tailwind Labs
                </h1>
              </div>
            </div>
          </title>

          <main className="p-6 md:p-12 pt-0 flex flex-col -translate-y-9 md:-translate-y-13">
            <h2>Who Am I?</h2>

            <p className="lead">First, let me tell you where I come from.</p>

            <p>
              <div className="text-6xl md:text-9xl float-left md:float-right flex flex-col gap-6 py-6 pr-3 md:pr-0 md:pl-3">
                <span>👨‍💻</span>
                <span>⚗️</span>
              </div>
              Software developer is not my first career. I originally pursued a career in scientific
              research in Theoretical Chemistry (you should be able to find scientific papers if
              you’re curious) with a classic journey: PhD (technically I’m Dr Krebs) then PostDoc.
              <br />
              What I liked was being able to apply theoretical concepts to understand & sometimes
              solve actual problems.
              <br />
              Those years were very formative and developed skills which still influence how I work
              today, notably organization & forward thinking (I’ve been told it can be seen on my
              face when I pause for thinking).
              <br />
              Unfortunately, scientific research is quite a crowded field which led me, after a not
              so successful PostDoc, to reconsider my career choices. And so I started my journey as
              a Software Engineer in 2012.
            </p>

            <p className="lead">
              Fast forward today, I’m a 41 year old Software Engineer, living just outside Paris
              (France) with my wife and our young kid. And I am lucky enough to both have a nice
              Home Office and enjoy working remotely (my current team spans from CET to Mountain
              Time Zone).
            </p>

            <p>
              <div className="text-7xl float-left py-6 pr-3">👨‍🎓</div>
              My journey in development actually started way before I even considered a carrier in
              the field.
              <br />
              When I was a chemistry student (and later in PostDoc), I was an avid wargame player
              which led me to build my first websites to build army lists (javascript + notepad &
              later Google Web Toolkit).
              <br />
              During my PhD I also discovered the joy and power of scripting for automatically
              extracting data from files and avoiding human mistakes.
            </p>

            <p>
              <div className="float-left md:float-right flex flex-col pr-3 md:pr-0 md:pl-3">
                <Svg
                  image="expertime"
                  className="m-3 max-w-12 max-h-12 md:max-w-24 md:max-h-24"
                  width={96}
                  height={96}
                />
                <Svg
                  image="microsoft"
                  className="m-3 max-w-12 max-h-12 md:max-w-24 md:max-h-24"
                  width={96}
                  height={96}
                />
              </div>
              In early 2012 I had the opportunity to follow a training for developers on Microsoft
              technologies, which led me to spend the next 7 years working in a small french service
              company. I learned a lot during those 7 years, working for many different types of
              clients, and grew from being a Junior Software Engineer to being a Software Architect
              with a ton of experiences.
              <br />
              Most of my work was using .NET, C# and Azure, but I also got to do mobile development.
              The key skills I acquired during that time are adaptability & relentlessness: I had to
              dig many large codebases hunting weird bugs, often without proper tooling, sometimes
              in programming languages I was not familiar with (VB, objective-c, Silverlight and
              later ruby).
            </p>

            <p className="lead">
              In 2019 I joined Algolia where I worked in a few teams over the last 5 years.
              <br />
              I’ve been the technical leader (mostly for frontend) of my teams for more than 4
              years.
            </p>

            <p>
              <div className="float-left md:float-right flex flex-col pr-3">
                <Svg
                  image="algolia"
                  className="m-3 max-w-12 max-h-12 md:max-w-24 md:max-h-24"
                  width={96}
                  height={96}
                />
              </div>
              Initially I was developing internal tools, either our internal admin or custom tools
              for non-technical colleagues.
              <br />
              One of the most successful ones is a no-code tool that allows you to build custom
              demos for prospects through a few forms and some Drag & Drop. Under the hood it relied
              on some json configuration which allowed me to easily add new templates.
            </p>

            <p>
              For the past two years I’ve been in the team that is owning the Merchandising Studio.
              It's the first new UI that has been built at Algolia since the classic Dashboard many
              years ago. When I joined that team we were 2 people (PM and me) and the whole project
              was just an idea. Now we are 9 with a live and successful product.
            </p>

            <h2>What do I do?</h2>

            <p>
              <div className="float-left md:float-right flex flex-col gap-3 py-2 md:py-0 pr-2 md:pr-0 md:pl-3">
                <Svg
                  image="React"
                  className="m-1 md:m-1 max-w-12 max-h-12 md:max-w-9 md:max-h-9"
                  width={96}
                  height={96}
                />
                <Svg
                  image="Typescript"
                  className="m-1 md:m-1 max-w-12 max-h-12 md:max-w-9 md:max-h-9"
                  width={96}
                  height={96}
                />
              </div>
              Even though most of what I’ve been doing at Algolia is geared toward not-so-technical
              users (both internal & external), I developed a passion for Developer Experience. This
              ranges from working on tests (building test helpers, introducing patterns & best
              practices, migrating thousands of tests) to becoming both a React & Typescript expert.
            </p>

            <p className="lead">
              I also enjoy transmitting all the skills I acquired over time, be it through public
              speaking, pairing with colleagues or proper mentoring.
            </p>

            <p>
              I love building tools to help me (and others) in my day-to-day life. Among others are:
            </p>
            <ul>
              <li>
                <a href="https://github.com/algolia/algolia-analyzer" target="_blank">
                  Algolia Analyzer
                </a>
                , a chrome extension that adds to the dev tools the equivalent of the Network tab
                but for requests to Algolia servers
              </li>
              <li>
                <a href="https://github.com/e-krebs/check" target="_blank">
                  Check
                </a>
                , where I experimented with building my own test framework for fun (which was
                surprisingly easy)
              </li>
              <li>
                <a href="https://github.com/e-krebs/react-library" target="_blank">
                  React Library
                </a>
                , a small collection of themable components that I can reuse across projects
              </li>
              <li>
                <a href="https://github.com/e-krebs/pile" target="_blank">
                  Pile
                </a>
                , a chrome extension to display my pocket list that I use every day
              </li>
              <li>
                <strong>Glad</strong> (closed source), a website leveraging Algolia to view your
                team’s open PR & Issues across repositories (using GitHub API)
              </li>
            </ul>

            <blockquote>
              Even though it may not be apparent in everything I do, I do have a taste for Design
              and I enjoy beautifully crafted UIs.
            </blockquote>

            <h2>Why am I applying?</h2>

            <p>
              I am honestly not looking for a job at the moment, but working at Tailwind Labs looks
              too much like a dream job to me to ignore it: a small team, some open source,
              successful and impactful projects for developers and what seems to be great working
              conditions.
            </p>

            <p className="lead">So here I am.</p>
            <p className="lead">
              Pumped and highly motivated to embark on a new adventure with you all.
            </p>

            <p>
              I've never worked as an independent contractor but this opportunity at this time in my
              life feels like the perfect time to give it a try.
              <br />
              I'll figure out how to make this work (including French health insurance and
              retirement plan).
            </p>

            <p>
              <blockquote>
                I have no proper experience with working on highly visible open source projects but
                I have always been interested at the prospect which shouldn't hurt.
              </blockquote>
            </p>

            <p>
              In the little time I had (after my day job was done and my kid went to bed), I managed
              to completely rewrite <a href="/home">my resume website</a> which was 5 years old
              (it's not as polished as I'd like, sorry about that). <br />I also put together this
              “motivation letter” page, hoping both will give a good impression of me and will
              convince you to start a conversation.
            </p>

            <p className="md:flex">
              <div className="text-7xl md:text-lg float-right md:float-none pl-3 md:pl-1 md:order-2">
                🦇
              </div>
              I hope to hear from you soon, and I'm always happy to throw a comic book
              recommendation!
            </p>
            <p className="self-end px-12">Emmanuel</p>
          </main>
        </div>
      </div>
    </div>
  </>
);
