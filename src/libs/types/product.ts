import { ObjectId } from 'mongoose';
import { 
    ProductStatus, 
    ProductCollection, 
    ProductSize 
} from '../enums/product.enum';

export interface Product {
    _id: ObjectId;
    productStatus: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;
    productImages:string[];
    productViews: number;
}


export interface ProductInput {
    productStatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?:string[];
    productViews?: number;
}

export interface ProductUpdateInput {
    _id: ObjectId;
    productStatus?: ProductStatus;
    productCollection?: ProductCollection;
    productName?: String;
    productPrice?: number;
    productLeftCount?: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImages?:string[];
    productViews?: number;
}
