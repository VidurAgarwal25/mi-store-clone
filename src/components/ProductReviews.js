import React from "react";
import "../styles/ProductReviews.css";
import ProductReviewCard from "./ProductReviewCard.js";
const ProductReviews = ({ productreviews }) => {
  return (
    <div className="ProductReviews">
      {console.log(" check " + productreviews.length)}
      {productreviews.map((item, index) => (
        <ProductReviewCard
          price={item.price}
          name={item.name}
          image={item.image}
          review={item.review}
          index={item.index}
          key={item.image}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
