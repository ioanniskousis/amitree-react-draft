export async function loginRequest(form, apiURL, handle) {
  const actionUrl = `${apiURL}/authenticate`;
  const formData = new FormData(form);

  const options = {
    method: 'post',
    body: formData
  }
  await fetch(actionUrl, options)
  .then((response) => response.json())
  .then((json) => handle(parse(json)))
  .catch((e) => {
    alert(JSON.stringify(e));
    return null;
  })
}

function parse(json) {
  const error = json.error;
  if (error) {
    if (error.user_authentication) {
      alert('authentication: ' + error.user_authentication);
    } else {
      alert(JSON.stringify('error: ' + json.error));
    }
    return null;
  } else {
    return {
      current_view: 'user',
      userInfo: {
        userName: json.user_name,
        auth_token: json.auth_token,
        inviterName: json.inviter_name,
        creditFromSignup: json.credit_from_signup,
        referral: json.referral,
        invitedUsers: json.invited_users,
        creditFromReferral: json.credit_from_referral
      }
    };
  }
}

export default loginRequest;