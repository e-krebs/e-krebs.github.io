import cx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import { CardBack, CardBackProps } from "./PlayingCard";
import { FC, useEffect } from "react";
import { MdPerson, MdWork, MdAllInclusive } from "react-icons/md";

interface CardLinkProps extends CardBackProps {
  to: string;
  title: string;
}

const CardLink: FC<CardLinkProps> = ({ to, title, icon, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cx(
        className,
        "flex transition-transform",
        isActive ? "md:translate-y-12 translate-y-16" : "hover:translate-y-6 hover:z-40"
      )
    }
    title={title}
  >
    <CardBack title={title} icon={icon} className="max-w-full" />
  </NavLink>
);

export const Shell = () => (
  <div className="flex flex-col">
    <header className="relative h-32">
      <div className="h-full md:max-w-[50rem] mx-auto grid grid-cols-3 justify-end px-2 md:px-6 -mt-[20.5rem] md:-mt-64 gap-6">
        <CardLink
          to="/home"
          title="who am I?"
          icon={MdPerson}
          className="z-30 hover:z-40 max-w-[50vw] md:max-w-96 bottom-0 left-0"
        />
        <CardLink
          to="/work"
          title="work experiences"
          icon={MdWork}
          className="z-20 max-w-[50vw] md:max-w-96 bottom-0 left-[25vw] justify-center"
        />
        <CardLink
          to="/other"
          title="other projects"
          icon={MdAllInclusive}
          className="z-10 max-w-[50vw] md:max-w-96 bottom-0 right-0 justify-end"
        />
      </div>
    </header>
    <main className="relative flex justify-center items-center w-full h-[calc(100vh-8rem)] overflow-hidden">
      <Outlet />
    </main>
  </div>
);
