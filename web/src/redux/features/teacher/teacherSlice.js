import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', () => {
  return fetch('https://meta-gen.herokuapp.com/api/instructor/get-all')
    .then((response) => response.json())
    .then((data) => data);
});

const teacherSlice = createSlice({
  name: 'teachers',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    getTeachers(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchTeachers.pending](state) {
      state.status = 'loading';
    },
    [fetchTeachers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
  },
});

export const { getTeachers } = teacherSlice.actions;

export default teacherSlice.reducer;
