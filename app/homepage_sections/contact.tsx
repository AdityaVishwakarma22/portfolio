import React from "react";
import style from "./contact.module.css";

const Contact = () => {
  function scheduleCallHandler() {
    const url = "https://calendly.com/interview-aditya";
    window.open(url, "_blank");
  }

  return (
    <div className={`section`}>
      <h1 className="heading">Contact me</h1>
      <div>
        <b>Call me at : </b>
        <span> +91 9306504386</span>
      </div>
      <div>
        <b>Schedule interview : </b>
        <span> An email will be shared upon scheduling the call</span>
        <button onClick={scheduleCallHandler} className={style.btn_schedule}>
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Contact;
