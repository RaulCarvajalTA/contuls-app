import { TCtMenu, TMenuStatusType } from "../types/ct.types";


export interface IMenuItem {
    title: string;
    subtitle?: string;
    icon: string;
    link: string;
    children?: IMenuItem[];
    disabled: boolean;
}

export interface ILayoutState {
    title: string,
    subtitle: string | undefined | null,
    menu_status: TMenuStatusType
}

export interface IUser {
    name: string,
    role: string,
    id_role: number,
    email: string
}

export interface IToolbarAction {
    name: string,
    action: string,
    icon: string,
    tooltip: string,
    enable: boolean
}