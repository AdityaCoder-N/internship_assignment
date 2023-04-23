import { createSlice } from "@reduxjs/toolkit";


// Assuming we got response from API
const res = [
    {
        programId : 'DS031221',
        programName: 'Data Scientist Program'
    },
    {
        programId : 'ECRD',
        programName: 'Web Development Program'
    },
    {
        programId : 'FSR222222',
        programName: 'Data Structures Program'
    },
    {
        programId : 'DS261121',
        programName: 'Dev-Ops Program'
    },
];

const initialState = {
    programs:[],
    // helpers
    error: null,
    loading: false,
    success: false,
}

export const programsSlice = createSlice({
    name: "UserPrograms",
    initialState,
    reducers: {
        fetchPrograms: (state) => {
            // Setting state
            state.programs = res;
            state.error=null;
            state.loading=false;
            state.success=true;
        },
    }
    
})

export const { fetchPrograms } = programsSlice.actions

export default programsSlice.reducer