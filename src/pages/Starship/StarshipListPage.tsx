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

import { StarshipState } from '../../slices/interfaces/StarshipState.ts'
import { Starship } from '../../interfaces/Starship.ts'
import { StarshipListCard } from './StarshipListCard.tsx'

export const StarshipListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('_page') || 1)
  const [sortType, setSortType] = useState('Name')

  const dispatch = useDispatch<ThunkDispatch<StarshipState, unknown, any>>()

  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['starships', page],
    queryFn: () => dispatch(fetchDataThunk({ entity: 'starships', _page: page, _limit: 10 })),
    placeholderData: keepPreviousData,
  })

  const totalPages = Math.ceil(data?.payload.length / 10)

  const handlePageChange = (newPage: string) => {
    setSearchParams({ _page: newPage })
  }

  const handleSortChange = (newSortType: string) => {
    setSortType(newSortType)
  }

  const sortedEntities = vehicleSorter(data?.payload, sortType, 'starships')

  return (
    <React.Fragment>
      <div className="layout_inner">
        <div className="layout_headline">
          <span className="layout_title">Starships</span>
          <SortSelect sortOrder={sortOrder.vehicles} onSortChange={handleSortChange} />
        </div>
        {sortedEntities &&
          sortedEntities.map((starship: Starship) => {
            return <StarshipListCard key={starship.name} starship={starship} />
          })}
        <div className="layout_headline pagination">
          <Pagination currentPage={page} onPageChange={handlePageChange} totalPages={totalPages} />
        </div>
      </div>
    </React.Fragment>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
