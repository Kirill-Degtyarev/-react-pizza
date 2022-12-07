export type Pizza = {
    id: string;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
};

export type SearchPizzaParams = {
    category: string;
    directions: string;
    search: string;
    pageCount: string;
    sortBy: string;
};

export interface PizzasSliceState {
    items: Pizza[];
    status: Status;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}
