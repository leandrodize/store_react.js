import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "@styles/global.css";
import Layout from "@containers/layout";
import Login from "@pages/login";
import passwordRecovery from "@pages/passwordRecovery";
import Products from "@pages/products";
import notFound from "@pages/notFound";
import appContext from "@context/appContext";
import useInitialState from "@hooks/useInitialState";


const App = () => {
    const InitialState = useInitialState();
    return (
        <appContext.Provider value={InitialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/recovery" component={passwordRecovery} />
                        <Route exact path="/products" component={Products} />
                        <Route component={notFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </appContext.Provider>
    );
}


export default App;





