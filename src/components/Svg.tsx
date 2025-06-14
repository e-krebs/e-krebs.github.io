import { FC } from "react";

const imagesDefinitions = {
  algolia: new URL("../img/algolia.svg", import.meta.url),
  android: new URL("../img/android.svg", import.meta.url),
  angular: new URL("../img/angular.svg", import.meta.url),
  Azure: new URL("../img/azure.svg", import.meta.url),
  bluesky: new URL("../img/bluesky.svg", import.meta.url),
  bootstrap: new URL("../img/bootstrap.svg", import.meta.url),
  chrome: new URL("../img/chrome.svg", import.meta.url),
  ["C#"]: new URL("../img/csharp.svg", import.meta.url),
  [".NET"]: new URL("../img/dotnet.svg", import.meta.url),
  expertime: new URL("../img/expertime.svg", import.meta.url),
  github: new URL("../img/github.svg", import.meta.url),
  iOS: new URL("../img/ios.svg", import.meta.url),
  java: new URL("../img/java.svg", import.meta.url),
  JavaScript: new URL("../img/javascript.svg", import.meta.url),
  jest: new URL("../img/jest.svg", import.meta.url),
  linkedin: new URL("../img/linkedin.svg", import.meta.url),
  ["material design"]: new URL("../img/material-design.svg", import.meta.url),
  microsoft: new URL("../img/microsoft.svg", import.meta.url),
  ["ms-SQL"]: new URL("../img/ms-sql.svg", import.meta.url),
  node: new URL("../img/node.svg", import.meta.url),
  person: new URL("../img/person.svg", import.meta.url),
  polymer: new URL("../img/polymer.svg", import.meta.url),
  Rails: new URL("../img/rubyonrails.svg", import.meta.url),
  React: new URL("../img/react.svg", import.meta.url),
  SQLite: new URL("../img/sqlite.svg", import.meta.url),
  swift: new URL("../img/swift.svg", import.meta.url),
  tailwindcss: new URL("../img/tailwindcss.svg", import.meta.url),
  ["..."]: new URL("../img/3dots.svg", import.meta.url),
  Typescript: new URL("../img/typescript.svg", import.meta.url),
  vb: new URL("../img/vb.svg", import.meta.url),
  ["web components"]: new URL("../img/web-components.svg", import.meta.url),
} as const;

export type Image = keyof typeof imagesDefinitions;

export const Svg: FC<{
  image: Image;
  label?: string;
  className?: string;
  width?: number;
  height?: number;
}> = ({ image, label, className, width, height }) => (
  <img
    src={imagesDefinitions[image].pathname}
    alt={label ?? image}
    className={className}
    height={height ?? "100%"}
    width={width ?? "auto"}
  />
);
