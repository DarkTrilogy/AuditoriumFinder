export function useBuildings() {
  const buildings = [
    {
      id: 0,
      city: "Москва",
      address: "Адрес 0",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 14,
      city: "Москва",
      address: "Адрес 14",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 15,
      city: "Москва",
      address: "Адрес 15",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 17,
      city: "Москва",
      address: "Адрес 17",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 18,
      city: "Москва",
      address: "Адрес 18",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 19,
      city: "Москва",
      address: "Адрес 19",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 21,
      city: "Москва",
      address: "Адрес 21",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 23,
      city: "Москва",
      address: "Адрес 23",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 24,
      city: "Москва",
      address: "Адрес 24",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 29,
      city: "Москва",
      address: "Адрес 29",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 3,
      city: "Москва",
      address: "Адрес 3",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 4,
      city: "Москва",
      address: "Адрес 4",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 46,
      city: "Москва",
      address: "Адрес 46",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 5,
      city: "Москва",
      address: "Адрес 5",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 51,
      city: "Москва",
      address: "Адрес 51",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 53,
      city: "Москва",
      address: "Адрес 53",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 57,
      city: "Москва",
      address: "Адрес 57",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 11,
      city: "Нижний Новгород",
      address: "Адрес 11",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 13,
      city: "Нижний Новгород",
      address: "Адрес 13",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 16,
      city: "Нижний Новгород",
      address: "Адрес 16",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 20,
      city: "Нижний Новгород",
      address: "Адрес 20",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 25,
      city: "Нижний Новгород",
      address: "Адрес 25",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 26,
      city: "Нижний Новгород",
      address: "Адрес 26",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 27,
      city: "Нижний Новгород",
      address: "Адрес 27",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 32,
      city: "Нижний Новгород",
      address: "Адрес 32",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 33,
      city: "Нижний Новгород",
      address: "Адрес 33",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 35,
      city: "Нижний Новгород",
      address: "Адрес 35",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 36,
      city: "Нижний Новгород",
      address: "Адрес 36",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 42,
      city: "Нижний Новгород",
      address: "Адрес 42",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 52,
      city: "Нижний Новгород",
      address: "Адрес 52",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 56,
      city: "Нижний Новгород",
      address: "Адрес 56",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 59,
      city: "Нижний Новгород",
      address: "Адрес 59",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 9,
      city: "Нижний Новгород",
      address: "Адрес 9",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 31,
      city: "Пермь",
      address: "Адрес 31",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 39,
      city: "Пермь",
      address: "Адрес 39",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 43,
      city: "Пермь",
      address: "Адрес 43",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 45,
      city: "Пермь",
      address: "Адрес 45",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 48,
      city: "Пермь",
      address: "Адрес 48",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 49,
      city: "Пермь",
      address: "Адрес 49",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 50,
      city: "Пермь",
      address: "Адрес 50",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 54,
      city: "Пермь",
      address: "Адрес 54",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 55,
      city: "Пермь",
      address: "Адрес 55",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 1,
      city: "Санкт-Петербург",
      address: "Адрес 1",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 10,
      city: "Санкт-Петербург",
      address: "Адрес 10",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 12,
      city: "Санкт-Петербург",
      address: "Адрес 12",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 2,
      city: "Санкт-Петербург",
      address: "Адрес 2",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 22,
      city: "Санкт-Петербург",
      address: "Адрес 22",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 28,
      city: "Санкт-Петербург",
      address: "Адрес 28",
      first_lesson_start: "09-30",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 30,
      city: "Санкт-Петербург",
      address: "Адрес 30",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
    {
      id: 34,
      city: "Санкт-Петербург",
      address: "Адрес 34",
      first_lesson_start: "08-00",
      last_lesson_end: "21-00",
      lesson_length_minutes: 90,
    },
  ];

  return { buildings, count: buildings.length };
}
