
import "./login.scss"

function Login() {
  
    

  return (
    <div className="login">
          <div className="top">
              <div className="wrapper">
              <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />

              </div>
          </div>
          <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email or Phone number"/>
         
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix ? <b>Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
            
        </form>
          </div>
    </div>
  )
}

export default Login
