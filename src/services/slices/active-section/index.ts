import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TActiveSectionState = {
  section: string;
};

const initialState: TActiveSectionState = {
  section: '',
};

const slice = createSlice({
  name: 'activeSection',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
    resetSection: (state) => {
      state.section = '';
    },
  },
  selectors: {
    getSection: (state) => state.section,
  },
});

export const { getSection } = slice.selectors;
export const { setSection, resetSection } = slice.actions;
export const activeSectionReducer = slice.reducer;
