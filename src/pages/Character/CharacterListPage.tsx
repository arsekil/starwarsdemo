/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchDataThunk } from '../../slices/fetchDataThunk.ts'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { Pagination } from '../../components/Pagination/Pagination.tsx'
import { CharacterState } from '../../slices/interfaces/CharacterState.ts'
import { Character } from '../../interfaces/Character.ts'
import { CharacterListCard } from './CharacterListCard.tsx'

export const CharacterListPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('_page') || 1)

  const dispatch = useDispatch<ThunkDispatch<CharacterState, unknown, any>>()

  const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => dispatch(fetchDataThunk({ entity: 'characters', _page: page, _limit: 5 })),
    placeholderData: keepPreviousData,
  })

  const totalPages = Math.ceil(16 / 5)

  const handlePageChange = (newPage: string) => {
    setSearchParams({ _page: newPage })
  }

  return (
    <React.Fragment>
      <div className="layout_inner">
        <div className="layout_headline">
          <span className="layout_title">Characters</span>
        </div>
        {data &&
          data.payload.map((char: Character) => {
            return <CharacterListCard key={char.id} character={char} />
          })}
        <div className="layout_headline pagination">
          <Pagination currentPage={page} onPageChange={handlePageChange} totalPages={totalPages} />
        </div>
      </div>
    </React.Fragment>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
