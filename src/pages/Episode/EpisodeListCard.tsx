import { Link } from 'react-router-dom'
import { Film } from '../../interfaces/Film.ts'
import { intToRoman } from '../../utils/convertToRoman.js'

export const EpisodeListCard = ({ episode }: { episode: Film }) => {
  return (
    <div className="card_container">
      <div className="card_img-container">
        <img src={episode.src} className="card_img" width="158" height="237" alt={episode.name} />
      </div>
      <div className="card_info">
        <Link to={`/episodes/${episode.id}`} className="card_headline">
          Star Wars: Episode {intToRoman(episode.id)} - {episode.name}
        </Link>
        <div className="card_details">
          <div className="detail_container">
            <span className="detail_topic">Episode:</span>
            <span className="detail_content">{intToRoman(episode.id)}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Director:</span>
            <span className="detail_content">{episode.director}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Producer:</span>
            <span className="detail_content">{episode.producer}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Release Date:</span>
            <span className="detail_content">{episode.release_date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
