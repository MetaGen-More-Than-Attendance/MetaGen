import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchStudents = createAsyncThunk('students/fetchStudents', () => {
  return fetch('https://meta-gen.herokuapp.com/api/student/get-all')
    .then((response) => response.json())
    .then((data) => data);
});

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    entities: [],
    status: 'idle',
  },
  reducers: {
    getStudents(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: {
    [fetchStudents.pending](state) {
      state.status = 'loading';
    },
    [fetchStudents.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = 'idle';
    },
  },
});

export const { getStudents } = studentSlice.actions;

export default studentSlice.reducer;
