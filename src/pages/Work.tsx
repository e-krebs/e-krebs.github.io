import { MdArrowForward, MdOpenInNew, MdWork } from "react-icons/md";
import { CardContent, CardList, CardTitle } from "../components/PlayingCard";
import { Scroller } from "../components/Scroller";
import { TagList } from "../components/Tags";
import { NavLink } from "react-router-dom";

const algolia = new URL("../img/algolia.svg", import.meta.url);
const expertime = new URL("../img/expertime.svg", import.meta.url);

const Algolia = ({ className }) => <img src={algolia.href} alt="algolia" className={className} />;
const Expertime = ({ className }) => (
  <img src={expertime.href} alt="expertime" className={className} />
);

const threedots = new URL("../img/3dots.svg", import.meta.url);
const android = new URL("../img/android.svg", import.meta.url);
const angular = new URL("../img/angular.svg", import.meta.url);
const azure = new URL("../img/azure.svg", import.meta.url);
const bootstrap = new URL("../img/bootstrap.svg", import.meta.url);
const chrome = new URL("../img/chrome.svg", import.meta.url);
const csharp = new URL("../img/csharp.svg", import.meta.url);
const dotnet = new URL("../img/dotnet.svg", import.meta.url);
const ios = new URL("../img/ios.svg", import.meta.url);
const java = new URL("../img/java.svg", import.meta.url);
const javascript = new URL("../img/javascript.svg", import.meta.url);
const jest = new URL("../img/jest.svg", import.meta.url);
const materialDesign = new URL("../img/material-design.svg", import.meta.url);
const microsoft = new URL("../img/microsoft.svg", import.meta.url);
const msSql = new URL("../img/ms-sql.svg", import.meta.url);
const node = new URL("../img/node.svg", import.meta.url);
const polymer = new URL("../img/polymer.svg", import.meta.url);
const rails = new URL("../img/rubyonrails.svg", import.meta.url);
const react = new URL("../img/react.svg", import.meta.url);
const sqlite = new URL("../img/sqlite.svg", import.meta.url);
const swift = new URL("../img/swift.svg", import.meta.url);
const tailwindcss = new URL("../img/tailwindcss.svg", import.meta.url);
const typescript = new URL("../img/typescript.svg", import.meta.url);
const vb = new URL("../img/vb.svg", import.meta.url);
const webComponents = new URL("../img/web-components.svg", import.meta.url);

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
            <CardContent className="top-9 gap-y-2">
              <CardTitle>R&D</CardTitle>
              <CardList className="space-y-2">
                <li>
                  Browser extension (chrome)
                  <CardList isSubList={true}>
                    <li>Internal seminar and Demo</li>
                    <li>Development of extensions for clients</li>
                  </CardList>
                </li>
                <li>
                  Progressive Web Apps (PWA)
                  <CardList isSubList={true}>
                    <li>Internal seminar and Demo</li>
                  </CardList>
                </li>
                <li>
                  Bots
                  <CardList isSubList={true}>
                    <li>MS Bot Framework, LUIS, Azure Bots Services (all during preview)</li>
                  </CardList>
                </li>
                <li>
                  ARKit
                  <CardList isSubList={true}>
                    <li>Demo of an Augmented Reality application on iOS, using Xamarin</li>
                  </CardList>
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "ARKit", icon: ios },
                { label: "polymer", icon: polymer },
                { label: ".NET core", icon: dotnet },
                { label: "shadow DOM", icon: javascript },
                { label: "web components", icon: webComponents },
                { label: "material design lite", icon: materialDesign },
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
                  New product repository, new search & navigation engine on the public e-commerce
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
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-9 gap-y-3">
              <CardTitle subtitle="march 2018 — january 2019">France TV</CardTitle>
              <CardList className="space-y-2">
                <li>On site</li>
                <li>Mobile Solutions</li>
                <li>Updating MDM (WSO2) to newer version</li>
                <li>Responsible of custom internal apps: iOS & Android</li>
                <li>Agent app & Internal Store App</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "iOS", icon: ios },
                { label: "java", icon: java },
                { label: "swift", icon: swift },
                { label: "android", icon: android },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-9 gap-y-6">
              <CardTitle subtitle="july 2017 — september 2017">OECD</CardTitle>
              <CardList className="space-y-6">
                <li>Developing a responsive web front-end</li>
                <li>Full MVC in .NET with bootstrap (desktop-mobile)</li>
                <li>Dealing with authorization</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "IIS", icon: microsoft },
                { label: ".NET", icon: dotnet },
                { label: "bootstrap", icon: bootstrap },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="december 2016 – january 2019">Natixis-Coficiné</CardTitle>
              <CardList className="space-y-3">
                <li>Windows 8 & 10 App</li>
                <li>
                  Industrialization of a collaborative hybrid voting solution for movie financing
                </li>
                <li>Sharepoint back-office (not me)</li>
                <li>IIS for web services & live signalR synchronization</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: ".NET", icon: dotnet },
                { label: "ms-SQL", icon: msSql },
                { label: "SQLite", icon: sqlite },
                { label: "Windows 8 & 10", icon: microsoft },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-3">
              <CardTitle subtitle="september 2016 – july 2018">Dassault Aviation</CardTitle>
              <CardList className="space-y-2">
                <li>
                  Flight Maintenance Doc: Maintenance documentation repository iPad (public app)
                </li>
                <li>NuGet reusable components</li>
                <li>Technical documentation</li>
                <li>
                  Conception and development of a dedicated app to perform distributed performance
                  tests of the download solution
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "iPad", icon: ios },
                { label: "SQLite", icon: sqlite },
                { label: "C# (Xamarin.Forms)", icon: csharp },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-9 gap-y-6">
              <CardTitle subtitle="2017">Clarins</CardTitle>
              <CardList className="space-y-6">
                <li>Cross-Platform Mobile App (android, iOS, Windows Phone)</li>
                <li>Conception and development of mobile app for notifications</li>
                <li>Based on the collaborative portal of the group</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "iOS", icon: ios },
                { label: "Azure", icon: azure },
                { label: "Android", icon: android },
                { label: "WinPhone", icon: microsoft },
                { label: "C# (Xamarin)", icon: csharp },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="april 2016 – july 2016">Logement Français</CardTitle>
              <CardList className="space-y-6">
                <li>Development of a Windows 10 app for Surface Pro 4 (UWP)</li>
                <li>Dedicated to sales people</li>
                <li>Development of APIs for the app - .NET core</li>
                <li>Unit testing those APIs - postman</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "Azure", icon: azure },
                { label: "SQLite", icon: sqlite },
                { label: ".NET core", icon: dotnet },
                { label: "Windows 10 (UWP)", icon: microsoft },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="march 2016 – june 2016">Vallourec</CardTitle>
              <CardList className="space-y-6">
                <li>Migration of 6 critical apps in .NET</li>
                <li>Setting up an ALM solution & training the team (onsite)</li>
                <li>
                  Conception of the ALM solution to deploy multiple apps on different environments
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "IIS", icon: microsoft },
                { label: "tfs 2013", icon: microsoft },
                { label: "MS release management", icon: microsoft },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="march 2016 – may 2016">Bayard presse</CardTitle>
              <CardList className="space-y-6">
                <li>
                  Helping migrating{" "}
                  <a href="https://notrefamille.com" target="_blank" className="underline">
                    notrefamille.com
                  </a>{" "}
                  into Azure
                </li>
                <li>Training and technical assistance for IT team</li>
                <li>Technical assistance and supervision of migration and deployment work</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "azure PaaS", icon: azure },
                { label: ".NET MVC", icon: dotnet },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="february 2016 – march 2016">ïdkids</CardTitle>
              <CardList className="space-y-6">
                <li>
                  Helping migrating{" "}
                  <a href="https://www.idkids.fr/" target="_blank" className="underline">
                    idkids.fr
                  </a>{" "}
                  into Azure
                </li>
                <li>Training and technical assistance for IT team</li>
                <li>Technical assistance and supervision of migration and deployment work</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "azure PaaS", icon: azure },
                { label: ".NET MVC", icon: dotnet },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="june 2016">Holder</CardTitle>
              <CardList className="space-y-2">
                <li>onsite training and Conseling about Azure IaaS and PaaS solutions</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "azure IaaS", icon: azure },
                { label: "azure PaaS", icon: azure },
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
              <CardTitle subtitle="april 2014 – december 2015">HSS (M6 group)</CardTitle>
              <CardList className="space-y-2 overflow-y-scroll max-h-80">
                <li>Maintenance & evolutions on e-commerce front-end and back-office</li>
                <li>Website factory architecture, on Azure</li>
                <li>Analysis, bug fixing</li>
                <li>
                  Functional analysis of business needs, making technical specifications and
                  evolutions
                </li>
                <li>Handling delivering packages to devOps</li>
                <li>Team work and agile methods</li>
                <li>
                  Main achievements:
                  <CardList isSubList={true}>
                    <li>implementation of different levels of inheritance between sites</li>
                    <li>
                      developing and graphic reshaping of a monitoring website destined to dev team:
                      dashboards, logs watching, flux monitoring
                    </li>
                    <li>
                      setting up of azure webjobs to outsource tasks: sending instant or scheduled
                      emails, technical tasks
                    </li>
                    <li>
                      Writing azure deployment scripts and setting up a VM to perform sites
                      publication
                    </li>
                    <li>Writing scripts to generate nuget packages for internal usage</li>
                    <li>
                      transforming part of the order tunnel from synchronous to asynchronous
                      updating using angularJs & WebAPI
                    </li>
                  </CardList>
                </li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "C#", icon: csharp },
                { label: ".NET", icon: dotnet },
                { label: "endeca", icon: threedots },
                { label: "angular", icon: angular },
                { label: "bootstrap", icon: bootstrap },
                { label: "SQL azure", icon: msSql },
                { label: "azure PaaS & IaaS", icon: azure },
                { label: "chrome extension", icon: chrome },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-9 gap-y-6">
              <CardTitle subtitle="november 2012 – march 2014">Mistergooddeal</CardTitle>
              <CardList className="space-y-3">
                <li>Maintenance & evolutions on e-commerce front-end and back-office</li>
                <li>analysis and development of evolutions and bug fixes</li>
                <li>qualification of sales requests, interfacing sales and dev team</li>
                <li>handling delivering packages</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "C#", icon: csharp },
                { label: ".NET", icon: dotnet },
                { label: "mirakl", icon: threedots },
                { label: "endeca", icon: threedots },
                { label: "javascript", icon: javascript },
                { label: "SQL azure", icon: msSql },
                { label: "azure PaaS & IaaS", icon: azure },
                { label: "chrome extension", icon: chrome },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="august 2012 – november 2012">Evian chez vous</CardTitle>
              <CardList className="space-y-6">
                <li>Danone</li>
                <li>Developing evolutions on the e-commerce front-end and sales backoffice.</li>
                <li>Graphical integration</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "C#", icon: csharp },
                { label: ".NET", icon: dotnet },
                { label: "javascript", icon: javascript },
                { label: "SQL server", icon: msSql },
              ]}
            />
          </>
        ),
      },
      {
        icon: Expertime,
        content: (
          <>
            <CardContent className="top-12 gap-y-6">
              <CardTitle subtitle="may 2012 – july 2012">Business France</CardTitle>
              <CardList className="space-y-6">
                <li>ex-UbiFrance - on site</li>
                <li>Developing evolutions on the central business app of the SI</li>
                <li>Analysis and functional assistance to the business people about news</li>
              </CardList>
            </CardContent>
            <TagList
              tags={[
                { label: "vb", icon: vb },
                { label: ".NET", icon: dotnet },
                { label: "javascript", icon: javascript },
                { label: "SQL server", icon: msSql },
              ]}
            />
          </>
        ),
      },
      {
        type: "back",
        icon: MdArrowForward,
        content: (
          <CardContent className="h-full px-6 items-center justify-center">
            <div className="backdrop-blur-sm text-2xl leading-10 text-center">
              more projects in the{" "}
              <NavLink className={"underline"} to="/other">
                Other Projects
                <MdOpenInNew className="ml-2 inline w-4 h-4" />
              </NavLink>{" "}
              sections
            </div>
          </CardContent>
        ),
      },
    ]}
  />
);
