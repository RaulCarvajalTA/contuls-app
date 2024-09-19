import { createAction, props } from "@ngrx/store";
import { ILayoutState } from "../core/interfaces/ct.interfaces";
import { TMenuStatusType } from "../core/types/ct.types";

export const setLayout = createAction('[Contuls] - Set Layout', props<{layout: ILayoutState}>());
export const setMenuStatus = createAction('[Contuls] - Set Menu Status', props<{status: TMenuStatusType}>());
export const setModule = createAction('[Contuls] - Set Actual Module', props<{title: string, subtitle: string | null | undefined}>());