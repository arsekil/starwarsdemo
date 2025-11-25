import { createSlice } from '@reduxjs/toolkit'
import { fetchDataThunk } from './fetchDataThunk.ts'
import { VehicleState } from './interfaces/VehicleState.ts'

const initialState: VehicleState = {
  vehicles: {
    entities: [],
    loading: false,
    error: null,
  },
}

const vehiclesSlice = createSlice({
  name: 'vehiclesSlice',
  initialState: initialState as VehicleState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state, action) => {
        state.vehicles.loading = true
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.vehicles.loading = false
        state.vehicles.entities = action.payload
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.vehicles.loading = false
        state.vehicles.error = action.error.message ?? 'An unknown error occurred'
      })
  },
})
export default vehiclesSlice.reducer
