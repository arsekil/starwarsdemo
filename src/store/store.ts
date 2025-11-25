import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import filmsReducer from '../slices/filmsSlice.ts'
import charactersReducer from '../slices/charactersSlice.ts'
import planetsReducer from '../slices/planetsSlice.ts'
import speciesReducer from '../slices/speciesSlice.ts'
import vehiclesReducer from '../slices/vehiclesSlice.ts'
import starshipsReducer from '../slices/starshipsSlice.ts'

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    characters: charactersReducer,
    planets: planetsReducer,
    species: speciesReducer,
    vehicles: vehiclesReducer,
    starships: starshipsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
