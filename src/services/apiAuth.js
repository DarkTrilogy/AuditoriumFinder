import { sendConfirmationCode } from "./authService/apiEmailVerifier";
import { passwordChange } from "./authService/apiPasswordChange";
import supabase, { supabaseUrl } from "./supabase";
import { createProfile } from "./userService/apiAccountChange";
import { changeVisibility, editNickname } from "./userService/apiProfile";
import { addTags } from "./userService/apiTags";
import { searchByCriteria } from "./userService/apiUsers";

export async function getCurrentUser() {
  let session;
  const token = localStorage.getItem("accessToken");
  if (token) {
    session = { accessToken: token };
  } else {
    session = null;
  }

  if (!session) {
    console.log("NO SESSION");
    return null;
  }
  const userId = localStorage.getItem("userId");
  let data = await searchByCriteria(userId);
  console.log("SEARCHDATA", data, data[0].userNickname);
  if (!data) {
    console.log("NOT DATA");
    const profileCreateRequest = {
      id: userId,
      nickname: localStorage.getItem("nickname"),
      email: localStorage.getItem("email"),
      telegramHandle: "",
    };
    const profile = await createProfile(profileCreateRequest);
    data = await searchByCriteria(profile.id);
  }

  const userNickname = data[0].userNickname;

  if (userNickname !== "" && userNickname !== undefined) {
    console.log("USER");
    data = {
      user: {
        id: data.userid,
        nickname: userNickname,
        role: "authenticated",
        email: localStorage.getItem("email"),
      },
    };
  }
  return data.user;
}

export async function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("nickname");
  localStorage.removeItem("email");
  // localStorage.removeItem("avatar");
  // localStorage.removeItem("userAudienceId");
}

export async function updateCurrentUser({
  password,
  nickname,
  avatar,
  newTags,
  emailVisibilityTag,
  telegramVisibilityTag,
}) {
  console.log("UPDATE", password, nickname, avatar, newTags);
  // 1. Update password OR fullName

  let updateData;
  // eslint-disable-next-line no-unused-vars
  if (password) updateData = { password };
  let updateUser;

  if (password) {
    sendConfirmationCode(localStorage.getItem("email"));
    const request = {
      email: localStorage.getItem("email"),
      emailCode: "ajsd",
      newPassword: password,
    };
    const data = passwordChange(request);
    console.log("PASSWORD CHANGE", data);
    updateUser = {
      nickname: nickname,
      tags: newTags,
    };
  }
  const data = await editNickname(localStorage.getItem("userId"), nickname);
  console.log("EDITNICKNAME", data);

  // tags
  addTags(localStorage.getItem("userId"), newTags);

  // visibilities
  changeVisibility(localStorage.getItem("userId"), {
    emailVisibility: emailVisibilityTag,
    telegramVisibility: telegramVisibilityTag,
  });

  // 2.Upload avatar image
  const fileName = `avatar-${nickname}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  if (avatar !== "" && avatar !== undefined && avatar !== null) {
    localStorage.setItem(
      `avatar${localStorage.getItem("userId")}`,
      `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    );

    updateUser = {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      tags: newTags,
      nickname: nickname,
    };
  } else {
    updateUser = {
      tags: newTags,
      nickname: nickname,
    };
  }

  return updateUser;
}
