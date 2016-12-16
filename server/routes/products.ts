import * as express from 'express';
import * as Product from '../model/product';
import * as ProductsModel from '../model/products';

export class Products {
    private productList: ProductsModel.Products;
    public static routes(): express.Router {
        let router: express.Router = express.Router();
        let productsRoute: Products = new Products();
        router.get('/products/', productsRoute.index.bind(productsRoute));
        router.post('/products/', productsRoute.create.bind(productsRoute));
        router.put('/products/:product_id', productsRoute.update.bind(productsRoute));
        router.delete('/products/:product_id', productsRoute.delete.bind(productsRoute));
        router.get('/products/:product', productsRoute.find.bind(productsRoute));
        router.post('/products/delete/:product_id', productsRoute.delete.bind(productsRoute));
        router.post('/products/update/:product_id', productsRoute.update.bind(productsRoute));
        return router;
    }

    constructor() {
        this.productList = new ProductsModel.Products([
            new Product.Product(1, 'ABC', 1),
            new Product.Product(2, 'DEF', 12),
            new Product.Product(3, 'GHI')
        ])
    }

    public index(request: express.Request, response: express.Response) {
        response.json(this.productList.list());
    }
    public create(request: express.Request, response: express.Response) {
        let productName: string = request.body.product_name;
        let productQuantity: number = parseInt(request.body.quantity) || 0;
        if (!productName) {
            response.status(500).send('Product name not found');
            return;
        }
        response.json(this.productList.add(productName, productQuantity));
    }
    public update(request: express.Request, response: express.Response)
    {
        let productId: number = parseInt(request.params.product_id);
        let product: Product.Product = this.productList.fetch(productId);
        let productName: string = request.body.product_name;
        let productQuantity: number = request.body.quantity;

        if (!product) {
            response.status(404).send('Product not found');
            return;
        }

        if(productName !== undefined)
        {
          product.setName(productName);
        }

        if(productQuantity !== undefined)
        {
          product.updateQuantity(productQuantity);
        }

        response.json(product);
    }
    public delete(request: express.Request, response: express.Response) {
        let productId: number = parseInt(request.params.product_id);
        let wasDeleted: Boolean = this.productList.delete(productId);

        if (!wasDeleted) {
            response.status(404).send('Product not found');
            return;
        }
        else
        {
          response.json({success: true});
        }

    }
    public find(request: express.Request, response: express.Response) {
        let productQuery: string = request.params.product;
        let product: Product.Product = this.productList.find(productQuery);

        if (!product) {
            response.status(404).send('Product not found');
            return;
        }
        response.json(product);

    }
}
