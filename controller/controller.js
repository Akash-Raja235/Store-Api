
const Products = require("../models/schema");

const getAllProductsStatic = async (req, res)=>{

  // const product = await Products.find({}).sort('name price');
  const product = await Products.find({}).select('name price').limit(10).skip(2);

    // throw new Error('tesing error')

    res.status(200).json({ product });
}
const getAllProducts = async (req, res) => {

  // const product = await Products.find(req.body);
  const {featured, company,name,sort,fields}= req.query
  const queryObject ={}
  if(featured){
    queryObject.featured = featured === 'true'?true:false
  }
  if(company){
   queryObject.company = company
  }
  if(name){
 queryObject.name = name;
  }
  let result= Products.find(queryObject);
  if(sort){
    const sortList= sort.split(',').join(' ')
    result = result.sort(sortList);
  }else{
    result = result.sort('createdAt');
  }

  if(fields){
    const fieldsList= fields.split(',').join(' ')
    result = result.select(fieldsList);
  }
const page =Number(req.query.page) || 1
const limit = Number(req.query.limit) ||10
const skip = (page -1) * limit
result=result.skip(skip).limit(limit)

  const product=await result
  res.status(200).json({ product, nbHints:product.length });
};


module.exports={
    getAllProductsStatic,
    getAllProducts
}