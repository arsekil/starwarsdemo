import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StarshipState } from '../../slices/interfaces/StarshipState.ts'
import { Starship } from '../../interfaces/Starship.ts'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx'

export const StarshipDetailPage = () => {
  const starships = useSelector<StarshipState, Starship[]>((state) => state.starships.starships.entities)
  const { starshipId }: Readonly<Params<string>> = useParams<{ starshipId: string }>()
  const id = Number(starshipId)
  const currentStarship = starships.find((starship: Starship) => starship.id === id)

  return (
    <React.Fragment>
      <div className="layout_details">
        <Breadcrumbs />
        <div className="details_container">
          <div className="details_img-container">
            <img
              src={currentStarship?.src}
              className="details_img"
              alt={currentStarship?.name}
              width="281"
              height="400"
            />
          </div>
          <div className="details_info">
            <div className="card_headline detail_title">{currentStarship?.name}</div>
            <div className="card_details">
              <div className="detail_container">
                <span className="detail_topic">Model:</span>
                <span className="detail_content">{currentStarship?.model}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Manufacturer:</span>
                <span className="detail_content">{currentStarship?.manufacturer}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Cost in Credits:</span>
                <span className="detail_content">{currentStarship?.cost_in_credits}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Length:</span>
                <span className="detail_content">{currentStarship?.length}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Max atm. speed:</span>
                <span className="detail_content">{currentStarship?.max_atmosphering_speed}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Crew:</span>
                <span className="detail_content">{currentStarship?.crew}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Passangers:</span>
                <span className="detail_content">{currentStarship?.passengers}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Cargo capacity:</span>
                <span className="detail_content">{currentStarship?.cargo_capacity}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Consumables:</span>
                <span className="detail_content">{currentStarship?.consumables}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Hyperdrive rating:</span>
                <span className="detail_content">{currentStarship?.hyperdrive_rating}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">MGLT:</span>
                <span className="detail_content">{currentStarship?.MGLT}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Starship Class:</span>
                <span className="detail_content">{currentStarship?.starship_class}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Pilots:</span>
                <span className="detail_content">
                  {currentStarship?.pilots.map((pilot) => (
                    <span key={pilot.id}>{pilot.name}</span>
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
