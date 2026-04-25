// app/reducers/wod.ts
// Slice Redux pour les WODs générés et les filtres actifs.
// NON persisté — éphémère, remis à zéro au rechargement.

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Wod, WodFilters } from "@/types";

interface WodSliceState {
  value: {
    currentWods: Wod[];
    filters: WodFilters | null;
  };
}

const initialState: WodSliceState = {
  value: {
    currentWods: [],
    filters: null,
  },
};

export const wodSlice = createSlice({
  name: "wod",
  initialState,
  reducers: {
    setCurrentWods: (state, action: PayloadAction<Wod[]>) => {
      state.value.currentWods = action.payload;
    },
    setFilters: (state, action: PayloadAction<WodFilters>) => {
      state.value.filters = action.payload;
    },
    deleteWod: (state) => {
      state.value.currentWods = [];
      state.value.filters = null;
    },
  },
});

export const { setCurrentWods, setFilters, deleteWod } = wodSlice.actions;
export default wodSlice.reducer;
