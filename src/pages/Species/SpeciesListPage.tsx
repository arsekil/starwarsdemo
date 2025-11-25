/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchDataThunk } from '../../slices/fetchDataThunk.ts'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { SpeciesState } from '../../slices/interfaces/SpeciesState.ts'
import { Species } from '../../interfaces/Species.ts'
import { SpeciesListCard } from './SpeciesListCard.tsx'

export const SpeciesListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('_page') || 1)

  const dispatch = useDispatch<ThunkDispatch<SpeciesState, unknown, any>>()

  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['species', page],
    queryFn: () => dispatch(fetchDataThunk({ entity: 'species', _page: page, _limit: 10 })),
    placeholderData: keepPreviousData,
  })

  const totalPages = Math.ceil(15 / 10)

  const handlePageChange = (newPage: string) => {
    setSearchParams({ _page: newPage })
  }

  return (
    <React.Fragment>
      <div className="layout_inner">
        <div className="layout_headline">
          <span className="layout_title">Species</span>
        </div>
        {data &&
          data.payload.map((species: Species) => {
            return <SpeciesListCard key={species.id} species={species} />
          })}
        <div className="layout_headline pagination">
          <Pagination currentPage={page} onPageChange={handlePageChange} totalPages={totalPages} />
        </div>
      </div>
    </React.Fragment>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
