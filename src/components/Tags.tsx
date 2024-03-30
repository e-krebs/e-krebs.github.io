import { FC, PropsWithChildren } from "react";
import { Svg, type Image } from "./Svg";

interface TagItem {
  label?: string;
  image: Image;
}

const Tag: FC<TagItem> = ({ image, label }) => (
  <li
    className={"relative bg-yellow-500 pt-2 pb-3.5 hover:pb-5 h-fit flex hover:gap-x-1.5 group"}
    style={{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% calc(100% - 0.75rem), 0% 100%, 0% 0%)",
    }}
  >
    <Svg image={image} label={label} className="w-6 h-6 rotate-90 p-0.5 -mt-1" />
    <span
      title={label ?? image}
      className="max-h-0 group-hover:max-h-20 truncate opacity-0 group-hover:opacity-100 transition-[max-height,opacity]"
    >
      {label ?? image}
    </span>
  </li>
);

export const TagList: FC<{ tags: (TagItem | Image)[] }> = ({ tags }) => (
  <ul
    className="absolute bottom-0 left-0 px-6 space-x-3 flex flex-col rotate-180"
    style={{ writingMode: "vertical-lr" }}
  >
    {tags.map((tag) => {
      const image = typeof tag === "string" ? tag : tag.image;
      const label = typeof tag === "string" ? undefined : tag.label;
      return <Tag key={label} image={image} label={label} />;
    })}
  </ul>
);
