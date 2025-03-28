import React, { useContext, useEffect, useState } from "react";
import HomePage from "./HomePage";
import { ToastContainer, toast } from "react-toastify";
// import  AuthContext  from "../hooks/AuthContext";

const Login = () => {
  // const {login} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setloggedInUser] = useState("");
  const [IsloggedUser, setIsloggedInUser] = useState("");

  // function savedata_byOnclick(){
  //     const playload = {email:email, password:password}

  //     console.log(playload)
  //     setEmail('')
  //     setPassword('')
  // }
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setloggedInUser(loggedInUser);
  }, []);
  console.log(loggedUser);


  function savedata_byFunction(event) {
    event.preventDefault();
    const playload = { email: email, password: password };
    console.log(playload);

    if (email == loggedUser.email && password == loggedUser.password) {
      toast.success("You have Logged in successfully...😊");
      setIsloggedInUser(true);
    } else {
      toast.error("Invalid Credential...😒");
    }
    // setEmail('')
    // setPassword('')

    // console.log(event)
  }
  return (
    <>
      <div className="container-fluid">
        <h1>Fruits Shop</h1>

        <div className="row">
          <div className="col" style={{ width: "100%" }}>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTxho4ctAuGF119v5lR4Qe1Xfj7l13gg7Cw&s"
              }
              className="card-img-top "
              alt="..."
              style={{ width: "50rem", height: "20rem" }}
            />
          </div>
          <div className="form-control m-2 col" style={{ width: "100%" }}>
            <div className="form">
              <form onSubmit={savedata_byFunction}>
                <div className="mb-3">
                  <legend
                    htmlFor="exampleInputEmail1"
                    className="htmlForm-label"
                  >
                    Email address
                  </legend>
                  <input
                    type="email"
                    className="htmlForm-control"
                    id="exampleInputEmail1"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="mb-3">
                  <legend
                    htmlFor="exampleInputPassword1"
                    className="htmlForm-label"
                  >
                    Password
                  </legend>
                  <input
                    type="password"
                    className="htmlForm-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    style={{ width: "100%" }}
                  />
                </div>

                {/* <button  className="btn btn-primary mb-2" onClick={savedata_byOnclick}>
        onClick Submit
      </button> */}
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <div className="m-1">
                  {/* <Link to="">If Not Registered</Link> */}
                  <a href="#">If Not Registered</a>
                </div>
              </form>
            </div>

            <div className="display">
              {IsloggedUser ? (
                <p>You have Logged in successfully...😊</p>
              ) : (
                <p>Invalid Credential...😒</p>
              )}
              {/* {IsloggedUser && <HomePa
              
              ge />} */}

              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
