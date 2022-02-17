import React from "react";
import "@styles/notFound.css";
import NavBar from "@components/nav_bar";
const car404 = "@assets/desktop/autocross-834902_960_720.jpg"

const NotFound = () => {
  return (
    <div>
      <NavBar />
      <h1 className="h1_404">Error 404</h1>
      <img className="car_404" src={car404} alt="" />
    </div>

  )
};

export default NotFound;
