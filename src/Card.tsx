import { FC, PropsWithChildren, ReactNode } from "react";

export const Card: FC<PropsWithChildren<{ title: ReactNode }>> = ({ title, children }) => (
  <section className="max-w-[35rem]">
    <div className="rounded-t-lg px-3 py-4 border-gray-600 border border-b-none bg-cyan-500 text-xl">
      {title}
    </div>
    <div className="rounded-b-lg px-3 py-4 border-gray-600 border bg-gray-800 ">{children}</div>
  </section>
);
