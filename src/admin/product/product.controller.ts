
import express from 'express';
import { productCreate } from './product.repository';

export const createProductRouter = express.Router();

createProductRouter.post('/', async (req, response) => {
  try {
    const { title, image, price, category, description, features, rating, tools } = req.body;
    if (!title || !image || !price || !category || !description || !rating) {
      response.status(400).json({ message: 'Missing required fields: title, image, price, category, description, rating' });
    }

    if (isNaN(price) || isNaN(parseFloat(rating))) {
      response.status(400).json({ message: 'Price and rating must be numbers.' });
    }
    if (features && !Array.isArray(features)) {
      response.status(400).json({ message: 'Features must be an array.' });
    }
    if (tools && !Array.isArray(tools)) {
      response.status(400).json({ message: 'Tools must be an array.' });
    }
    const newProduct = await productCreate(title, image, price, category, description, rating, features, tools);

    response.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error: any) {
    console.error('Error creating product:', error);
    response.status(500).json({ message: 'Internal server error', error: error.message });
  }

});
