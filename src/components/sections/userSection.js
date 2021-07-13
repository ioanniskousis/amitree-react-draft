export function UserSection(props) {
  const { userInfo } = props;
  const { 
    userName,
    auth_token,
    inviterName,
    creditFromSignup,
  } = userInfo;
  return (
    <section id="user-section">
      <h1>User info</h1>
      <div className="form-container">
        <div  className="input-container">
          <label>User Name</label>
          <p id="current_user">{userName}</p>
          <label>Auth Token</label>
          <p id="auth_token">{auth_token}</p> 
        </div>
        {
          inviterName ?
          <div  className="input-container" id="inviter-container">
            <label>Inviter</label>
            <p id="inviter-name">{inviterName}</p>

            <label>Credit from sign up with referral code</label>
            <p id="credit-from-sign-up">{creditFromSignup}</p>
          </div>
          : ''
        }
      </div>
    </section>
  )
}

export default UserSection;
