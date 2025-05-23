import ProductService from "../models/Product.service";
import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { ProductCollection } from "src/libs/enums/product.enum";

const productService = new ProductService();

const productController: T = {};
/** SPA **/

productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");
    // const query = req.query;
    // console.log("query", query);
    // const params = req.params;
    // console.log("params", params);

    const { page, limit, order, productCollection, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productCollection) {
      inquiry.productCollection = productCollection as ProductCollection;
    }
    if (search) inquiry.search = String(search);

    const result = await productService.getProducts(inquiry);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");
    const {id} = req.params;
    const memberId = req.member?._id ?? null,
        result = await productService.getProduct(memberId, id)
        
        console.log("member", req.member)
        console.log("memberid", memberId)
        console.log("i am here ");
    res.status(HttpCode.OK).json(result);    
  } catch (err) {
    console.log("Error, getProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
/** SSR **/

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    console.log("products:", data);
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct");
    // console.log(req.files);
    console.log(req.body);
    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files.map((ele) => {
      return ele.path.replace(/\\/g, "/");
    });

    await productService.createNewProduct(data);

    res.send(
      `<script> alert("Sucessful Creation"); window.location.replace('/admin/product/all')</script>`
    );
  } catch (err) {
    console.log("Error, createNewProduct:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/product/all')</script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    const id = req.params.id;
    // console.log("id:", req.params);
    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);

    //  res.json({  });
  }
};

export default productController;
