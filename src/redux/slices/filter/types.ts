export type Sort = {
    id: number;
    title: string;
    sortProperty: SortPropertyEnum;
};

export enum SortPropertyEnum {
    TITLE = 'title',
    PRICE = 'price',
    RATING = 'rating',
}

export interface FilterSliceState {
    categoryId: number;
    pageCount: number;
    direction: boolean;
    searchValue: string;
    sort: Sort;
}
