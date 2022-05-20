import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAbsenteeismLectureIdAndDate = createAsyncThunk('attendances/fetchLecturesOfStudent', ({ lectureId, localDate }) => {
    return fetch(`https://meta-gen.herokuapp.com/api/absenteeism/getAbseenteismLectureIdandAbsenteeismDate?lectureId=${lectureId}&localDate=${localDate}`)
        .then((response) => response.json())
        .then((data) => data);
});

const attendanceSlice = createSlice({
    name: 'attendances',
    initialState: {
        entities: [],
        status: 'idle',
    },
    reducers: {
        addAbsenteeism(state, action) {
            state.entities.push(action.payload);
        },
    },
    extraReducers: {
        [fetchAbsenteeismLectureIdAndDate.pending](state) {
            state.status = 'loading';
        },
        [fetchAbsenteeismLectureIdAndDate.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addAbsenteeism } = attendanceSlice.actions;

export default attendanceSlice.reducer;
