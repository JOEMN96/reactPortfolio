import React from "react";
import Button from "../components/Button";
import "../components/additionalCSS/error.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section>
      <div className="errorWrapper">
        <div className="errorPage" title="404">
          404
        </div>
      </div>
      <Link to="/">
        <Button text="Back To  Home" />;
      </Link>
    </section>
  );
}

export default ErrorPage;
