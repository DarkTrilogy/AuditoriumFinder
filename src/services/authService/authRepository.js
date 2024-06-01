import { createClient } from "@supabase/supabase-js";

// Инициализация клиента для работы с базой данных Supabase
const supabaseUrl = "https://xyzcompany.supabase.co";
const supabaseKey = "public-anonymous-key";
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Получить пользователя по его ID.
 * @param {string} id - Идентификатор пользователя.
 * @return {Promise<object>} - Данные пользователя.
 */
export async function getUserById(id) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching user: ", error);
  }
  return { data, error };
}

/**
 * Добавить нового пользователя.
 * @param {object} user - Данные пользователя.
 * @return {Promise<object>} - Данные нового пользователя.
 */
export async function addUser(user) {
  const { data, error } = await supabase.from("users").insert([user]);
  if (error) {
    console.error("Error adding user: ", error);
  }
  return { data, error };
}
