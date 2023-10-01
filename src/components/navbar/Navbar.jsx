import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast("Registered successfully.Login with your credentials");

  const { loading, error, dispatch, user } = useContext(AuthContext);
 
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };
  if (user === undefined) {
    notifySuccess();
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HotelBooking</span>
        </Link>

        <div className="navItems">
          {user === true ? (
            <>
              <p>{user.username}</p>
              <button className="navButton" onClick={handleClick}>
                Logout
              </button>
            </>
          ) : (
            <>
              {user === "User has been created" ? (
                <button
                  className="navButton"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              ) : (
                <>
                  <button
                    className="navButton"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                  <button
                    className="navButton"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </>
              )}
            </>
          )}
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
