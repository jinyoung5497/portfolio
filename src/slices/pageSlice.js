import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    pvpToggle: false,
  },
}

export const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    pvpToggle: (state) => {
      state.value.pvpToggle = !state.value.pvpToggle
    },
  },
})

export const { pvpToggle } = pageSlice.actions
export default pageSlice.reducer
