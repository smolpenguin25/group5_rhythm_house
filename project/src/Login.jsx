import LoginForm from "./LoginForm";
import "./Login.css";
import Footer from "./Footer";

function Login() {
  return (
    <>
      <div className="login-background">
        <LoginForm />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Login;
