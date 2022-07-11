import { INCREMENT_IF_ODD } from "./actionTypes";

export type IncrementIfOdd = {
    type: typeof INCREMENT_IF_ODD;
    payload: number;
};


export type CounterActions = IncrementIfOdd