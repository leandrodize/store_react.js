import React from "react";
import "../styles/global.css";
import Layout from "../containers/layout";
import CreateAccount from "../containers/create_account";

const App = () => {
    return (
        <Layout>
            <CreateAccount />
        </Layout>
    );
}

export default App;


