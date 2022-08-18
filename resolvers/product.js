exports.Product = {
  category: (parent, args, context) => {
    const categoryId = parent.categoryId;
    return context.db.categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, args, context) => {
    const id = parent.id;
    return context.db.reviews.filter((review) => review.productId === id);
  },
};
