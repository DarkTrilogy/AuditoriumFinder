const prefixUrl = "http://localhost:8080/account";

// @Override
// public ResponseEntity<FullProfileResponse> createProfile(ProfileCreateRequest profileCreateRequest) {
//     return null;
// }

// @Override
// public ResponseEntity<ShortUserResponse> deleteProfile(int userid) {
//     return null;
// }

// @Override
// public ResponseEntity<FullProfileResponse> removeTelegram(int userid) {
//     return null;
// }

// @Override
// public ResponseEntity<FullProfileResponse> addTelegram(int userid) {
//     return null;
// }

export async function createProfile(profileCreateRequest) {
  const response = await fetch(`${prefixUrl}/create`, {
    method: "POST",
    body: JSON.stringify(profileCreateRequest),
  });
  return response.json();
}

export async function deleteProfile(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/delete`, {
    method: "DELETE",
  });
  return response.json();
}

export async function removeTelegram(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/remove_telegram`, {
    method: "DELETE",
  });
  return response.json();
}

export async function addTelegram(userid) {
  const response = await fetch(`${prefixUrl}/${userid}/add_telegram`, {
    method: "PATCH",
  });
  return response.json();
}
