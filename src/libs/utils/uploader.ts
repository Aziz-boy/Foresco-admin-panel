import path from "path";
import multer from "multer";
import { v4 } from "uuid";
import fs from "fs";

function getTargetImageStorage(address: string) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            const folderPath = path.join("uploads", address);

            // ✅ Ensure the folder exists
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath, { recursive: true });
            }

            cb(null, folderPath);
        },
        filename: function (req, file, cb) {
            const extension = path.extname(file.originalname);
            const random_name = v4() + extension;
            cb(null, random_name);
        },
    });
}

const makeUploader = (address: string) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage });
};

export default makeUploader;

/*
const product_storage = multer.diskStorage({
    destination: function(req, file , cb){
        cb(null, "./uploads/products");
    },
    filename: function(req, file, cb){
        console.log(file);
        const extension =path.parse(file.originalname).ext;
        const random_name = v4() + extension; 
        cb(null, random_name);
    },
});
export const uploadProductImage = multer({storage: product_storage});
*/