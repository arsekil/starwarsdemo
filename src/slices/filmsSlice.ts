import { createSlice } from '@reduxjs/toolkit'
import { fetchDataThunk } from './fetchDataThunk.ts'
import { FilmState } from './interfaces/FilmState.ts'

const initialState: FilmState = {
  films: {
    entities: [],
    loading: false,
    error: null,
  },
}

const filmsSlice = createSlice({
  name: 'filmsSlice',
  initialState: initialState as FilmState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.films.loading = true
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.films.loading = false
        state.films.entities = action.payload
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.films.loading = false
        state.films.error = action.error.message ?? 'An unknown error occurred'
      })
  },
})

export default filmsSlice.reducer
