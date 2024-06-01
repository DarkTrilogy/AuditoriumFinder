// auditoriumService.js

import * as auditoriumRepository from "./auditoriumRepository";

/**
 * Найти аудиторию по ID.
 * @param {string} id - Идентификатор аудитории.
 * @return {object} - Данные аудитории.
 */
export async function findAuditorium(id) {
  const { data, error } = await auditoriumRepository.getAuditoriumById(id);
  if (error) {
    throw new Error("Error fetching auditorium");
  }
  return data;
}

/**
 * Получить список всех аудиторий.
 * @return {object[]} - Массив данных аудиторий.
 */
export async function findAllAuditoriums() {
  const { data, error } = await auditoriumRepository.getAllAuditoriums();
  if (error) {
    throw new Error("Error fetching auditoriums");
  }
  return data;
}
