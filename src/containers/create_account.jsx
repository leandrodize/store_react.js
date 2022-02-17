import React, {useRef} from "react";
import "@styles/create_account.css";

const CreateAccount = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="login">
        <form action="#" className="form-login" ref={form} >
            <h1 className="title">My account</h1>
            <label for="#" className="label">Name</label>
            <input type="text" className="input" placeholder="Name" name="name"/>
            <label for="#" className="label">Email address</label>
            <input type="email" className="input" placeholder="email@gmail.com" name="email"/>
            <label for="#" className="label">Password</label>
            <input type="password" className="input" placeholder="****************" name="password" />
            <input type="button" value="Create" className="primary-button" onClick={handleSubmit}/>
        </form>
    </div>
  );
};

export default CreateAccount;



