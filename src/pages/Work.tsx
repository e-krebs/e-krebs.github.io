import { MdArrowForward, MdWork } from "react-icons/md";
import { CardContent, CardList, CardTitle } from "../PlayingCard";
import { Scroller } from "../Scroller";
import { TagList } from "../Tags";

const algolia = new URL("../img/algolia.svg", import.meta.url);
const expertime = new URL("../img/expertime.svg", import.meta.url);

const Algolia = ({ className }) => <img src={algolia.href} alt="algolia" className={className} />;
const Expertime = ({ className }) => (
  <img src={expertime.href} alt="expertime" className={className} />
);

const azure = new URL("../img/azure.svg", import.meta.url);
const csharp = new URL("../img/csharp.svg", import.meta.url);
const dotnet = new URL("../img/dotnet.svg", import.meta.url);
const javascript = new URL("../img/javascript.svg", import.meta.url);
const jest = new URL("../img/jest.svg", import.meta.url);
const node = new URL("../img/node.svg", import.meta.url);
const rails = new URL("../img/rubyonrails.svg", import.meta.url);
const react = new URL("../img/react.svg", import.meta.url);
const tailwindcss = new URL("../img/tailwindcss.svg", import.meta.url);
const typescript = new URL("../img/typescript.svg", import.meta.url);

export const Work = () => (
  <Scroller
    cards={[
      {
        icon: MdWork,
        content: (
          <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
            <CardTitle>in short</CardTitle>
            <CardList className="space-y-3">
              <li>
                <b>2019 - ?:</b> <Algolia className="inline mb-1 w-4 h-4" /> algolia
                <CardList isSubList={true} className="my-1 space-y-1">
                  <li>
                    <b>2022 - ?:</b> merchandising
                  </li>
                  <li>
                    <b>2020 - 2022:</b> internals (admin, billing)
                  </li>
                  <li>
                    <b>2019 - 2020:</b> internal tools
                  </li>
                </CardList>
              </li>
              <li>
                <b>2012 - 2019:</b> <Expertime className="inline mb-1 w-4 h-4" /> expertime
                <CardList isSubList={true} className="my-1 space-y-1">
                  <li>
                    <b>2017 - 2019:</b> software architect
                  </li>
                  <li>
                    <b>2014 - 2017:</b> technical consultant
                  </li>
                  <li>
                    <b>2012 - 2014:</b> software developer
                  </li>
                </CardList>
              </li>
            </CardList>
          </CardContent>
        ),
      },
      {
        icon: Algolia,
        content: (
          <>
            <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
              <CardTitle subtitle="2022 – ?">merchandising</CardTitle>
              <CardList className="space-y-4">
                <li>Building merchandising studio</li>
                <li>First Algolia UI since Dashboard</li>
                <li>team growing from 2 to 10</li>
                <li>Tech Lead of the team</li>
                <li>Heavily tested (jest)</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "jest", icon: jest },
                { label: "React", icon: react },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: Algolia,
        content: (
          <>
            <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
              <CardTitle subtitle="2020 – 2022">internals</CardTitle>
              <CardList className="space-y-3">
                <li>Re-building from scratch Algolia's internal admin</li>
                <li>Tech Lead (frontend) of the team</li>
                <li>Billing system</li>
                <li>TDD developing: backend (rspec) & frontend (jest)</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "jest", icon: jest },
                { label: "Rails", icon: rails },
                { label: "React", icon: react },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: Algolia,
        content: (
          <>
            <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
              <CardTitle subtitle="2019 – 2020">internal tools</CardTitle>
              <CardList className="space-y-3">
                <li>Building tools for Algolia's internal usage</li>
                <li>Tech Lead of the team</li>
                <li>Slack bot</li>
                <li>Demo Builder: build demo for prospects with a no-code UI</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "node", icon: node },
                { label: "React", icon: react },
                { label: "Typescript", icon: typescript },
                { label: "tailwindcss", icon: tailwindcss },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-9 gap-y-3">
              <CardTitle subtitle="april 2018 — january 2019">Feu Vert</CardTitle>
              <CardList className="space-y-2">
                <li>Architectural Redesign</li>
                <li>
                  new product repository, new search & navigation engine on the public e-commerce
                  website
                </li>
                <li>Using Azure IaaS and PaaS</li>
                <li>Optimization for heavy technical & functional constraints</li>
                <li>Leading the dev team</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "C#", icon: csharp },
                { label: ".NET", icon: dotnet },
                { label: "Azure", icon: azure },
                { label: "JavaScript", icon: javascript },
              ]}
            />
          </>
        ),
      },
      { type: "back", icon: MdArrowForward },
    ]}
  />
);
