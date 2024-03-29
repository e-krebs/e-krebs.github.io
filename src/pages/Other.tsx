import { MdAllInclusive, MdCode, MdOutlineMessage } from "react-icons/md";
import { Scroller } from "../components/Scroller";
import { CardContent, CardList, CardTitle } from "../components/PlayingCard";
import { CardLinkIcon } from "../components/CardLinkIcon";
import { TagList } from "../components/Tags";

const linkedin = new URL("../img/linkedin.svg", import.meta.url);
const twitter = new URL("../img/twitter.svg", import.meta.url);
const github = new URL("../img/github.svg", import.meta.url);

const threedots = new URL("../img/3dots.svg", import.meta.url);
const chrome = new URL("../img/chrome.svg", import.meta.url);
const jest = new URL("../img/jest.svg", import.meta.url);
const microsoft = new URL("../img/microsoft.svg", import.meta.url);
const node = new URL("../img/node.svg", import.meta.url);
const react = new URL("../img/react.svg", import.meta.url);
const tailwindcss = new URL("../img/tailwindcss.svg", import.meta.url);
const typescript = new URL("../img/typescript.svg", import.meta.url);

export const Other = () => (
  <Scroller
    cards={[
      {
        icon: MdAllInclusive,
        content: (
          <CardContent className="top-12 gap-y-6">
            <CardTitle>Hobbies</CardTitle>
            <CardList className="space-y-6">
              <li>avid comic books reader</li>
              <li>amateur photographer</li>
              <li>boardgames</li>
              <li>movies and series</li>
              <li>and that... 👉</li>
            </CardList>
          </CardContent>
        ),
      },
      {
        icon: MdCode,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="march 2024 (current version)">this resume</CardTitle>
              <CardList className="space-y-6">
                <li>React, react-router-dom, parcel, tailwindcss</li>
                <li>some home-made design (incl. svg)</li>
                <li>Hosted on github pages</li>
                <li>
                  <a
                    href="https://github.com/e-krebs/e-krebs.github.io"
                    target="_blank"
                    className="underline"
                  >
                    e-krebs/e-krebs.github.io
                  </a>
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "React", icon: react },
                { label: "parcel", icon: threedots },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: MdCode,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="chrome dev tools">Algolia Analyzer</CardTitle>
              <CardList className="space-y-6">
                <li>chrome extension {">"} dev tools</li>
                <li>Network tab but for requests to Algolia servers</li>
                <li>
                  <a
                    href="https://github.com/algolia/algolia-analyzer"
                    target="_blank"
                    className="underline"
                  >
                    algolia/algolia-analyzer
                  </a>
                </li>
                <li>using Algolia design system (satellite) + tailwindcss</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "React", icon: react },
                { label: "parcel", icon: threedots },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: MdCode,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="not a design system">react library</CardTitle>
              <CardList className="space-y-6">
                <li>a small collection of themable components that I can reuse across projects</li>
                <li>react, react-aria, tailwindcss</li>
                <li>
                  <a
                    href="https://github.com/e-krebs/react-library"
                    target="_blank"
                    className="underline"
                  >
                    e-krebs/react-library
                  </a>
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "React", icon: react },
                { label: "parcel", icon: threedots },
                { label: "react aria", icon: threedots },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: MdCode,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="february 2022 – may 2022">check</CardTitle>
              <CardList className="space-y-6">
                <li>experimentation at building my own test framework (for fun)</li>
                <li>written using node</li>
                <li>
                  <a href="https://github.com/e-krebs/check" target="_blank" className="underline">
                    e-krebs/check
                  </a>
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "jest", icon: jest },
                { label: "node", icon: node },
                { label: "Typescript", icon: typescript },
              ]}
            />
          </>
        ),
      },
      {
        icon: MdCode,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="since december 2016">pile</CardTitle>
              <CardList className="space-y-6">
                <li>A chrome extension that show your Pocket list (more soon)</li>
                <li>A personal must-have: I still use it everyday!</li>
                <li>React, parcel, tailwindcss</li>
                <li>
                  <a
                    href="https://chromewebstore.google.com/detail/pile/injagampgkalbbmhpemnfknoeghfenif"
                    target="_blank"
                    className="underline flex"
                  >
                    <img src={chrome.href} className="w-6 h-6 mr-3" /> chrome web store
                  </a>
                  <a href="https://github.com/e-krebs/pile" target="_blank" className="underline">
                    e-krebs/pile
                  </a>
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "React", icon: react },
                { label: "parcel", icon: threedots },
                { label: "react aria", icon: threedots },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: MdCode,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="september 2017 – october 2017">http sleep</CardTitle>
              <CardList className="space-y-6">
                <li>
                  A Windows service that hibernates your windows PC when receiving a specific http
                  request
                </li>
                <li>Build using node.js</li>
                <li>Used in combination with my personal home-assistant</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "node", icon: node },
                { label: "windows", icon: microsoft },
              ]}
            />
          </>
        ),
      },
      {
        type: "back",
        icon: MdOutlineMessage,
        content: (
          <CardContent className="h-full px-6 items-center justify-center">
            <div className="backdrop-blur-sm p-6 space-y-6">
              <CardTitle subtitle="(I'm not looking for a job)">contact me</CardTitle>
              <div className="flex gap-x-6 justify-center text-white">
                <CardLinkIcon
                  href="https://www.linkedin.com/in/emmanuel-krebs-37926b91/"
                  title="linkedin"
                  imageUrl={linkedin}
                />
                <CardLinkIcon
                  href="https://twitter.com/emmkrebs"
                  title="twitter"
                  imageUrl={twitter}
                />
                <CardLinkIcon href="https://github.com/e-krebs" title="github" imageUrl={github} />
              </div>
            </div>
          </CardContent>
        ),
      },
    ]}
  />
);
