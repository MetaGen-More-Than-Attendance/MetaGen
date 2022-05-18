import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const postLecture = createAsyncThunk(
    'lectures/postLecture',
    async ({ instructorId, departmentId, lectureName, lectureStartDate }) => {
        return fetch(`https://meta-gen.herokuapp.com/api/lecture/save`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                instructorId,
                departmentId,
                lectureName,
                lectureStartDate
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    },
);

export const postStudentToLecture = createAsyncThunk(
    'lectures/postStudentToLecture',
    async ({ lectureId, studentIds }) => {
        return fetch(`https://meta-gen.herokuapp.com/api/lecture/addStudent?lectureId=${lectureId}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                studentIds
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    },
);

export const deleteLecture = createAsyncThunk('lectures/deleteLecture', (id) => {
    return fetch(`https://meta-gen.herokuapp.com/api/lecture/delete?lectureId=${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => data);
  });

export const fetchLectures = createAsyncThunk('lectures/fetchLecture', () => {
    return fetch('https://meta-gen.herokuapp.com/api/lecture/getAll')
      .then((response) => response.json())
      .then((data) => data);
  });

const lectureSlice = createSlice({
    name: 'lectures',
    initialState: {
        entities: [],
        status: 'idle',
    },
    reducers: {
        addLecture(state, action) {
            state.entities.push(action.payload);
        },
    },
    extraReducers: {
        [postLecture.pending](state) {
            state.status = 'loading';
        },
        [postLecture.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addLecture } = lectureSlice.actions;

export default lectureSlice.reducer;
