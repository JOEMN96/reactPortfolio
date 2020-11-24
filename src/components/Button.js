import React from "react";
import "./additionalCSS/button.css";
function Button({ text }) {
  return (
    <div class="btn-contain">
      <div class="btn-skew-contain">
        <a href="http://mediamilitia.com" class="btn-skew">
          <span>{text}</span>
        </a>
      </div>
    </div>
  );
}

export default Button;
