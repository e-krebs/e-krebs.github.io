import { FC } from "react";

export const CardLinkIcon: FC<{ href: string; title: string; imageUrl: URL }> = ({
  href,
  title,
  imageUrl,
}) => (
  <a href={href} title={title} target="_blank">
    <img src={imageUrl.href} alt={title} className="w-9 h-9" />
  </a>
);
