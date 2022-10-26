import Express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
const seedRouter = Express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
export default seedRouter;
