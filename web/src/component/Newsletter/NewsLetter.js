import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div>
      <div className="sub">
        <h1>Subscribe to Newsletter</h1>
        <p>We have a wide exprince in exprince design and strategy,</p>
        <div className="mail">
          <form action>
            <input type="text" placeholder="Enter your email address" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
