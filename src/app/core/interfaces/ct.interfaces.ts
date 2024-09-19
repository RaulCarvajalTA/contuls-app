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