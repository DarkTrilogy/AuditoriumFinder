import { createClient } from "@supabase/supabase-js";

// Инициализация клиента для работы с базой данных Supabase
const supabaseUrl = "https://xyzcompany.supabase.co";
const supabaseKey = "public-anonymous-key";
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Получить аудиторию по её ID.
 * @param {string} id - Идентификатор аудитории.
 * @return {Promise<object>} - Данные аудитории.
 */
export async function getAuditoriumById(id) {
  const { data, error } = await supabase
    .from("auditoriums")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching auditorium: ", error);
  }
  return { data, error };
}

/**
 * Получить все аудитории.
 * @return {Promise<object[]>} - Массив данных аудиторий.
 */
export async function getAllAuditoriums() {
  const { data, error } = await supabase.from("auditoriums").select("*");
  if (error) {
    console.error("Error fetching auditoriums: ", error);
  }
  return { data, error };
}

// Другие функции доступа к базе данных можно добавить сюда при необходимости
