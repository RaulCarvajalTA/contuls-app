import { ILayoutState, IUser } from "../core/interfaces/ct.interfaces";

export interface IContulsState {
    layout: ILayoutState,
    user: IUser
}

export interface RootApp {
    ContulsApp: IContulsState
}