import { FC } from "react";
import {
  MdArrowForward,
  MdCalendarMonth,
  MdCode,
  MdMoreHoriz,
  MdOpenInNew,
  MdPerson,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Scroller } from "../Scroller";
import { CardContent, CardList, CardTitle } from "../PlayingCard";

const person = new URL("../img/person.svg", import.meta.url);
const linkedin = new URL("../img/linkedin.svg", import.meta.url);
const twitter = new URL("../img/twitter.svg", import.meta.url);
const github = new URL("../img/github.svg", import.meta.url);

const algolia = new URL("../img/algolia.svg", import.meta.url);
const expertime = new URL("../img/expertime.svg", import.meta.url);

const CardLinkIcon: FC<{ href: string; title: string; imageUrl: URL }> = ({
  href,
  title,
  imageUrl,
}) => (
  <a href={href} title={title} target="_blank">
    <img src={imageUrl.href} alt={title} className="w-9 h-9" />
  </a>
);

export const Me = () => (
  <Scroller
    cards={[
      {
        icon: MdPerson,
        content: (
          <CardContent className="top-12 gap-y-6">
            <img src={person.href} alt="person" className="mx-auto max-h-56 md:max-h-64" />
            <CardTitle>
              <h1>Emmanuel Krebs</h1>
              <span className="text-lg md:text-xl">Senior software engineer</span>
            </CardTitle>
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
          </CardContent>
        ),
      },
      {
        icon: MdCalendarMonth,
        content: (
          <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
            <CardTitle>Career & Training</CardTitle>
            <CardList className="space-y-3">
              <li>
                <b>2008:</b>{" "}
                <a href="http://www.sudoc.fr/132355760" target="_blank" className="underline">
                  PhD <MdOpenInNew className="inline w-4 h-4" />
                </a>{" "}
                in theoretical chemistry at UPMC and IFP
              </li>
              <li>
                <b>2012:</b> started as a software developer at{" "}
                <img src={expertime.href} alt="expertime" className="inline mb-1 w-4 h-4" />{" "}
                expertime (a service company){" "}
              </li>
              <li>
                <b>2014:</b> became a technical consultant at{" "}
                <img src={expertime.href} alt="expertime" className="inline mb-1 w-4 h-4" />{" "}
                expertime
              </li>
              <li>
                <b>2017:</b> became a software architect at{" "}
                <img src={expertime.href} alt="expertime" className="inline mb-1 w-4 h-4" />{" "}
                expertime
              </li>
              <li>
                <b>2019:</b> became a senior software engineer at{" "}
                <img src={algolia.href} alt="algolia" className="inline mb-1 w-4 h-4" /> algolia
              </li>
            </CardList>
          </CardContent>
        ),
      },
      {
        icon: MdCode,
        content: (
          <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
            <CardTitle>Skills</CardTitle>
            <CardList className="space-y-3">
              <li>React, Typescript & more</li>
              <li>DevX is very important to me</li>
              <li>I have a taste for UI and UX</li>
              <li>Most of my professional work is closed-source</li>
              <li>I'm a problem solver</li>
              <li>I'm a fast learner</li>
              <li>I'm a very organized person, tending to always anticipate what's to come</li>
            </CardList>
          </CardContent>
        ),
      },
      {
        icon: MdMoreHoriz,
        content: (
          <CardContent className="top-9 md:top-12 gap-y-3 md:gap-y-6">
            <CardTitle>... and more</CardTitle>
            <CardList className="space-y-1.5 md:space-y-3">
              <li>Native french, professional english</li>
              <li>I live in Paris (France)</li>
              <li>I'm an enthusiastic person who likes team work & challenges</li>
              <li>I am used to (and enjoy) tutoring junior people</li>
              <li>I'm a curious person, always looking at what's happening around</li>
              <li>I'm not looking for a new work experience, at least right now!</li>
            </CardList>
          </CardContent>
        ),
      },
      {
        type: "back",
        icon: MdArrowForward,
        content: (
          <CardContent className="h-full px-6 items-center justify-center">
            <div className="backdrop-blur-sm text-2xl leading-10 text-center">
              more details in the{" "}
              <NavLink className={"underline"} to="/work">
                Work Experiences
                <MdOpenInNew className="ml-2 inline w-4 h-4" />
              </NavLink>{" "}
              and{" "}
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
