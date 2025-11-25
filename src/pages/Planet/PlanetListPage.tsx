/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchDataThunk } from '../../slices/fetchDataThunk.ts'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { PlanetState } from '../../slices/interfaces/PlanetState.ts'
import { Planet } from '../../interfaces/Planet.ts'
import { PlanetListCard } from './PlanetListCard.tsx'

export const PlanetListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('_page') || 1)

  const dispatch = useDispatch<ThunkDispatch<PlanetState, unknown, any>>()

  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['planets', page],
    queryFn: () => dispatch(fetchDataThunk({ entity: 'planets', _page: page, _limit: 10 })),
    placeholderData: keepPreviousData,
  })

  const totalPages = Math.ceil(10 / 10)

  const handlePageChange = (newPage: string) => {
    setSearchParams({ _page: newPage })
  }

  return (
    <React.Fragment>
      <div className="layout_inner">
        <div className="layout_headline">
          <span className="layout_title">Planets</span>
        </div>
        {data &&
          data.payload.map((planet: Planet) => {
            return <PlanetListCard key={planet.id} planet={planet} />
          })}
        <div className="layout_headline pagination">
          <Pagination currentPage={page} onPageChange={handlePageChange} totalPages={totalPages} />
        </div>
      </div>
    </React.Fragment>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
