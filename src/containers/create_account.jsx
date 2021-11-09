import React from "react";
import "../styles/create_account.css";

const CreateAccount = () => {
  return (
    <div className="login">
        <form action="#" className="form-login">
            <h1 className="title">My account</h1>
            <label for="#" className="label">Name</label>
            <input type="text" className="input" placeholder="Leandro Diaz"/>
            <label for="#" className="label">Email address</label>
            <input type="email" className="input" placeholder="leandrodiazz@protonmail.com"/>
            <label for="#" className="label">Password</label>
            <input type="password" className="input" placeholder="************************"/>
            <input type="button" value="Create" className="primary-button"/>
        </form>
    </div>
  );
};

export default CreateAccount;



