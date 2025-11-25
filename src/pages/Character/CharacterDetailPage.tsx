import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CharacterState } from '../../slices/interfaces/CharacterState.ts'
import { Character } from '../../interfaces/Character.ts'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx'

export const CharacterDetailPage = () => {
  const characters = useSelector<CharacterState, Character[]>((state) => state.characters.characters.entities)
  const { characterId }: Readonly<Params<string>> = useParams<{ characterId: string }>()
  const id = Number(characterId)
  const currentCharacter = characters.find((char: Character) => char.id === id)

  return (
    <React.Fragment>
      <div className="layout_details">
        <Breadcrumbs />
        <div className="details_container">
          <div className="details_img-container">
            <img
              src={currentCharacter?.src}
              className="details_img"
              alt={currentCharacter?.name}
              width="281"
              height="400"
            />
          </div>
          <div className="details_info">
            <div className="card_headline detail_title">{currentCharacter?.name}</div>
            <div className="card_details">
              <div className="detail_container">
                <span className="detail_topic">Height:</span>
                <span className="detail_content">{currentCharacter?.height}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Mass:</span>
                <span className="detail_content">{currentCharacter?.mass}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Hair color:</span>
                <span className="detail_content">{currentCharacter?.hair_color}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Eye color:</span>
                <span className="detail_content">{currentCharacter?.eye_color}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Birth:</span>
                <span className="detail_content">{currentCharacter?.birth_year}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Homeworld:</span>
                <span className="detail_content">
                  {currentCharacter?.homeworld.map((world) => (
                    <span key={world.id}>{world.name}</span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Films:</span>
                <span className="detail_content">
                  {currentCharacter?.films.map((film, index) => (
                    <span key={film.id}>
                      {index === currentCharacter?.films.length - 1 ? film.name : film.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Species:</span>
                <span className="detail_content">
                  {currentCharacter?.species.map((specie, index) => (
                    <span key={specie}>
                      {index === currentCharacter?.species.length - 1 ? specie.name : specie.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Vehicles:</span>
                <span className="detail_content">
                  {currentCharacter?.vehicles.map((vehicle, index) => (
                    <span key={vehicle.id}>
                      {index === currentCharacter?.vehicles.length - 1 ? vehicle.name : vehicle.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Starships:</span>
                <span className="detail_content">
                  {currentCharacter?.starships.map((starships, index) => (
                    <span key={starships.id}>
                      {index === currentCharacter?.starships.length - 1 ? starships.name : starships.name + ', '}{' '}
                    </span>
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
