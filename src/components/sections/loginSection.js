export function LoginSection(props) {
  return (
    <section id="login-section">
      <div className="form-container">
        <form id="loginForm" method="POST" encType="multipart/form-data" onSubmit={(e) => props.loginRequest(e)} >
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
      
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
      
          <div className="input-container">
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LoginSection;
