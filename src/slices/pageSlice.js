import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    hover: true,
    projectIndex: -1,
    title: '',
    modelling: true,
    frontend: false,
  },
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    hover: (state) => {
      state.value.hover = !state.value.hover
    },
    hoverTrue: (state) => {
      state.value.hover = true
    },
    hoverFalse: (state) => {
      state.value.hover = false
    },
    projectIndex: (state, action) => {
      state.value.projectIndex = action.payload
    },
    title: (state, action) => {
      state.value.title = action.payload
    },
    modelling: (state) => {
      state.value.modelling = true
      state.value.frontend = false
    },
    frontend: (state) => {
      state.value.modelling = false
      state.value.frontend = true
    },
  },
})

export const {
  hover,
  hoverTrue,
  hoverFalse,
  projectIndex,
  title,
  modelling,
  frontend,
} = pageSlice.actions
export default pageSlice.reducer
