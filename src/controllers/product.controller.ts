import ProductService from "../models/Product.service"
import { Request,Response } from "express";
import Errors from "../libs/Errors";
import { T } from "../libs/types/common";
import { AdminRequest } from "../libs/types/member";

const ProductServiceService = new ProductService();

const productController: T = {};
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render('products');
    } catch (err) {
        console.log("Error, getAllProducts:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
 
       //  res.json({  });
    }
 };


 productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProduct");

    } catch (err) {
        console.log("Error, createNewProduct:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
 
       //  res.json({  });
    }
 };


 productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct");

    } catch (err) {
        console.log("Error, updateChosenProduct:", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
 
       //  res.json({  });
    }
 };

export default productController;

