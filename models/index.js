//Require Statements - The below variables imports the models Product, Category, Tag, and ProductTag from their respective files.
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Product belongs to Category - This sets up a one - to - many relationship where each product belongs to a category.It establishes a foreign key category_id in the Product model.
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
//Product belongs to many Tags: This sets up a many - to - many relationship where each product can have multiple tags.It uses a junction table ProductTag to manage this relationship, with foreign keys product_id in the ProductTag table.
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});
//Tag belongs to many Products - This defines the reverse relationship of the previous association.Each tag can be associated with multiple products through the ProductTag junction table, with a foreign key tag_id.
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
// Category has many Products - This sets up the inverse relationship of the Product belongs to Category association.It establishes that each category can have multiple products associated with it, with a foreign key category_id in the Product model.
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

//The below exports the models Product, Category, Tag, and ProductTag so that they can be accessed and used in other parts of the application.
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};