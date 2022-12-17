import React from 'react';

export default function StarRating({ correctAnswers, totalQuestions }) {
  const percentage = (correctAnswers / totalQuestions) * 100;
  const starRating = Math.ceil(percentage / 20);
  const halfOffset = Math.ceil(100 - percentage)
  const endOffset  = 100 - halfOffset
  
  return (
    <div className="flex items-center">
      {[...Array(5).keys()].map((_, index) => {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
            <defs>
              {percentage > (index / 5) * 100 ?
                starRating === index + 1 ?
                  <linearGradient id={`grad-${index}`}>
                    <stop offset={`${halfOffset}%`} stop-color="#FCD34D" />
                    <stop offset={`${endOffset}%`} stop-color="grey" />
                  </linearGradient>
                  :
                  starRating > index ?
                  <linearGradient id={`grad-${index}`}>
                    <stop offset="100%" stop-color="#FCD34D" />
                  </linearGradient>
                  :
                  <linearGradient id={`grad-${index}`}>
                    <stop offset="100%" stop-color="grey" />
                  </linearGradient>
                :
                <linearGradient id={`grad-${index}`}>
                  <stop offset="100%" stop-color="grey" />
                </linearGradient>
              }

            </defs>
            <path fill={`url(#grad-${index})`} d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
          </svg>
        )
      })}
    </div>
  );
}
