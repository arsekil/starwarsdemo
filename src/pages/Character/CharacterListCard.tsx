import { Link } from 'react-router-dom'
import { Character } from '../../interfaces/Character.ts'

export const CharacterListCard = ({ character }: { character: Character }) => {
  return (
    <div className="card_container">
      <div className="card_img-container">
        <img src={character.src} className="card_img" width="158" height="237" alt={character.name} />
      </div>
      <div className="card_info">
        <Link to={`/characters/${character.id}`} className="card_headline">
          {character.name}
        </Link>
        <div className="card_details">
          <div className="detail_container">
            <span className="detail_topic">Birth Year:</span>
            <span className="detail_content">{character.birth_year}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Gender:</span>
            <span className="detail_content">{character.gender}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
