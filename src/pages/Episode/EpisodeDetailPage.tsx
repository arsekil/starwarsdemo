import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FilmState } from '../../slices/interfaces/FilmState.ts'
import { Film } from '../../interfaces/index.ts'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx'
import { intToRoman } from '../../utils/convertToRoman.js'

export const EpisodeDetailPage = () => {
  const episodes = useSelector<FilmState, Film[]>((state: FilmState) => state.films.films.entities)
  const { episodeId }: Readonly<Params<string>> = useParams<{ episodeId: string }>()
  const id = Number(episodeId)
  const currentEpisode = episodes.find((ep: Film) => ep.id === id)

  return (
    <React.Fragment>
      <div className="layout_details">
        <Breadcrumbs />
        <div className="details_container">
          <div className="details_img-container">
            <img
              src={currentEpisode?.src}
              className="details_img"
              alt={currentEpisode?.name}
              width="281"
              height="400"
            />
          </div>
          <div className="details_info">
            <div className="card_headline detail_title">
              Star Wars: Episode {intToRoman(currentEpisode?.id)} - {currentEpisode?.name}
            </div>
            <div className="card_details">
              <div className="detail_container">
                <span className="detail_topic">Episode:</span>
                <span className="detail_content">{intToRoman(currentEpisode?.id)}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Director:</span>
                <span className="detail_content">{currentEpisode?.director}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Producer:</span>
                <span className="detail_content">{currentEpisode?.producer}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Release Date:</span>
                <span className="detail_content">{currentEpisode?.release_date}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Characters:</span>
                <span className="detail_content">
                  {currentEpisode?.characters.map((char, index) => (
                    <span key={char.id}>
                      {index === currentEpisode?.characters.length - 1 ? char.name : char.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Planets:</span>
                <span className="detail_content">
                  {currentEpisode?.planets.map((planet, index) => (
                    <span key={planet.id}>
                      {index === currentEpisode?.planets.length - 1 ? planet.name : planet.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Starships:</span>
                <span className="detail_content">
                  {currentEpisode?.starships.map((starship, index) => (
                    <span key={starship.id}>
                      {index === currentEpisode?.starships.length - 1 ? starship.name : starship.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Vehicles:</span>
                <span className="detail_content">
                  {currentEpisode?.vehicles.map((vehicle, index) => (
                    <span key={vehicle.id}>
                      {index === currentEpisode?.vehicles.length - 1 ? vehicle.name : vehicle.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Species:</span>
                <span className="detail_content">
                  {currentEpisode?.species.map((species, index) => (
                    <span key={species.id}>
                      {index === currentEpisode?.species.length - 1 ? species.name : species.name + ', '}{' '}
                    </span>
                  ))}
                </span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Created:</span>
                <span className="detail_content">{currentEpisode?.created.toString()}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Created:</span>
                <span className="detail_content">{currentEpisode?.edited.toString()}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic"></span>
                <span className="detail_content">{currentEpisode?.opening_crawl}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
