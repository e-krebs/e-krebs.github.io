import { FC } from "react";
import { Svg, type Image } from "./Svg";

export const CardLinkIcon: FC<{ href: string; image: Image }> = ({ href, image }) => (
  <a href={href} title={image} target="_blank">
    <Svg image={image} className="w-9 h-9" />
  </a>
);
