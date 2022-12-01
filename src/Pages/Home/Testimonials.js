import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/rahim.png";

import Review from "./Review";
const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Rahim Sarker",
      review:
        "Service was overall fine, I did PTCA and availed Nephron treatment in United Hospital before through this website, all my family members patronize with overall service",
      img: people1,
      location: "Dhaka",
    },
    {
      _id: 2,
      name: "Tofayel Ahmed",
      review:
        "Good initiative to connect any doctors you desire they make the system to happen. Thank you for your services.Service is fine, we are very happy with your hospital and the related work, thanks so much thank you.",
      img: people1,
      location: "Dhaka",
    },
    {
      _id: 3,
      name: "Rahim Sarker",
      review:
        "Service was overall fine, I did PTCA and availed Nephron treatment in United Hospital before through this website, all my family members patronize with overall service",
      img: people1,
      location: "Dhaka",
    },
  ];
  return (
    <section className="my-28 max-w-7xl mx-auto px-12">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our Patients say</h2>
        </div>
        <div>
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
