import { ILayoutState, IToolbarAction, IUser } from "../core/interfaces/ct.interfaces";

export interface IContulsState {
    layout: ILayoutState,
    user: IUser,
    toobarActions: IToolbarAction[]
}

export interface RootApp {
    ContulsApp: IContulsState
}