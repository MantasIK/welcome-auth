import { signOut } from "next-auth/client";
import Form from "./Form";

const handleSignout = (e) => {
  e.preventDefault();
  signOut();
};

const UserForm = ({ user }) => (
  <div className="container">
    <img
      src="https://minorityprogrammers.com/assets/images/mp_asset_icon.svg"
      alt="logo"
      className="logo"
    />
    <div className="wrapper welcome">
      <p className="welcome-header">WELCOME</p>
      <div className="welcome-profile">
        <img
          src={user.image}
          alt="user profile image"
          className="profile-pic"
        />
        <p className="welcome-txt">{user.name ?? user.email}</p>
      </div>
      <Form />

      <a href="#" onClick={handleSignout} className="btn-signin">
        Sign out
      </a>
    </div>
  </div>
);

export default UserForm;
