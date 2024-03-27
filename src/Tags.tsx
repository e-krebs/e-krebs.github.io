import { FC, PropsWithChildren } from "react";

interface TagItem {
  label: string;
  icon?: URL;
}

const Tag: FC<{ label: string; icon?: URL }> = ({ label, icon }) => (
  <li
    className={"relative bg-yellow-500 pt-2 pb-5 h-fit flex gap-x-1.5"}
    style={{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% calc(100% - 0.75rem), 0% 100%, 0% 0%)",
    }}
  >
    {icon && <img src={icon.href} alt={label} className="w-6 h-6 rotate-90 p-0.5 -mt-1" />}
    {label}
  </li>
);

export const TagList: FC<{ tags: TagItem[] }> = ({ tags }) => (
  <ul
    className="absolute bottom-0 left-0 px-6 space-x-3 flex flex-col rotate-180"
    style={{ writingMode: "vertical-lr" }}
  >
    {tags.map(({ label, icon }) => (
      <Tag icon={icon} label={label} />
    ))}
  </ul>
);
