import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-5">
      <div className="footer p-10 ml-20">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Intensive care units</a>
          <a className="link link-hover">Laboratory Tests</a>
          <a className="link link-hover">Medicine Available</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Public Health Service</span>
          <a className="link link-hover">Hospitals</a>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
        <div>
          <span className="footer-title">Hospitals</span>
          <a className="link link-hover">Square Hospital</a>
          <a className="link link-hover">Labaid Hospitals</a>
          <a className="link link-hover">United Hospital Limited</a>
          <a className="link link-hover">Popular Diagnostic Centre Ltd</a>
        </div>
      </div>
      <div className="text-center pb-2 text-bold">
        <p>
          Copyright © 2022 - All right reserved by <b>Rahim Sarker</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
