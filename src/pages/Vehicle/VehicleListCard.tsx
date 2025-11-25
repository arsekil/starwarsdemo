import { Link } from 'react-router-dom'
import { Vehicle } from '../../interfaces/Vehicle.ts'

export const VehicleListCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="card_container">
      <div className="card_img-container">
        <img src={vehicle.image} className="card_img" width="158" height="237" alt={vehicle.vehicle_name} />
      </div>
      <div className="card_info">
        <Link to={`/vehicles/${vehicle.vehicle_name}`} className="card_headline">
          {vehicle.vehicle_name}
        </Link>
        <div className="card_details">
          <div className="detail_container">
            <span className="detail_topic">Model:</span>
            <span className="detail_content">{vehicle.model}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Manufacturer:</span>
            <span className="detail_content">{vehicle.manufacturer}</span>
          </div>
          <div className="detail_container">
            <span className="detail_topic">Cost in Credits:</span>
            <span className="detail_content">{vehicle.cost_in_credits}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
