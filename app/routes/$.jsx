import React from "react";
import styles from "../styles/NF.css";
export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};
export default function NF() {
  return (
    <div className="flex justify-center">
      <div className="notfound ">
        <div className="notfound-404 ">
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
}
