import React from "react";
import { MailSVG } from "../svg/SVG";

export default function Contact() {
  return (
    <div className="contact-screen h-[400px] bg-white" id="contact-screen">
      <div className="contact-container mx-auto h-full w-[1024px] items-center py-[104px] ">
        <div className="call-to-action my-5">
          <h3 className="text-lg font-bold uppercase text-blue-500">
            {" "}
            Contact
          </h3>
          <h3 className="font-bold">Feel free to reach out</h3>
        </div>
        <a
          className="mailtoui flex"
          href="mailto:juanlamar.tech@gmail.com?subject=Inquiry"
        >
          <MailSVG />
          Send Inquiry
        </a>
      </div>
    </div>
  );
}
