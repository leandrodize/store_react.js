import React from "react";
import CreateAccount from "@containers/create_account";
import NavBar from "@components/nav_bar";


const Login = () => {
    return (
        <div>
            <NavBar/>
            <CreateAccount />
        </div>
    );
}

export default Login;
