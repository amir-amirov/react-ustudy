import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

export type AppState = {
  isSorted: boolean;
  region: string;
};

// Contracts
export type BaseContract<T> = CaseReducer<AppState, PayloadAction<T>>;
