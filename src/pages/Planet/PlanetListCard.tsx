import { Link } from 'react-router-dom'
import { Planet } from '../../interfaces/Planet.ts'

export const PlanetListCard = ({ planet }: { planet: Planet }) => {
  return (
    <div className="card_container">
      <div className="card_img-container">
        <img src={planet.src} className="card_img" width="158" height="237" alt={planet.name} />
      </div>
      <div className="card_info">
        <Link to={`/planets/${planet.id}`} className="card_headline">
          {planet.name}
        </Link>
        <div className="card_details">
          <div className="detail_container">
            <span className="detail_topic">Climate:</span>
            <span className="detail_content">{planet.climate}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Terrain:</span>
            <span className="detail_content">{planet.terrain}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Population:</span>
            <span className="detail_content">{planet.population}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
