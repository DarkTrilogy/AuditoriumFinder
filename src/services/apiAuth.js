import supabase, { supabaseUrl } from "./supabase";
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
    // Пользователь аутентифицирован
    session = { accessToken: token };
  } else {
    // Пользователь не аутентифицирован
    session = null;
  }

  if (!session) return null;
  const userId = localStorage.getItem("userId");
  let data = await searchByCriteria(userId);

  if (data.userNickname !== "" && data.userNickname !== undefined) {
    data = {
      user: {
        id: data.userId,
        nickname: data.userNickname,
        role: "authenticated",
        email: "fjalfj",
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
