import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Login/Loading";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctors] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>Manage Doctors {doctors.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._key}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeletingDoctors={setDeletingDoctors}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <DeleteConfirmationModal
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctors={setDeletingDoctors}
        ></DeleteConfirmationModal>
      )}
    </div>
  );
};

export default ManageDoctors;
