import { ILayoutState } from "../core/interfaces/ct.interfaces";

export interface IContulsState {
    layout: ILayoutState
}

export interface RootApp {
    ContulsApp: IContulsState
}