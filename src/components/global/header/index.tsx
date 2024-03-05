import { useState } from "react";
import { useUserContext } from "../../../context/useUserContext";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

export function Header({}: Props) {
  const user = useUserContext();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }

  function handleClickLogOut() {
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <img className="avatar" src={user.user.profilePicture} alt="avatar" />
          <p>Hola, {user.user.name}!</p>
        </div>
        <label className="menu">
          <img src="src/assets/images/menu-mobile.svg" alt="menu" />
          <input type="checkbox" onClick={handleClick} />
        </label>
      </header>
      <nav className={`nav ${isChecked ? "show" : "hide"}`}>
        <ul>
          <li>
            <Link to="/welcome">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={handleClickLogOut}>Log Out</button>
          </li>
        </ul>
      </nav>
    </>
  );
}