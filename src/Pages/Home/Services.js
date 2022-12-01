import React from "react";
import icu from "../../assets/images/icu.jpg";
import lab from "../../assets/images/lab.jpg";
import pharmacy from "../../assets/images/pharmacy.jpg";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Intensive care units (ICU)",
      img: icu,
      description:
        "Specialist hospital wards that provide treatment and monitoring for people who are very ill",
    },
    {
      _id: 2,
      name: "Laboratory Tests",
      img: lab,
      description:
        "Testing a sample of blood, urine, or other substance from the body",
    },
    {
      _id: 3,
      name: "Medicine Available",
      img: pharmacy,
      description:
        "Hospital dispensary where medicinal drugs are sold.preparing, preserving, compounding, and dispensing medical drugs",
    },
  ];
  return (
    <div className="my-28 max-w-7xl mx-auto px-12">
      <div className="text-center">
        <h3 className="text-primary  text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
