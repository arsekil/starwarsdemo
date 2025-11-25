import { Link } from 'react-router-dom'
import { Species } from '../../interfaces/Species.ts'

export const SpeciesListCard = ({ species }: { species: Species }) => {
  return (
    <div className="card_container">
      <div className="card_img-container">
        <img src={species.src} className="card_img" width="158" height="237" alt={species.name} />
      </div>
      <div className="card_info">
        <Link to={`/species/${species.id}`} className="card_headline">
          {species.name}
        </Link>
        <div className="card_details">
          <div className="detail_container">
            <span className="detail_topic">Classification:</span>
            <span className="detail_content">{species.classification}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Designation:</span>
            <span className="detail_content">{species.designation}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
