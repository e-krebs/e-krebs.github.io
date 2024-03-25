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
import { FC, useCallback, useEffect, useRef, useState } from "react";

const person = new URL("../img/person.svg", import.meta.url);
const linkedin = new URL("../img/linkedin.svg", import.meta.url);
const twitter = new URL("../img/twitter.svg", import.meta.url);
const github = new URL("../img/github.svg", import.meta.url);

const safeIndex = (index: number) => Math.min(4, Math.max(0, index));

const SnapButton: FC<{
  position: "left" | "right";
}> = ({ position }) => {
  const { index } = useParams<{ index: string }>();
  const navigate = useNavigate();

  return (
    <>
      <div
        className={cx(
          `z-10 absolute top-0 bottom-0 w-20 flex items-center px-3 from-white blur-sm`,
          position === "left" && "left-0 bg-gradient-to-r",
          position === "right" && "right-0 bg-gradient-to-l"
        )}
      ></div>
      <button
        className={cx(
          `z-20 p-3 rounded-lg absolute top-[calc(50%-0.5rem-0.75rem/2)] md:top-[calc(50%-1rem-0.75rem/2)]
          bg-teal-500 hover:bg-yellow-500 transition-colors
          text-4xl text-white blur-none drop-shadow-xl`,
          position === "left" && "left-3 hover:-translate-x-1",
          position === "right" && "right-3 hover:translate-x-1"
        )}
        onClick={() => {
          navigate(`/home/${safeIndex(parseInt(index) + (position === "left" ? -1 : 1))}`);
        }}
      >
        {position === "left" && <MdArrowBack className="w-4 h-4 md:w-8 md:h-8" />}
        {position === "right" && <MdArrowForward className="w-4 h-4 md:w-8 md:h-8" />}
      </button>
    </>
  );
};

const Spacer = () => (
  <div className="w-[calc(50%-10rem-1.5rem)] md:w-[calc(50%-12rem-1.5rem)] shrink-0" />
);

export const Me = () => {
  const navigate = useNavigate();
  const scrollerRef = useRef<HTMLDivElement | undefined>();

  const [snapWidth, setSnapWidth] = useState(0);
  const cardRef = useCallback((node: HTMLDivElement | null) => {
    setSnapWidth(node?.offsetWidth ?? 0);
  }, []);

  const { index } = useParams<{ index: string }>();

  useEffect(() => {
    const left = snapWidth * parseInt(index);
    scrollerRef.current.scrollTo({ left: left, behavior: "smooth" });
  }, [snapWidth, index]);

  useEffect(() => {
    const scrollEvent = () => {
      const currentIndex = Math.round(scrollerRef.current.scrollLeft / snapWidth);
      if (index !== `${currentIndex}`) {
        navigate(`/home/${safeIndex(currentIndex)}`);
      }
    };
    scrollerRef.current?.addEventListener("scrollend", scrollEvent);

    return () => {
      scrollerRef.current?.removeEventListener("scrollend", scrollEvent);
    };
  }, [scrollerRef.current]);

  return (
    <>
      <SnapButton position="left" />
      <SnapButton position="right" />

      <div
        ref={scrollerRef}
        className="relative h-full w-full flex gap-6 snap-x *:snap-center *:my-auto overflow-x-auto"
      >
        <Spacer />

        <CardFront icon={MdPerson} className="w-80 md:w-96 hover:-rotate-1" ref={cardRef}>
          <div className="absolute top-12 w-full flex flex-col gap-y-6">
            <img src={person.href} alt="person" className="mx-auto max-h-56 md:max-h-64" />
            <title className="text-3xl md:text-4xl font-semibold capitalize flex flex-col w-full items-center p-3">
              <h1>Emmanuel Krebs</h1>
              <span className="text-lg md:text-xl">Senior software engineer</span>
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

        <CardFront className="w-80 md:w-96" icon={MdCalendarMonth}>
          <div className="absolute top-9 md:top-12 w-full flex flex-col gap-y-3 md:gap-y-6">
            <title className="text-3xl md:text-4xl font-semibold capitalize flex w-full justify-center p-3">
              Career & Training
            </title>
            <ul className="pl-9 pr-3 md:pl-12 md:pr-6 space-y-3 text-lg md:text-xl list-outside list-disc">
              <li>
                <b>2008:</b>{" "}
                <a href="http://www.sudoc.fr/132355760" target="_blank" className="underline">
                  PhD <MdOpenInNew className="inline w-4 h-4" />
                </a>{" "}
                in theoretical chemistry at UPMC and IFP
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

        <CardFront className="w-80 md:w-96" icon={MdCode}>
          <div className="absolute top-9 md:top-12 w-full flex flex-col gap-y-3 md:gap-y-6">
            <title className="text-3xl md:text-4xl font-semibold capitalize flex w-full justify-center p-3">
              Skills
            </title>
            <ul className="pl-9 pr-3 md:pl-12 md:pr-6 space-y-3 text-lg md:text-xl list-outside list-disc">
              <li>React, Typescript & more</li>
              <li>DevX is very important to me</li>
              <li>I have a taste for UI and UX</li>
              <li>Most of my professional work is closed-source</li>
              <li>I'm a problem solver</li>
              <li>I'm a fast learner</li>
              <li>I'm a very organized person, tending to always anticipate what's to come</li>
            </ul>
          </div>
        </CardFront>

        <CardFront className="w-80 md:w-96" icon={MdMoreHoriz}>
          <div className="absolute top-9 md:top-12 w-full flex flex-col gap-y-3 md:gap-y-6">
            <title className="text-3xl md:text-4xl font-semibold capitalize flex w-full justify-center p-3">
              ... and more
            </title>
            <ul className="pl-9 pr-3 md:pl-12 md:pr-6 space-y-1.5 md:space-y-3 text-lg md:text-xl list-outside list-disc">
              <li>Native french, professional english</li>
              <li>I live in Paris (France)</li>
              <li>I'm an enthusiastic person who likes team work & challenges</li>
              <li>I am used to (and enjoy) tutoring junior people</li>
              <li>I'm a curious person, always looking at what's happening around</li>
              <li>I'm not looking for a new work experience, at least right now!</li>
            </ul>
          </div>
        </CardFront>

        <CardBack
          className={cx("w-80 md:w-96 hover:rotate-1", index === "4" && "delay-300 rotate-1")}
          icon={MdArrowForward}
        >
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
        <Spacer />
      </div>
    </>
  );
};
