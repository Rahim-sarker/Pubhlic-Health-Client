import React from "react";

const AboutCard = ({ developer }) => {
  return (
    <div>
      <div class="card card-side bg-base-100 shadow-xl pb-2">
        <figure>
          <img
            class=" text-neutral-content rounded-full lg:w-56 sm:w-48"
            src={developer.img}
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-secondary-focus font-bold">
            {developer.name}
          </h2>
          <p>
            <span className="font-bold">Email:</span> {developer.email}
            <br />
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-primary checkbox-xs"
            />
            {developer.degi}
            <br />
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-primary checkbox-xs"
            />
            {developer.diit}
            <br />
            <input
              type="checkbox"
              checked="checked"
              class="checkbox checkbox-primary checkbox-xs"
            />
            {developer.more}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
