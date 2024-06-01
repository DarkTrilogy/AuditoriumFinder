import * as authRepository from "./authRepository";

/**
 * Получение пользователя по его ID.
 * @param {string} id - Идентификатор пользователя.
 * @return {object} - Данные пользователя.
 */
export async function findUser(id) {
  const { data, error } = await authRepository.getUserById(id);
  if (error) {
    throw new Error("Error fetching user");
  }
  return data;
}

/**
 * Регистрация нового пользователя.
 * @param {object} user - Данные пользователя.
 * @return {object} - Данные нового пользователя.
 */
export async function registerUser(user) {
  const { data, error } = await authRepository.addUser(user);
  if (error) {
    throw new Error("Error adding user");
  }
  return data;
}
