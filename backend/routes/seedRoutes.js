import Express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import user from '../models/userModel.js';
const seedRouter = Express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  await user.remove({});
  const createUser = await user.insertMany(data.users);
  res.send({ createdProducts, createUser });
});
export default seedRouter;
