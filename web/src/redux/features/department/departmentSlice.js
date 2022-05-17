import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const fetchDepartments = createAsyncThunk('departments/fetchDepartments', () => {
//     return fetch('https://meta-gen.herokuapp.com/api/department/getAll')
//       .then((response) => response.json())
//       .then((data) => data);
//   });

export const postDepartment = createAsyncThunk(
    'departments/postDepartment',
    async ({ departmentName }) => {  
        return fetch(`https://meta-gen.herokuapp.com/api/department/save`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                departmentName
            }),
        })
            .then((response) => response.json())
            .then((data) => data);
    },
);

export const deleteDepartment = createAsyncThunk('students/deleteDepartment', (id) => {
    return fetch(`https://meta-gen.herokuapp.com/api/department/delete?departmentId=${id}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => data);
  });

const departmentSlice = createSlice({
    name: 'departments',
    initialState: {
        entities: [],
        status: 'idle',
    },
    reducers: {
        addDepartment(state, action) {
            state.entities.push(action.payload);
        },
    },
    extraReducers: {
        [postDepartment.pending](state) {
            state.status = 'loading';
        },
        [postDepartment.fulfilled](state, action) {
            state.entities = action.payload;
            state.status = 'idle';
        },
    },
});

export const { addDepartment } = departmentSlice.actions;

export default departmentSlice.reducer;
