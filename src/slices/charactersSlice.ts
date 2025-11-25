import { createSlice } from '@reduxjs/toolkit'
import { fetchDataThunk } from './fetchDataThunk.ts'
import { CharacterState } from './interfaces/CharacterState.ts'

const initialState: CharacterState = {
  characters: {
    entities: [],
    loading: false,
    error: null,
  },
}

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState: initialState as CharacterState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.characters.loading = true
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.characters.loading = false
        state.characters.entities = action.payload
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.characters.loading = false
        state.characters.error = action.error.message ?? 'An unknown error occurred'
      })
  },
})

export default charactersSlice.reducer
