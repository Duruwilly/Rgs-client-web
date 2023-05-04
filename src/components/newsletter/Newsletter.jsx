import React, { useState } from "react";

const Newsletter = () => {
  const [val, setVal] = useState("");

  return (
    <div className="newsletter">
      <div className="">
        <p className="footer-widget__about-text">
          To be updated with all the latest news about contructions, offers and
          special announcements.
        </p>
        <form action="">
          <input
            type="text"
            required
            placeholder="Email Address"
            id="email"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <button type="submit" className="thm-btn" data-text="Subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
