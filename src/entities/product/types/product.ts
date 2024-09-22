export enum ProductCategory {
    HEADPHONES = 'наушники',
    WIRELESS_HEADPHONES = 'Беспроводные наушники'
}

export interface Product {
    id: string,
    category: ProductCategory,
    title: string,
    rating: number,
    price: number,
    img: string,
    fullPrice?: number
}
