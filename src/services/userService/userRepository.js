import { createClient } from "@supabase/supabase-js";

// Инициализация клиента для работы с базой данных Supabase
const supabaseUrl = "https://xyzcompany.supabase.co";
const supabaseKey = "public-anonymous-key";
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Получить данные пользователя по его Email.
 * @param {string} email - Email пользователя.
 * @return {Promise<object>} - Данные пользователя.
 */
export async function getUserByEmail(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  if (error) {
    console.error("Error fetching user by email: ", error);
  }
  return { data, error };
}

/**
 * Обновить данные пользователя.
 * @param {string} id - Идентификатор пользователя.
 * @param {object} updates - Обновляемые данные пользователя.
 * @return {Promise<object>} - Обновленные данные пользователя.
 */
export async function updateUser(id, updates) {
  const { data, error } = await supabase
    .from("users")
    .update(updates)
    .eq("id", id);
  if (error) {
    console.error("Error updating user: ", error);
  }
  return { data, error };
}
