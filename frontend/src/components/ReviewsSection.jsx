import React, { useEffect } from "react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const ReviewsSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white w-screen h-auto py-16 px-8">
      <h2 className="text-4xl font-montserrat font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="text-center text-gray-600">
        <div className="commonninja_component pid-0351f99a-bdcf-44e7-a4e4-de5071f899db"></div>
      </div>
    </div>
  );
};

export default ReviewsSection;
