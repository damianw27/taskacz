import { Dispatch, SetStateAction } from "react";

export type Stateful<T> = [T, Dispatch<SetStateAction<T>>];
