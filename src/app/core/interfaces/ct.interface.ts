export interface MenuItem{
    title: string;
    subtitle?: string;
    icon: string;
    link: string;
    children?: MenuItem[];
    disabled: boolean;
}