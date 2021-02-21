import logo from "../img/logo-marvel.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="header">
        <div className="container">
          <Link to="/">
            <img className="logo" src={logo} alt="Marvel's logo" />
          </Link>
          <hr />
          <div className="links-page">
            <Link className="characters-link" to="/">
              Characters
            </Link>
            <Link className="comics-link" to="/comics">
              Comics
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
