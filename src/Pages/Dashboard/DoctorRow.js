import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctors }) => {
  const { name, specialty, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>

      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <label
          onClick={() => setDeletingDoctors(doctor)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
