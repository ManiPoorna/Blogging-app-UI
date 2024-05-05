/* eslint-disable no-unused-vars */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/form/SignUpForm.jsx";
import Mainpage from "./components/dashboard/mainpage/Mainpage.jsx";
const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        {/* <Route path="/" element={<SignUpForm />} /> */}
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </div>
  );
};

export default App;