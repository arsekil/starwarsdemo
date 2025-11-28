import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchDataThunk = createAsyncThunk(
  'entities/fetchData',
  async ({ entity, id, _page, _limit }: { entity: string; id?: number | null; _page?: number; _limit?: number }) => {
    try {
      const url =
        id != null
          ? `https://starwarsdemobe.onrender.com/${encodeURIComponent(entity)}/${id}`
          : `https://starwarsdemobe.onrender.com/${encodeURIComponent(entity)}`
      const response =
        _page != null && _limit != null ? await axios.get(url, { params: { _page, _limit } }) : await axios.get(url)
      return response.data
    } catch (error) {
      return error
    }
  }
)
