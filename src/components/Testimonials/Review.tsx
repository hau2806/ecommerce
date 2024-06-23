import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const allReviews = useSelector((state: RootState) => state.loopStore.reviews);

  const [visibleReviews, setVisibleReviews] = useState(3);

  const loadMoreReviews = () => {
    setVisibleReviews(prevVisibleReviews => prevVisibleReviews + 3);
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-[#FEB941]" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-200" />);
      }
    }
    return stars;
  };

  return (
    <div>
      {allReviews.slice(0, visibleReviews).map((review, index) => (
        <div key={index} className="px-5 w-[90%] my-8 mx-auto">
          <div className="flex items-center mb-4">
            <img
              className="w-10 h-10 me-4 rounded-full"
              src={review.avatar}
              alt=""
            />
            <div className="font-medium dark:text-white">
              <p>
                {review.name}
                <time
                  dateTime="2014-08-16 19:00"
                  className="block text-sm text-gray-500 dark:text-gray-400"
                >
                  {review.time}
                </time>
              </p>
            </div>
          </div>
          <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
            {renderStars(review.rating)}

            <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
              Thinking to buy another one!
            </h3>
          </div>
          <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">

          </footer>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            {review.comment}
          </p>
          <aside>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              19 people found this helpful
            </p>
            <div className="flex items-center mt-3">
              <a
                href="#"
                className="px-2 py-1.5 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Helpful
              </a>
              <a
                href="#"
                className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
              >
                Report abuse
              </a>
            </div>
          </aside>
        </div>
      ))}
            {allReviews.length > visibleReviews && (
        <button
          onClick={loadMoreReviews}
          className="block mt-4 px-4 mx-auto mb-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Review;
