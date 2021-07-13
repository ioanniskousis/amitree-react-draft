export async function signUpRequest(form, apiURL, handle) {
  const actionUrl = `${apiURL}/register`;
  const formData = new FormData(form);

  const options = {
    method: 'post',
    body: formData
  }
  await fetch(actionUrl, options)
  .then((response) => response.json())
  .then((json) => handle(parse(json)))
  .catch((err) => {
    alert(err);
    return null;
  })
}

function parse(json) {
  if (json.error) {
    alert(JSON.stringify(json.error));
    return null;
  } else {
    return {
      current_view: 'user',
      userInfo: {
        userName: json.user_name,
        auth_token: json.auth_token,
        inviterName: json.inviter_name,
        creditFromSignup: json.credit_from_signup,
        referral: '',
        invitedUsers: [],
        creditFromReferral: '$0'
      }
    };
  }
}

export default signUpRequest;