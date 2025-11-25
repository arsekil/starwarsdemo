import { createBrowserRouter, createRoutesFromElements, Route, Navigate, Link } from 'react-router-dom'

import { Layout } from '../layouts/index.ts'

import { ErrorPage } from '../pages/Error/index.ts'
import { EpisodeListPage, EpisodeDetailPage } from '../pages/Episode/index.ts'
import { CharacterListPage, CharacterDetailPage } from '../pages/Character/index.ts'
import { PlanetListPage, PlanetDetailPage } from '../pages/Planet/index.ts'
import { SpeciesListPage, SpeciesDetailPage } from '../pages/Species/index.ts'
import { VehicleListPage, VehicleDetailPage } from '../pages/Vehicle/index.ts'
import { StarshipListPage, StarshipDetailPage } from '../pages/Starship/index.ts'

import { BreadcrumbHandle } from '../components/Breadcrumbs/IBreadcrumb.ts'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Navigate to="/episodes" replace />} />

      <Route path="/episodes">
        <Route index element={<EpisodeListPage />} />
        <Route
          path=":episodeId"
          element={<EpisodeDetailPage />}
          handle={
            {
              crumb: () => [
                () => <Link to="/">Home</Link>,
                () => <Link to="/episodes">Episodes</Link>,
                () => <p>Episode</p>,
              ],
            } satisfies BreadcrumbHandle
          }
        />
      </Route>

      <Route path="characters">
        <Route index element={<CharacterListPage />} />
        <Route
          path=":characterId"
          element={<CharacterDetailPage />}
          handle={
            {
              crumb: () => [
                () => <Link to="/">Home</Link>,
                () => <Link to="/characters">Characters</Link>,
                () => <p>Character</p>,
              ],
            } satisfies BreadcrumbHandle
          }
        />
      </Route>

      <Route path="planets">
        <Route index element={<PlanetListPage />} />
        <Route
          path=":planetId"
          element={<PlanetDetailPage />}
          handle={
            {
              crumb: () => [
                () => <Link to="/">Home</Link>,
                () => <Link to="/planets">Planets</Link>,
                () => <p>Planet</p>,
              ],
            } satisfies BreadcrumbHandle
          }
        />
      </Route>

      <Route path="species">
        <Route index element={<SpeciesListPage />} />
        <Route
          path=":speciesId"
          element={<SpeciesDetailPage />}
          handle={
            {
              crumb: () => [
                () => <Link to="/">Home</Link>,
                () => <Link to="/species">Species</Link>,
                () => <p>Specie</p>,
              ],
            } satisfies BreadcrumbHandle
          }
        />
      </Route>

      <Route path="vehicles">
        <Route index element={<VehicleListPage />} />
        <Route
          path=":vehicleId"
          element={<VehicleDetailPage />}
          handle={
            {
              crumb: () => [
                () => <Link to="/">Home</Link>,
                () => <Link to="/vehicles">Vehicles</Link>,
                () => <p>Vehicle</p>,
              ],
            } satisfies BreadcrumbHandle
          }
        />
      </Route>

      <Route path="starships">
        <Route index element={<StarshipListPage />} />
        <Route
          path=":starshipId"
          element={<StarshipDetailPage />}
          handle={
            {
              crumb: () => [
                () => <Link to="/">Home</Link>,
                () => <Link to="/starships">Starships</Link>,
                () => <p>Starship</p>,
              ],
            } satisfies BreadcrumbHandle
          }
        />
      </Route>
    </Route>
  )
)
