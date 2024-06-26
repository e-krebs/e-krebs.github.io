import { twMerge } from "tailwind-merge";
import { FC, MouseEventHandler, PropsWithChildren, forwardRef } from "react";

interface CardShellProps {
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
}

export interface CardProps extends CardShellProps {
  icon?: FC<{ className?: string }>;
}

export interface CardBackProps extends CardProps {
  title?: string;
}

export const CardContent: FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => <div className={twMerge(className, "absolute w-full flex flex-col")}>{children}</div>;

export const CardTitle: FC<PropsWithChildren<{ subtitle?: string }>> = ({ subtitle, children }) => (
  <title className="text-3xl md:text-4xl font-semibold capitalize flex flex-col w-full items-center p-3">
    {children}
    <span className="text-lg md-text-xl lowercase">{subtitle}</span>
  </title>
);

export const CardList: FC<PropsWithChildren<{ className?: string; isSubList?: boolean }>> = ({
  className,
  children,
  isSubList = false,
}) => (
  <ul
    className={twMerge(
      className,
      isSubList
        ? "inside text-base md:text-lg list-inside"
        : "text-lg md:text-xl list-outside pl-9 md:pl-12 pr-3 md:pr-6",
      "list-disc"
    )}
  >
    {children}
  </ul>
);

const CardShell = forwardRef<HTMLDivElement, PropsWithChildren<CardShellProps>>(
  ({ children, className, onClick }, ref) => (
    <section
      ref={ref}
      className={twMerge(
        className,
        `flex shrink-0 relative aspect-[2.75/4.5] md:aspect-[2.5/3.5] min-w-60
    text-white
    origin-bottom-left bg-gradient-to-br from-yellow-500 to-teal-500 hover:from-teal-500 hover:to-yellow-500
    border border-gray-200 rounded-3xl shadow-xl overflow-hidden`
      )}
      onClick={onClick}
    >
      {children}
    </section>
  )
);

export const CardFront = forwardRef<HTMLDivElement, PropsWithChildren<CardProps>>(
  ({ children, icon: Icon, className, onClick }, ref) => (
    <CardShell className={className} onClick={onClick} ref={ref}>
      <svg
        stroke="white"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 50 70"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <pattern id="circles-bg" x="0" y="0" width="1" height="1" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="0.05" className="text-white" />
        </pattern>

        <rect x="0" y="-6" width="50" height="82" fill="url(#circles-bg)" />
      </svg>
      {Icon !== undefined && (
        <>
          <Icon className="w-[10%] h-auto m-[5%] absolute" />
          <Icon className="w-[10%] h-auto m-[5%] absolute bottom-0 right-0" />
        </>
      )}
      {children}
    </CardShell>
  )
);

export const CardBack = forwardRef<HTMLDivElement, PropsWithChildren<CardBackProps>>(
  ({ children, className, icon: Icon, title, onClick }, ref) => (
    <CardShell className={className} onClick={onClick} ref={ref}>
      <svg
        stroke="white"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 50 70"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <mask id="letter">
          <g strokeWidth="5" strokeLinecap="round">
            <path d="M 12 10 V 60" />
            <path d="M 12.1 35 L 37 10" />
            <path d="M 19 29 L 37 60" />
          </g>
        </mask>

        <pattern id="circles-0" x="0" y="0" width="1" height="1" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="0.25" className="text-teal-500" />
        </pattern>

        <pattern id="circles-1" x="0.2" y="0.1" width="1" height="1" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="0.25" className="text-yellow-300" />
        </pattern>

        <pattern id="circles-bg" x="0" y="0" width="1" height="1" patternUnits="userSpaceOnUse">
          <circle cx="0.5" cy="0.5" r="0.05" className="text-white" />
        </pattern>

        <rect x="0" y="-6" width="50" height="82" fill="url(#circles-bg)" />
        <rect x="0" y="-6" width="50" height="82" fill="url(#circles-0)" mask="url(#letter)" />
        <rect x="0" y="-6" width="50" height="82" fill="url(#circles-1)" mask="url(#letter)" />
      </svg>
      {Icon !== undefined && (
        <>
          <Icon className="w-[10%] h-auto m-[5%] absolute" />
          <Icon className="w-[10%] h-auto m-[5%] absolute bottom-0 right-0" />
        </>
      )}
      {title !== undefined && (
        <title className="text-xl font-semibold capitalize absolute bottom-6 flex w-full items-end justify-center p-3">
          {title}
        </title>
      )}
      {children}
    </CardShell>
  )
);
