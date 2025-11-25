import { createSlice } from '@reduxjs/toolkit'
import { fetchDataThunk } from './fetchDataThunk.ts'
import { PlanetState } from './interfaces/PlanetState.ts'

const initialState: PlanetState = {
  planets: {
    entities: [],
    loading: false,
    error: null,
  },
}

const planetsSlice = createSlice({
  name: 'planetsSlice',
  initialState: initialState as PlanetState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.planets.loading = true
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.planets.loading = false
        state.planets.entities = action.payload
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.planets.loading = false
        state.planets.error = action.error.message ?? 'An unknown error occurred'
      })
  },
})
export default planetsSlice.reducer
