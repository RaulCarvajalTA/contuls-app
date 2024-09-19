import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IContulsState } from "./contuls.state";

const selectContuls = createFeatureSelector<IContulsState>('ContulsApp');

export const selectLayout = createSelector(selectContuls, state => state.layout);
export const selectMenuType = createSelector(selectContuls, state => state.layout.menu_status);