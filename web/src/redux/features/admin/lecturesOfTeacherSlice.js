import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchLecturesOfTeacher = createAsyncThunk('lecturesOfTeacher/fetchLecturesOfTeacher', (id) => {
    return fetch(`https://meta-gen.herokuapp.com/api/lecture/getInstructorLectures?instructorId=${id}`)
        .then((response) => response.json())
        .then((data) => data);
});

const lecturesOfTeacherSlice = createSlice({
    name: 'lecturesOfTeacher',
    initialState: {
        entities: [],
        status: 'idle',
    },
    reducers: {
        addLecturesOfTeacher(state, action) {
            state.entities.push(action.payload);
        },
    },
    extraReducers: {
        [fetchLecturesOfTeacher.pending](state) {
            state.status = 'loading';
        },
        [fetchLecturesOfTeacher.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addLecturesOfTeacher } = lecturesOfTeacherSlice.actions;

export default lecturesOfTeacherSlice.reducer;
