import { Link } from 'react-router-dom'
import { Starship } from '../../interfaces/Starship.ts'

export const StarshipListCard = ({ starship }: { starship: Starship }) => {
  return (
    <div className="card_container">
      <div className="card_img-container">
        <img src={starship.src} className="card_img" width="158" height="237" alt={starship.name} />
      </div>
      <div className="card_info">
        <Link to={`/starships/${starship.id}`} className="card_headline">
          {starship.name}
        </Link>
        <div className="card_details">
          <div className="detail_container">
            <span className="detail_topic">Model:</span>
            <span className="detail_content">{starship.model}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Manufacturer:</span>
            <span className="detail_content">{starship.manufacturer}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Cost in Credits:</span>
            <span className="detail_content">{starship.cost_in_credits}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
