import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Oval height={100} width={100} color="blue" ariaLabel="Loading" />
    </div>
  );
}
