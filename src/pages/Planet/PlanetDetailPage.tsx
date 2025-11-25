import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { PlanetState } from '../../slices/interfaces/PlanetState.ts'
import { Planet } from '../../interfaces/Planet.ts'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx'

export const PlanetDetailPage = () => {
  const planets = useSelector<PlanetState, Planet[]>((state) => state.planets.planets.entities)
  const { planetId }: Readonly<Params<string>> = useParams<{ planetId: string }>()
  const id = Number(planetId)
  const currentPlanet = planets.find((planet: Planet) => planet.id === id)

  return (
    <React.Fragment>
      <div className="layout_details">
        <Breadcrumbs />
        <div className="details_container">
          <div className="details_img-container">
            <img src={currentPlanet?.src} className="details_img" alt={currentPlanet?.name} width="281" height="400" />
          </div>
          <div className="details_info">
            <div className="card_headline detail_title">{currentPlanet?.name}</div>
            <div className="card_details">
              <div className="detail_container">
                <span className="detail_topic">Rotation period:</span>
                <span className="detail_content">{currentPlanet?.rotation_period}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Orbital period:</span>
                <span className="detail_content">{currentPlanet?.orbital_period}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Diameter:</span>
                <span className="detail_content">{currentPlanet?.diameter}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Climate:</span>
                <span className="detail_content">{currentPlanet?.climate}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Gravity:</span>
                <span className="detail_content">{currentPlanet?.gravity}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Terrain:</span>
                <span className="detail_content">{currentPlanet?.terrain}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Surface water:</span>
                <span className="detail_content">{currentPlanet?.surface_water}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Population:</span>
                <span className="detail_content">{currentPlanet?.population}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Residents:</span>
                <span className="detail_content">
                  {currentPlanet?.residents.map((resident, index) => (
                    <React.Fragment key={resident.id}>
                      {index === currentPlanet?.residents.length - 1 ? resident.name : resident.name + ', '}
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Films:</span>
                <span className="detail_content">
                  {currentPlanet?.films.map((film, index) => (
                    <React.Fragment key={film.id}>
                      {index === currentPlanet?.films.length - 1 ? film.name : film.name + ', '}
                    </React.Fragment>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
