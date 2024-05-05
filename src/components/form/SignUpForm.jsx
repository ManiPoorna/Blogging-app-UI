/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, TextField, LinearProgress } from "@mui/material";

const SignUpForm = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSignup(e) {
    setLoading(true);
    if (!name || !email || !password || !userName) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }
    const response = await axios.post("http://localhost:8000/auth/signup", {
      name: name,
      email: email,
      password: password,
      username: userName,
    });
    const result = await response.data;
    if (result.status !== 201) {
      toast.error(result.error);
      setLoading(false);
      return;
    }
    setTimeout(() => {
      toast.success(result.message);
      setEmail("");
      setPassword("");
      setUserName("");
      setName("");
      setIsSignup(false);
      setLoading(false);
    }, 1500);
  }

  async function handleLogin(e) {
    setLoading(true);
    if (!email || !password) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }
    const response = await axios.post("http://localhost:8000/auth/login", {
      loginId: email.trim(),
      password: password.trim(),
    });
    const result = await response.data;
    console.log(result);
    if (result.status !== 200) {
      toast.error(result.error);
      setLoading(false)
      return;
    }
    setTimeout(() => {
      setEmail("");
      setPassword("");
      toast.success(result.message);
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  }

  return (
    <>
      {isSignup ? (
        <div className="landing-div">
          <form className="signup-form flex">
            <h2>SignUp to Blogger.com</h2>
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input"
              label="Name"
              variant="standard"
              required
            />
            <TextField
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              className="input"
              label="User Name"
              variant="standard"
              required
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input"
              label="Email"
              type="email"
              variant="standard"
              required
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="input"
              label="Password"
              type="password"
              variant="standard"
              required
            />
            <Button
              disabled={loading}
              onClick={(e) => {
                handleSignup(e);
              }}
              className="button"
              size="small"
              variant="contained">
              {loading ? "Loading..." : "Signup"}
            </Button>
            {loading ? <LinearProgress color="secondary" /> :
              <p onClick={() => setIsSignup(false)}>
                Already an user? <u>Login here</u>{" "}
              </p>
            }
          </form>
        </div>
      ) : (
        <div className="landing-div">
          <form className="login-form flex">
            <h2>Login to Blogger.com</h2>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              label="Email or Username"
              value={email}
              variant="standard"
            />
            <br />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              label="Password"
              value={password}
              type="password"
              variant="standard"
            />
            <br />
            <Button
              className="button"
              size="small"
              variant="contained"
              onClick={(e) => handleLogin(e)}>
              Login
            </Button>
              {loading ? <LinearProgress color="secondary" /> :
                <p onClick={() => setIsSignup(true)}>
                  Dont have an account? <u>Signup here</u>{" "}
                </p>
              }
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
