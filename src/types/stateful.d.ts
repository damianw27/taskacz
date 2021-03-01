import { Dispatch, SetStateAction } from "react";

declare type Stateful<T> = [T, Dispatch<SetStateAction<T>>];
