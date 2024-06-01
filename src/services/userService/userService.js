import * as userRepository from "./userRepository";

/**
 * Получить данные пользователя по Email.
 * @param {string} email - Email пользователя.
 * @return {object} - Данные пользователя.
 */
export async function findUserByEmail(email) {
  const { data, error } = await userRepository.getUserByEmail(email);
  if (error) {
    throw new Error("Error fetching user by email");
  }
  return data;
}

/**
 * Обновить данные пользователя.
 * @param {string} id - Идентификатор пользователя.
 * @param {object} updates - Обновляемые данные пользователя.
 * @return {object} - Обновленные данные пользователя.
 */
export async function updateUserDetails(id, updates) {
  const { data, error } = await userRepository.updateUser(id, updates);
  if (error) {
    throw new Error("Error updating user details");
  }
  return data;
}
