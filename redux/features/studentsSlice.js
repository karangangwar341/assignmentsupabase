import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch students from the API
export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  console.log("hi1");
  const response = await fetch('/api/students',{
    method: 'GET'
  });
  console.log(response.json);
  return response.json();
});

// Add a new student
export const addStudent = createAsyncThunk('students/addStudent', async (student) => {
  const response = await fetch('/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student),
  });
  return response.json();
});

const studentsSlice = createSlice({
  name: 'students',
  initialState: { students: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.students.push(action.payload);
      });
  },
});

export default studentsSlice.reducer;
