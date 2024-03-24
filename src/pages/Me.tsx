import cx from "clsx";
import {
  MdArrowForward,
  MdArrowBack,
  MdCalendarMonth,
  MdCode,
  MdMoreHoriz,
  MdOpenInNew,
  MdPerson,
} from "react-icons/md";
import { CardBack, CardFront } from "../PlayingCard";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useReducer, useRef } from "react";

const person = new URL("../img/person.svg", import.meta.url);
const linkedin = new URL("../img/linkedin.svg", import.meta.url);
const twitter = new URL("../img/twitter.svg", import.meta.url);
const github = new URL("../img/github.svg", import.meta.url);

const snapWidth = 382;
const max = 4;

const SnapButton: FC<{
  position: "left" | "right";
}> = ({ position }) => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={cx(
          `z-10 fixed top-0 bottom-0 w-20 flex items-center px-3 from-white blur-sm`,
          position === "left" && "left-0 bg-gradient-to-r",
          position === "right" && "right-0 bg-gradient-to-l"
        )}
      ></div>
      <button
        className={cx(
          `z-20 p-3 rounded-lg fixed top-1/2
          bg-teal-500 hover:bg-yellow-500 transition-colors
          text-4xl text-white blur-none drop-shadow-xl`,
          position === "left" && "left-3 hover:-translate-x-1",
          position === "right" && "right-3 hover:translate-x-1"
        )}
        onClick={() => {
          navigate(
            `/home/${Math.min(max, Math.max(0, parseInt(index) + (position === "left" ? -1 : 1)))}`
          );
        }}
      >
        {position === "left" && <MdArrowBack />}
        {position === "right" && <MdArrowForward />}
      </button>
    </>
  );
};
export const Me = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { index } = useParams<{ index: string }>();

  useEffect(() => {
    ref.current.scrollTo({ left: snapWidth * parseInt(index), behavior: "smooth" });
  }, [index]);

  return (
    <div
      ref={ref}
      className="relative h-full w-full flex gap-3 md:gap-6 snap-x *:snap-center *:my-auto overflow-x-auto"
    >
      <SnapButton position="left" />
      <SnapButton position="right" />
      <div className="w-[calc(50%-12rem-1.5rem)] shrink-0" />
      <CardFront icon={MdPerson} className="w-96">
        <div className="absolute top-12 w-full flex flex-col gap-y-6">
          <img src={person.href} alt="person" className="mx-auto max-h-64" />
          <title className="text-4xl font-semibold capitalize flex flex-col w-full items-center p-3">
            <h1>Emmanuel Krebs</h1>
            <span className="text-xl">Senior software engineer</span>
          </title>
          <div className="flex gap-x-6 justify-center text-white">
            <a
              href="https://www.linkedin.com/in/emmanuel-krebs-37926b91/"
              title="linkedin"
              target="_blank"
            >
              <img src={linkedin.href} alt="linkedin" className="w-9 h-9" />
            </a>
            <a href="https://twitter.com/emmkrebs" title="twitter" target="_blank">
              <img src={twitter.href} alt="twitter" className="w-9 h-9" />
            </a>
            <a href="https://github.com/e-krebs" title="github" target="_blank">
              <img src={github.href} alt="github" className="w-9 h-9" />
            </a>
          </div>
        </div>
      </CardFront>
      <CardFront className="w-96" icon={MdCalendarMonth}>
        <div className="absolute top-12 w-full flex flex-col gap-y-6">
          <title className="text-4xl font-semibold capitalize flex w-full justify-center p-3">
            Career & Training
          </title>
          <ul className="pl-12 pr-6 space-y-3 text-xl list-outside list-disc">
            <li>
              <a href="http://www.sudoc.fr/132355760" target="_blank" className="self-center">
                <b>2008:</b> PhD in theoretical chemistry at Paris 6 university and IFP{" "}
                <MdOpenInNew className="inline w-4 h-4" />
              </a>
            </li>
            <li>
              <b>2012:</b> started as a software developer at expertime (a service company)
            </li>
            <li>
              <b>2014:</b> became a technical consultant at expertime
            </li>
            <li>
              <b>2017:</b> became a software architect at expertime
            </li>
            <li>
              <b>2019:</b> became a senior software engineer at algolia
            </li>
          </ul>
        </div>
      </CardFront>
      <CardFront className="w-96" icon={MdCode}>
        <div className="absolute top-12 w-full flex flex-col gap-y-6">
          <title className="text-4xl font-semibold capitalize flex w-full justify-center p-3">
            Skills
          </title>
          <ul className="pl-12 pr-6 space-y-3 text-xl list-outside list-disc">
            <li>React, Typescript & more</li>
            <li>DevX is very important to me</li>
            <li>I have a taste for UI and UX</li>
            <li>most of my professional work is closed-source</li>
            <li>I'm a problem solver</li>
            <li>I'm a fast learner</li>
            <li>I'm a very organised person, tending to always anticipate what's to come</li>
          </ul>
        </div>
      </CardFront>
      <CardFront className="w-96" icon={MdMoreHoriz}>
        <div className="absolute top-12 w-full flex flex-col gap-y-6">
          <title className="text-4xl font-semibold capitalize flex w-full justify-center p-3">
            ... and more
          </title>
          <ul className="pl-12 pr-6 space-y-3 text-xl list-outside list-disc">
            <li>native french, professional english</li>
            <li>I live in Paris (France)</li>
            <li>I'm an enthusiactic person who likes team work & challenges</li>
            <li>I am used to (and enjoy) tutoring junior people</li>
            <li>I'm a curious person, always looking at what's happening around</li>
            <li>I'm not looking for a new work experience, at least right now!</li>
          </ul>
        </div>
      </CardFront>
      <CardBack className="w-96 hover:rotate-1" icon={MdArrowForward}>
        <div className="absolute w-full h-full px-6 flex items-center justify-center">
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
        </div>
      </CardBack>
      <div className="w-[calc(50%-12rem-1.5rem)] shrink-0" />
    </div>
  );
};
