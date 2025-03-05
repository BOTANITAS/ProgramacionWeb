class ProductController{
    static async getAll(req, res){
        try{
            const products = await ProductService.getAll();
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json({message:error.message || "ocurrio un errror, intenta de nuevo mas tarde"});
        }
        
    }

    static async getOneBY(res, res){
        try {
            
        } catch (error) {
            
        }

    }

    static async create(req, res){

    }

    static async update(req,res){

    }

    static async delete (req, res){

    }
}

module.exports = {ProductController}