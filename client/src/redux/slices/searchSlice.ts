import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  filteredVideos: any[];
}

const initialState: SearchState = {
  query: "",
  filteredVideos: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setFilteredVideos: (state, action) => {
      state.filteredVideos = action.payload;
    },
  },
});

export const { setQuery, setFilteredVideos } = searchSlice.actions;

export default searchSlice.reducer;
