import React from "react";
import Footer from "../Shared/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-12 my-10">
        <h1 className="text-2xl font-bold text-purple-500 text-center m-5">
          Contact Information of All Hospital
        </h1>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Hospital</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover">
                <th>1</th>
                <td>Square Hospital</td>
                <td>
                  <span className="font-bold">Panthapath: </span>
                  18/F, Bir Uttam
                  <br />
                  Qazi Nuruzzaman Sarak,
                  <br />
                  West Panthapath,Dhaka 1205
                  <br />
                </td>
                <td>
                  029966-32321
                  <br /> 029966-36247
                </td>
                <td>info@squarehospital.com</td>
              </tr>

              <tr class="hover">
                <th>2</th>
                <td>Labaid Hospitals</td>
                <td>
                  House#06,Road#04,Dhanmondi
                  <br />
                  Dhaka 1205, Bangladesh.
                </td>
                <td>
                  +88 02 58610793-8 <br /> +88 0241060908-18
                </td>
                <td>info@labaidgroup.com</td>
              </tr>

              <tr class="hover">
                <th>3</th>
                <td>UNITED HOSPITAL</td>
                <td>
                  plot 15, Road 71, Gulshan
                  <br /> Dhaka 1212, Bangladesh
                </td>
                <td>
                  {" "}
                  +880 1914 001210 <br /> +880 1914 001234
                </td>
                <td>info@uhlbd.com</td>
              </tr>

              <tr class="hover">
                <th>4</th>
                <td>Ibn Sina Specialized Hospital</td>
                <td>
                  House 48, Road 9/A,
                  <br /> Dhanmondi, Dhaka-1209
                </td>
                <td>
                  {" "}
                  +88 02 48115270-2,
                  <br /> +88 02 48114040-1
                </td>
                <td>imiczist@gmail.com</td>
              </tr>

              <tr class="hover">
                <th>5</th>
                <td>Popular Diagnostic Centre Ltd</td>
                <td>
                  House #16, Road # 2,
                  <br /> Dhanmondi R/A, Dhaka-1205,
                  <br /> Banglades
                </td>
                <td>
                  {" "}
                  09613 787801,
                  <br /> 09666 787801
                </td>
                <td>info@populardiagnostic.com</td>
              </tr>

              <tr class="hover">
                <th>6</th>
                <td> Asgar Ali Hospital</td>
                <td>
                  111/1/A Distillery Road, Gandaria <br />
                  (Beside Dhupkhola Playground),
                  <br /> Dhaka-1204 Bangladesh
                </td>
                <td>
                  +88 02 47443135-47,
                  <br />
                  +88 0178 768 3333
                </td>
                <td>info@asgaralihospital.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ContactUs;
