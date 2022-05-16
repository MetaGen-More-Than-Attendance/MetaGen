import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const postSemester = createAsyncThunk(
    'semesters/postSemester',
    async ({ semesterName, startDate, endDate }) => {  
        return fetch(`https://meta-gen.herokuapp.com/api/semester/save`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                semesterName,
                startDate,
                endDate
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    },
);

const semesterSlice = createSlice({
    name: 'semesters',
    initialState: {
        entities: [],
        status: 'idle',
    },
    reducers: {
        addSemester(state, action) {
            state.entities.push(action.payload);
        },
    },
    extraReducers: {
        [postSemester.pending](state) {
            state.status = 'loading';
        },
        [postSemester.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addSemester } = semesterSlice.actions;

export default semesterSlice.reducer;
