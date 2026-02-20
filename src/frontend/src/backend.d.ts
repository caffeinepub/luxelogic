import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    name: string;
    description: string;
    imageRef: string;
    category: Category;
    price: bigint;
}
export enum Category {
    dupe = "dupe",
    vintage = "vintage",
    luxury = "luxury"
}
export interface backendInterface {
    addProduct(name: string, description: string, category: Category, price: bigint, imageRef: string): Promise<void>;
    getAllProducts(): Promise<Array<Product>>;
    getProduct(name: string): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
}
