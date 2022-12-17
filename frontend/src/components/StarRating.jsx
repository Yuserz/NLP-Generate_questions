import React from 'react';

export default function StarRating({ correctAnswers, totalQuestions }) {
  const percentage = (correctAnswers / totalQuestions) * 100;
  const starRating = Math.floor(percentage / 20);
  const halfStar = percentage % 20 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(starRating)].map((_, i) => (
        <i key={i} className="fas fa-star text-yellow-500" />
      ))}
      {halfStar && <i className="fas fa-star-half-alt text-yellow-500" />}
      {[...Array(5 - starRating - (halfStar ? 1 : 0))].map((_, i) => (
        <i key={i} className="far fa-star text-gray-400" />
      ))}
    </div>
  );
}
