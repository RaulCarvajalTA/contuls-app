import { createReducer, on } from "@ngrx/store";
import { MenuEnum } from "../core/enums/ct.enums";
import { IContulsState } from "./contuls.state";
import * as ContulsActions from './contuls.actions';

const initialState: IContulsState = {
    layout: {
        title: '',
        subtitle: '',
        menu_status: MenuEnum.opened
    },
    user: {
        name: "Raúl Carvajal",
        role: "Administrador",
        id_role: 1,
        email: "rcarvajal@tecnoap.com"
    }
}

export const reducer = createReducer(initialState,
    on(ContulsActions.setLayout, (state,action):IContulsState => ({...state, layout: action.layout})),
    on(ContulsActions.setMenuStatus, (state,action):IContulsState => ({...state, layout: {...state.layout, menu_status: action.status}})),
    on(ContulsActions.setModule, (state,action):IContulsState => ({...state, layout: {...state.layout, title: action.title, subtitle: action.subtitle}})),
    on(ContulsActions.setUser, (state,action):IContulsState => ({...state, user: action.user})),
);