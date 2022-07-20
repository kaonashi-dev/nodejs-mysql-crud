export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface Diary {
   id: number;
   date: string;
   weather: Weather;
   visibility: Visibility;
   comment: string;
}

export type newDiary = Omit<Diary, 'id'>