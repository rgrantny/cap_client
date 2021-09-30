import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./contact.css";

export default function Contact() {
  return (
    <div className="register">
      <span className="registerTitle">Contact</span>
      <form className="registerForm">
        <label>Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Message</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your message..."
        />
        <button className="registerButton">Send</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
