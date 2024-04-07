import supabase, { supabaseUrl } from "./supabase";
import { createProfile } from "./userService/apiAccountChange";
import { searchByCriteria } from "./userService/apiUsers";

// Supabase option
// export async function signup({ fullName, email, password }) {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: {
//         fullName,
//         avatar: "",
//       },
//     },
//   });

//   if (error) throw new Error(error.message);

//   return data;
// }

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// export async function getCurrentUser() {
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;

//   const { data, error } = await supabase.auth.getUser();

//   if (error) throw new Error(error.message);
//   return data?.user;
// }

export async function getCurrentUser() {
  let session;
  const token = localStorage.getItem("accessToken");
  if (token) {
    session = { accessToken: token };
  } else {
    session = null;
  }

  if (!session) return null;
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
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, nickname, avatar }) {
  // 1. Update password OR fullName

  let updateData;
  if (password) updateData = { password };
  if (nickname) updateData = { data: { nickname } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2.Upload avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
