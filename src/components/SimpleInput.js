import React, { useState, useEffect } from "react";

const SimpleForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setenteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  let FormIsValid = false;

  useEffect(() => {
    if (enteredNameIsValid) {
      FormIsValid = true;
    }
    return () => {};
  }, [enteredNameIsValid]);

  const inputName = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlur = (event) => {
    setenteredNameTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setenteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName("");
    setenteredNameTouched(false);
  };
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-5 mb-5">
            <div className="card p-5 shadow">
              <form onSubmit={submitHandler}>
                <div
                  className={nameInputClasses}
                  style={{ padding: "60px 40px" }}
                >
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Enter Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={inputName}
                    value={enteredName}
                    onBlur={nameInputBlur}
                  />
                  {nameInputIsInvalid && (
                    <p className="text-danger">Name must not be empty</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-0 mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleForm;
