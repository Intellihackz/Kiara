
function Login() {
  return (
    <div className="login">
      <h1>Log in</h1>
      <p>proceed with your patient account</p>
      <div className="input">
        <input id="user" type="text" placeholder="Enter Username" />
        <input type="text" placeholder="password"/>
        <p>forget password?</p>
      </div>
    </div>
  )
}

export default Login