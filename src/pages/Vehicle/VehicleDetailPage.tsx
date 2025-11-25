import React from 'react'
import { useParams, Params } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { VehicleState } from '../../slices/interfaces/VehicleState.ts'
import { Vehicle } from '../../interfaces/Vehicle.ts'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs.tsx'

export const VehicleDetailPage = () => {
  const vehicles = useSelector<VehicleState, Vehicle[]>((state) => state.vehicles.vehicles.entities)
  const { vehicleId }: Readonly<Params<string>> = useParams<{ vehicleId: string }>()
  const currentVehicle = vehicles.find((vehicle: Vehicle) => vehicle.vehicle_name === vehicleId)

  return (
    <React.Fragment>
      <div className="layout_details">
        <Breadcrumbs />
        <div className="details_container">
          <div className="details_img-container">
            <img
              src={currentVehicle?.image}
              className="details_img"
              alt={currentVehicle?.vehicle_name}
              width="281"
              height="400"
            />
          </div>
          <div className="details_info">
            <div className="card_headline detail_title">{currentVehicle?.vehicle_name}</div>
            <div className="card_details">
              <div className="detail_container">
                <span className="detail_topic">Model:</span>
                <span className="detail_content">{currentVehicle?.model}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Manufacturer:</span>
                <span className="detail_content">{currentVehicle?.manufacturer}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Cost in Credits:</span>
                <span className="detail_content">{currentVehicle?.cost_in_credits}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Length:</span>
                <span className="detail_content">{currentVehicle?.length}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Max atm. speed:</span>
                <span className="detail_content">{currentVehicle?.max_atmosphere_speed}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Crew:</span>
                <span className="detail_content">{currentVehicle?.crew}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Passangers:</span>
                <span className="detail_content">{currentVehicle?.passengers}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Cargo capacity:</span>
                <span className="detail_content">{currentVehicle?.cargo_capacity}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Consumables:</span>
                <span className="detail_content">{currentVehicle?.consumables}</span>
              </div>

              <div className="detail_container">
                <span className="detail_topic">Vehicle Class:</span>
                <span className="detail_content">{currentVehicle?.vehicle_class}</span>
              </div>
              <div className="detail_container">
                <span className="detail_topic">Pilots:</span>
                <span className="detail_content">{currentVehicle?.pilots}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
