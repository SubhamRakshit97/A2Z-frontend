import React, { useState } from "react";
import { send } from "emailjs-com";
const Subscribe = () => {
  const [subscriber_email, setSubscriber_email] = useState("");
  const handleName = (e) => {
    setSubscriber_email(e.target.value);
  };
  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_3ms3oz6",
      "template_znzsasq",
      { subscriber_email },
      "bzbzNMd6ZGIZbaSXk"
    )
      .then((response) => {
        console.log("Subscribed Successfully", response.status, response.text);
      })
      .catch((err) => {
        console.log("failed", err);
      });
    setSubscriber_email("");
  };
  return (
    <div class="subscribe">
      <h1>
        Subscribe to our newsletter and
        <br />
        receive exclusive offers every week
      </h1>
      <form onSubmit={sendMail}>
        <div class="subscriptionfield">
          <input
            type="text"
            placeholder="Enter your email"
            value={subscriber_email}
            onChange={handleName}
          />
          <button type="submit" id="subbutton">
            SUBSCRIBE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
