import cx from "clsx";
import { FC, ReactNode, useCallback, useRef, useState } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { CardBack, CardFront } from "./PlayingCard";

const SnapButton: FC<{
  position: "left" | "right";
  scroll: () => void;
  ariaLabel: string;
}> = ({ position, scroll, ariaLabel }) => (
  <>
    <div
      className={cx(
        `z-10 absolute top-0 bottom-0 w-20 flex items-center px-3 from-white blur-sm`,
        position === "left" && "left-0 bg-gradient-to-r",
        position === "right" && "right-0 bg-gradient-to-l"
      )}
    ></div>
    <button
      aria-label={ariaLabel}
      className={cx(
        `z-20 p-3 rounded-lg absolute top-[calc(50%-0.5rem-0.75rem/2)] md:top-[calc(50%-1rem-0.75rem/2)]
          bg-teal-500 hover:bg-yellow-500 transition-colors
          text-4xl text-white blur-none drop-shadow-xl`,
        position === "left" && "left-3 hover:-translate-x-1",
        position === "right" && "right-3 hover:translate-x-1"
      )}
      onClick={scroll}
    >
      {position === "left" && <MdArrowBack className="w-4 h-4 md:w-8 md:h-8" />}
      {position === "right" && <MdArrowForward className="w-4 h-4 md:w-8 md:h-8" />}
    </button>
  </>
);

const Spacer = () => (
  <div className="h-full w-[calc(50vw-10rem-1.5rem)] md:w-[calc(50vw-12rem-1.5rem)] shrink-0" />
);

interface CardData {
  content?: ReactNode;
  type?: "front" | "back";
  icon?: FC<{ className?: string }>;
}

export const Scroller: FC<{ cards: CardData[] }> = ({ cards }) => {
  const scrollerRef = useRef<HTMLDivElement | undefined>();
  const [snapWidth, setSnapWidth] = useState(0);
  const cardRef = useCallback((node: HTMLDivElement | null) => {
    setSnapWidth(node?.offsetWidth ?? 0);
  }, []);

  return (
    <>
      <SnapButton
        ariaLabel="Previous"
        position="left"
        scroll={() =>
          scrollerRef.current.scrollTo({
            left: scrollerRef.current.scrollLeft - snapWidth,
            behavior: "smooth",
          })
        }
      />
      <SnapButton
        ariaLabel="Next"
        position="right"
        scroll={() =>
          scrollerRef.current.scrollTo({
            left: scrollerRef.current.scrollLeft + snapWidth,
            behavior: "smooth",
          })
        }
      />

      <div
        ref={scrollerRef}
        className="relative h-full w-full flex gap-6 snap-x *:snap-center *:my-auto overflow-x-scroll overflow-y-auto"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Spacer />

        {cards.map(({ type = "front", icon, content = null }, index) => {
          const Card = type === "back" ? CardBack : CardFront;
          return (
            <Card
              ref={index === 0 ? cardRef : null}
              key={index}
              icon={icon}
              className={cx(
                "w-80 md:w-96",
                index === 0 && index !== cards.length - 1 && "hover:-rotate-1",
                index === cards.length - 1 && "hover:rotate-1"
              )}
            >
              {content}
            </Card>
          );
        })}

        <Spacer />
      </div>
    </>
  );
};
