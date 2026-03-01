import { FunctionComponent, Ref } from "react";

export type FC<P = {}, E = HTMLElement> = FunctionComponent<P & { ref?: Ref<E> }>;
