// app/types/index.ts
// Types TypeScript partagés entre toutes les screens, composants et appels API.

export interface Exercice {
  _id?: string;
  name: string;
  category?: string;
  rep?: number;
  focus?: string[];
  materiel?: string[];
  duration?: number;
  recup?: number;
  difficulty?: string;
  xp?: number;
  rx?: { homme?: string; femme?: string };
  description?: string;
  image?: string;
  distance?: string;
}

export interface Wod {
  _id?: string;
  token: string;
  name?: string;
  duration?: number;
  focus?: string[];
  materiel?: string[];
  exercices: Exercice[];
  isFavorite: boolean;
  isCompleted?: boolean;
  distance?: string;
  owner?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserState {
  token: string | null;
  username: string | null;
  email: string | null;
  xp: number;
  picture: string | null;
}

export type DurationLabel = "20 min" | "40 min" | "60 min";

export interface WodFilters {
  materiel: string[];
  focus: string[];
  duration: number;
}

export interface ApiAuthResponse {
  result: boolean;
  token?: string;
  username?: string;
  email?: string;
  xp?: number;
  picture?: string | null;
  error?: string;
}

export interface ApiGenerateResponse {
  result: boolean;
  wods?: Wod[];
  error?: string;
}

export interface ApiSaveResponse {
  result: boolean;
  savedWodToken?: Wod;
  error?: string;
}

export interface ApiFavoritesResponse {
  result: boolean;
  favoritesWOD?: Wod[];
  error?: string;
}

export interface ApiHistoryResponse {
  result: boolean;
  history?: Wod[];
  error?: string;
}
