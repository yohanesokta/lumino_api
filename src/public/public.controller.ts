import express from 'express';
import { getAllProducts, getProductById } from '../admin/product/product.repository';
export const Router = express.Router();

Router.get('/product', async (req, response) => {
  try {
    const products = await getAllProducts;
    response.status(200).json(products);
  } catch (error: any) {
    console.error('Error fetching products:', error);
    response.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

Router.get('/product/:id', async (req, response) => {
  const id = req.params.id;
  try {
    const product = await getProductById(id);
    response.status(200).json(product);
  } catch (error: any) {
    console.error('Error fetching product:', error);
    response.status(500).json({ message: 'Internal server error', error: error.message });
  }
});