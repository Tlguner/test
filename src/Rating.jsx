import React, { useState } from "react";

function Rating({ rating, setRating }) {
  const totalStars = 5; // Yıldız sayısını burada belirleyebilirsiniz

  const starRadios = Array.from({ length: totalStars }, (_, index) => (
    <label key={index} className="radio-label">
      <input
        className="radio-btn"
        type="radio"
        name="rating"
        value={index + 1}
        checked={rating === index + 1}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <span className="checkmark">{index + 1}</span>
    </label>
  ));

  return <div className="rating-container">{starRadios}</div>;
}

export default Rating;
