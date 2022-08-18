exports.Category = {
  products: (parent, { filter }, context) => {
    const categoryId = parent.id;

    return context.db.products.filter(
      (product) =>
        product.categoryId === categoryId &&
        (filter ? product.onSale === filter.onSale : true)
    );
  },
};
