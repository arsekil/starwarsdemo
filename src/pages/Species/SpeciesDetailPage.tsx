import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SpeciesState } from '../../slices/interfaces/SpeciesState.ts'
import { Species } from '../../interfaces/Species.ts'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx'

export const SpeciesDetailPage = () => {
  const species = useSelector<SpeciesState, Species[]>((state) => state.species.species.entities)
  const { speciesId }: Readonly<Params<string>> = useParams<{ speciesId: string }>()
  const id = Number(speciesId)
  const currentSpecie = species.find((specie: Species) => specie.id === id)

  return (
    <React.Fragment>
      <div className="layout_details">
        <Breadcrumbs />
        <div className="details_container">
          <div className="details_img-container">
            <img src={currentSpecie?.src} className="details_img" alt={currentSpecie?.name} width="281" height="400" />
          </div>
          <div className="details_info">
            <div className="card_headline detail_title">{currentSpecie?.name}</div>
            <div className="card_details">
              <div className="detail_container">
                <span className="detail_topic">Classification:</span>
                <span className="detail_content">{currentSpecie?.classification}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Designation:</span>
                <span className="detail_content">{currentSpecie?.designation}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Average height:</span>
                <span className="detail_content">{currentSpecie?.average_height}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Skin colors:</span>
                <span className="detail_content">{currentSpecie?.skin_colors}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Hair colors:</span>
                <span className="detail_content">{currentSpecie?.hair_colors}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Eye colors:</span>
                <span className="detail_content">{currentSpecie?.eye_colors}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Average lifespan:</span>
                <span className="detail_content">{currentSpecie?.average_lifespan}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Homeworld:</span>
                <span className="detail_content">
                  {currentSpecie?.homeworld.map((world, index) => (
                    <React.Fragment key={world.id}>
                      {index === currentSpecie?.homeworld.length - 1 ? world.name : world.name + ', '}
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Language:</span>
                <span className="detail_content">{currentSpecie?.language}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Residents:</span>
                <span className="detail_content">
                  {currentSpecie?.people.map((person, index) => (
                    <React.Fragment key={person.id}>
                      {index === currentSpecie?.people.length - 1 ? person.name : person.name + ', '}
                    </React.Fragment>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Films:</span>
                <span className="detail_content">
                  {currentSpecie?.films.map((film, index) => (
                    <React.Fragment key={film.id}>
                      {index === currentSpecie?.films.length - 1 ? film.name : film.name + ', '}
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
