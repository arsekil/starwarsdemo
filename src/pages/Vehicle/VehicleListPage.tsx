/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchDataThunk } from '../../slices/fetchDataThunk.ts'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { SortSelect } from '../../utils/SortSelect.tsx'
import { vehicleSorter } from '../../utils/VehicleSorter.ts'
import { sortOrder } from '../../utils/sortOrder.ts'

import { VehicleState } from '../../slices/interfaces/VehicleState.ts'
import { Vehicle } from '../../interfaces/Vehicle.ts'
import { VehicleListCard } from './VehicleListCard.tsx'

export const VehicleListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('_page') || 1)
  const [sortType, setSortType] = useState('Name')

  const dispatch = useDispatch<ThunkDispatch<VehicleState, unknown, any>>()

  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['vehicles', page],
    queryFn: () => dispatch(fetchDataThunk({ entity: 'vehicles', _page: page, _limit: 10 })),
    placeholderData: keepPreviousData,
  })

  const totalPages = Math.ceil(3 / 10)

  const handlePageChange = (newPage: string) => {
    setSearchParams({ _page: newPage })
  }

  const handleSortChange = (newSortType: string) => {
    setSortType(newSortType)
  }

  const sortedEntities = vehicleSorter(data?.payload, sortType, 'vehicles')

  return (
    <React.Fragment>
      <div className="layout_inner">
        <div className="layout_headline">
          <span className="layout_title">Vehicles</span>
          <SortSelect sortOrder={sortOrder.vehicles} onSortChange={handleSortChange} />
        </div>
        {sortedEntities &&
          sortedEntities.map((vehicle: Vehicle) => {
            return <VehicleListCard key={vehicle.vehicle_name} vehicle={vehicle} />
          })}
        <div className="layout_headline pagination">
          <Pagination currentPage={page} onPageChange={handlePageChange} totalPages={totalPages} />
        </div>
      </div>
    </React.Fragment>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
