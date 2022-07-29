import { Fragment, useReducer, useState } from "react";

const NewFile = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passHandler = (event) => {
    setEnteredPass(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newEntry = { email: enteredEmail, password: enteredPass };
    if (newEntry.email.includes("@") && newEntry.password.trim().length > 6) {
      setAllEntry([...allEntry, newEntry]);
    } else {
      alert("Enter Valid Email and Password");
    }
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <input type="text" name="eamil" id="email" onChange={emailHandler} />
        <br />
        <input type="password" name="pass" id="pass" onChange={passHandler} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {allEntry.map((data) => {
          return (
            <p key={Math.random()}>
              email: {data.email}&nbsp; pass: {data.password}
            </p>
          );
        })}
      </div>
    </Fragment>
  );
};

export default NewFile;
