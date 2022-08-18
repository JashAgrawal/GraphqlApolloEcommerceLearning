const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (parent, { input }, context) => {
    const newCategory = {
      id: uuid(),
      name: input.name,
    };
    context.db.categories.push(newCategory);
    return newCategory;
  },
  addProduct: (parent, { input }, context) => {
    const newProduct = {
      id: uuid(),
      name: input.name,
      description: input.description,
      quantity: input.quantity,
      price: input.price,
      image: input.image,
      onSale: input.onSale,
      categoryId: input.categoryId,
    };
    context.db.products.push(newProduct);
    return newProduct;
  },
  addReview: (parent, { input }, context) => {
    const newReview = {
      id: uuid(),
      date: new Date().toString(),
      title: input.title,
      comment: input.comment,
      rating: input.rating,
      productId: input.productId,
    };
    context.db.reviews.push(newReview);
    return newReview;
  },
  deleteCategory: (parent, { id }, { db }) => {
    db.categories = db.categories.filter((category) => category.id !== id);
    db.products = db.products.map((product) => {
      if (product.categoryId === id) return { ...product, categoryId: null };
      else return product;
    });
    return true;
  },
  updateProduct: (parent, { input }, { db }) => {
    const productIndex = db.products.findIndex(
      (product) => product.id === input.id
    );
    db.products[productIndex] = { ...db.products[productIndex], ...input };
    console.log(db.products[productIndex]);
    return db.products[productIndex];
  },
};
