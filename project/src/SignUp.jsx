import SignUpForm from "./SignUpForm";
import "./Login.css";
import Footer from "./Footer";

function SignUp() {
  return (
    <>
      <div className="login-background">
        <SignUpForm />
      </div>
      <Footer></Footer>
    </>
  );
}

export default SignUp;
