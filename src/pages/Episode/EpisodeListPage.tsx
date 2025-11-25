import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { fetchDataThunk } from '../../slices/fetchDataThunk.ts'

import { FilmState } from '../../slices/interfaces/FilmState.ts'
import { Film } from '../../interfaces/Film.ts'
import { EpisodeListCard } from '../Episode/EpisodeListCard.tsx'

import { SortSelect } from '../../utils/SortSelect.tsx'
import { episodeSorter } from '../../utils/EpisodeSorter.ts'
import { sortOrder } from '../../utils/sortOrder.ts'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const EpisodeListPage = () => {
  const dispatch = useDispatch<ThunkDispatch<FilmState, unknown, any>>()
  const entities = useSelector<FilmState, Film[]>((state: FilmState) => state.films.films.entities)
  const [sortType, setSortType] = useState('Date')

  useEffect(() => {
    dispatch(fetchDataThunk({ entity: 'films' }))
  }, [dispatch])

  const handleSortChange = (newSortType: string) => {
    setSortType(newSortType)
  }

  const sortedEntities = episodeSorter(entities, sortType, 'films')

  return (
    <React.Fragment>
      <div className="layout_inner">
        <div className="layout_headline">
          <span className="layout_title">Episodes</span>
          <SortSelect sortOrder={sortOrder.films} onSortChange={handleSortChange} />
        </div>
        {sortedEntities &&
          sortedEntities.map((ep: Film) => {
            return <EpisodeListCard key={ep.id} episode={ep} />
          })}
      </div>
    </React.Fragment>
  )
}

/* eslint-enable @typescript-eslint/no-explicit-any */
