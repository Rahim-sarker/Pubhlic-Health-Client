import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Loading from "../Login/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from "react-query";

const AvailableAppointments = ({ date }) => {
  //   const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/available?date=${formateDate}`)
  //       .then((res) => res.json())
  //       .then((data) => setServices(data));
  //   }, [formateDate]);

  return (
    <div className=" max-w-7xl mx-auto px-12">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
