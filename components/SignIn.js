import { signIn } from "next-auth/client";

const handleSignin = (e) => {
  e.preventDefault();
  signIn();
};

const SignIn = ({ user }) => (
  <div className="container">
    <div className="logo-wrapper">
      <img
        src="https://minorityprogrammers.com/assets/images/mp_asset_icon.svg"
        alt="logo"
        className="logo"
      />
    </div>
    <div className="wrapper sign-in">
      <p className="sign-in-txt">Please Sign in</p>
      <a href="#" onClick={handleSignin} className="btn btn-sign-in">
        Sign in
      </a>
    </div>
  </div>
);

export default SignIn;
