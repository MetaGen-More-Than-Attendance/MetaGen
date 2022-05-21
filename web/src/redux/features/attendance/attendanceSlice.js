import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAbsenteeismLectureIdAndDate = createAsyncThunk('attendances/fetchLecturesOfStudent', (data) => {
    const { localDate, lectureId} = data
    return fetch(`https://meta-gen.herokuapp.com/api/absenteeism/getAbseenteismLectureIdandAbsenteeismDate?lectureId=${lectureId}&localDateString=${localDate}`)
        .then((response) => response.json())
        .then((data) => data);
});

export const fetchAllAbsenteeism = createAsyncThunk('attendances/fetchAllAbsenteeism', (data) => {
    const { semesterId, lectureId} = data
    return fetch(`https://meta-gen.herokuapp.com/api/absenteeism/getAbseenteismByLectureId?lectureId=${lectureId}&semesterId=${semesterId}`)
        .then((response) => response.json())
        .then((data) => data);
});

export const fetchStudentAbsenteeism = createAsyncThunk('attendances/fetchStudentAbsenteeism', (data) => {
    const { studentId, lectureId} = data
    return fetch(`https://meta-gen.herokuapp.com/api/absenteeism/getStudentAbseenteisms?lectureId=${lectureId}&studentId=${studentId}`)
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
        [fetchAllAbsenteeism.pending](state) {
            state.status = 'loading';
        },
        [fetchStudentAbsenteeism.pending](state) {
            state.status = 'loading';
        },
        [fetchAbsenteeismLectureIdAndDate.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
        [fetchAllAbsenteeism.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
        [fetchStudentAbsenteeism.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addAbsenteeism } = attendanceSlice.actions;

export default attendanceSlice.reducer;
