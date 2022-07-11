import { INCREMENT_IF_ODD } from "./actionTypes";
import { IncrementIfOdd } from "./types";

export const incrementIfOdd = (
    payload: number
  ): IncrementIfOdd => ({
    type: INCREMENT_IF_ODD,
    payload,
  });
  