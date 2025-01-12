export interface IListItem {
    id: number;
    title: string;
    url: string;
}
export interface IProductList {
    id: number,
    img: string,
    title: string,
    description: string,
    price: number,
    discount: number | null,
    isNew: boolean,
    url: string
}