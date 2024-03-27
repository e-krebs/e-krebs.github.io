import { MdArrowForward, MdWork } from "react-icons/md";
import { Scroller } from "../Scroller";
import { CardContent, CardList, CardTitle } from "../PlayingCard";

const algolia = new URL("../img/algolia.svg", import.meta.url);
const expertime = new URL("../img/expertime.svg", import.meta.url);

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
                <b>2019 - ?:</b>{" "}
                <img src={algolia.href} alt="algolia" className="inline mb-1 w-4 h-4" /> algolia
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
                <b>2012 - 2019:</b>{" "}
                <img src={expertime.href} alt="expertime" className="inline mb-1 w-4 h-4" />{" "}
                expertime
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
      { icon: ({ className }) => <img src={algolia.href} className={className} /> },
      { icon: ({ className }) => <img src={expertime.href} className={className} /> },
      { type: "back", icon: MdArrowForward },
    ]}
  />
);
