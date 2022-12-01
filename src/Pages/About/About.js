import React from "react";
import Footer from "../Shared/Footer";
import AboutCard from "./AboutCard";

const About = () => {
  const developers = [
    {
      id: 1,
      img: "https://i.ibb.co/H4j03Rn/sarker-Rahim.png",
      name: "MD. Rahim Sarker",
      email: "mhrahim08@gmail.com",
      degi: "B.sc in CSE(Computer Science & Engineering)",
      more: "17th-CSE-A-170048",
      diit: "Daffodil Institute of IT",
    },
  ];

  return (
    <div>
      <div className="mx-10 my-10">
        <div>
          <div class="flex flex-col w-full">
            <div class="grid  card bg-error-300 rounded-box place-items-center ">
              <h1 className="text-2xl font-bold text-center my-5 text-red-500">
                How to use this Application
              </h1>

              <div>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  Sign Up
                </h1>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  Log in / use google signin
                </h1>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  Select your desired Hospital among six hospital
                </h1>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  See the list of Doctors
                </h1>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  Check your email for confirmation of bokking appointment
                </h1>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  Go to your Dashbord
                </h1>
                <h1 className="font-bold">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  See your Appointment
                </h1>
                <h1 className="font-bold pb-3">
                  <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-xs"
                  />{" "}
                  Pay your consultation fees
                </h1>
              </div>
            </div>
            <div class="divider"></div>
            <div class="grid card bg-base-300 rounded-box place-items-center">
              <h1 className="py-10 mx-5 font-bold">
                Health service technology is developing very fast over recent
                years. Now a days many health service institutions are
                increasingly investing computerize systems to improve the
                accessibility and quality of patient care. So, our system will
                be one of the best choices for hospitals, clinics and
                diagnostics centers and make a great market value to them.
              </h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center my-5 text-error">
            Developed by
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-10 max-w-7xl mx-auto px-12	">
            {developers.map((developer) => (
              <AboutCard developer={developer}></AboutCard>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
