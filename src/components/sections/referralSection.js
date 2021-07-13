export function ReferralSection(props) {
  const { userInfo } = props;
  const { referral, invitedUsers, creditFromReferral } = userInfo;
  let invited_users_list = 'none';
  if (invitedUsers.length > 0) {
    invited_users_list = invitedUsers.map((user, index) =>
      <li key={index.toString()}>
        {user['name'] + ' - ' + user['email']}
      </li>
    )
  }

  return (
    <section id="referral-section">
      <h1>Referral info</h1>
      <div className="form-container">
        <div  className="input-container">
          <label>Created Referral Code</label>
          <p id="created_referral_code">{referral || 'not created'}</p>
          {
            referral ? '' : <button id="create-referral" onClick={props.referralRequest}>Create Referral Code</button>
          }
        </div>
        <div  className="input-container">
          <label>Registered Invited Users</label>
          <p id="invited_users">
          </p>
          <ul>
            {invited_users_list}
          </ul>
        </div>
        <div  className="input-container">
          <label>Credit from invited users</label>
          <p id="credit-from-referral">{creditFromReferral}</p>
        </div>
      </div>
    </section>
  )
}

export default ReferralSection;
