import { createSlice } from '@reduxjs/toolkit'
import { fetchDataThunk } from './fetchDataThunk.ts'
import { SpeciesState } from './interfaces/SpeciesState.ts'

const initialState: SpeciesState = {
  species: {
    entities: [],
    loading: false,
    error: null,
  },
}

const speciesSlice = createSlice({
  name: 'speciesSlice',
  initialState: initialState as SpeciesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.species.loading = true
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.species.loading = false
        state.species.entities = action.payload
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.species.loading = false
        state.species.error = action.error.message ?? 'An unknown error occurred'
      })
  },
})

export default speciesSlice.reducer
