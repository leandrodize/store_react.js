import React from "react";
import "@styles/password_recovery.css";
const logo = "@assets/symbols/logo_yard_sale.svg";
const email = "@assets/symbols/email.svg";


const PasswordRecovery = () => {
  return (
    <section className="login">
        <section className="main-container">
            <img src={logo} alt="logo yard sale" className="logo"/>
            <h1 className="title">Email has been sent!</h1>
            <h2 className="subtitle">Please check your inbox for instructions on how to reset the password</h2>
            <img src={email} alt="simbol email" className="simbol-email"/>
            <input type="button" value="login" className="primary-button"/>
            <p className="text">Didn’t receive the email?<a href="###"> Resend</a></p>
        </section>
    </section>
  );
}

export default PasswordRecovery;












