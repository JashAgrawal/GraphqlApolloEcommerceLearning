exports.Query = {
  test: (parent, { id }, context) => {
    return "ready";
  },
  products: (parent, { filter }, context) => {
    let filteredProducts = context.db.products;
    if (filter) {
      filteredProducts = filteredProducts.filter((product) =>
        filter?.onSale ? product.onSale === filter.onSale : true
      );
      if (filter?.avgRating) {
        filteredProducts = filteredProducts.filter((product) => {
          let noOfRatings = 0;
          let ratingSum = 0;
          context.db.reviews.forEach((review) => {
            if (review.productId == product.id) {
              noOfRatings++;
              ratingSum += review.rating;
            }
          });
          const avgProductRating = ratingSum / noOfRatings;
          console.log(avgProductRating);
          return avgProductRating >= filter?.avgRating;
        });
      }
    }

    return filteredProducts;
  },
  product: (parent, { id }, context) => {
    return context.db.products.find((product) => product.id === id);
  },
  categories: (parent, { id }, context) => {
    return context.db.categories;
  },
  category: (parent, { id }, context) => {
    return context.db.categories.find((product) => product.id === id);
  },
};
