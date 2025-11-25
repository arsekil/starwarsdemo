import { createSlice } from '@reduxjs/toolkit'
import { fetchDataThunk } from './fetchDataThunk.ts'
import { StarshipState } from './interfaces/StarshipState.ts'

const initialState: StarshipState = {
  starships: {
    entities: [],
    loading: false,
    error: null,
  },
}

const starshipsSlice = createSlice({
  name: 'starshipsSlice',
  initialState: initialState as StarshipState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.starships.loading = true
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.starships.loading = false
        state.starships.entities = action.payload
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.starships.loading = false
        state.starships.error = action.error.message ?? 'An unknown error occurred'
      })
  },
})
export default starshipsSlice.reducer
