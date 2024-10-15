export interface IColumn{
    propierty: string;
    header: string;
    display: boolean;
    width: TColumnWidth,
}

export interface ITableConfig<T>{
    columns : IColumn[],
    data: T[],
    items_per_page_options?: number[]
}

export type TColumnWidth = 'col-1' | 'col-2' | 'col-3' | 'col-4' | 'col-5' | 'col-6' | 'col-7' | 'col-8' | 'col-9' | 'col-10' | 'col-11' | 'col-12';