export type MealType = 'breakfast' | 'lunch' | 'dinner';

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const DAY_NAMES: Record<DayOfWeek, string> = {
  0: 'Mandag',
  1: 'Tirsdag',
  2: 'Onsdag',
  3: 'Torsdag',
  4: 'Fredag',
  5: 'Lørdag',
  6: 'Søndag',
};

export const MEAL_TYPE_NAMES: Record<MealType, string> = {
  breakfast: 'Morgenmad',
  lunch: 'Frokost',
  dinner: 'Aftensmad',
};

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
