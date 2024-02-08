import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Devis {
    // define your record type here
}


interface State {
    record: Devis[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: State = {
    record: [],
    status: 'idle',
    error: null
};

export const AllDevis = createAsyncThunk(
    "Devis/AllDevis",
    async ( data , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {

            const response = await axios.get("http://localhost:9998/BackendCRM/devis");
            console.log(response.data)
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const DeleteDevis = createAsyncThunk(
    "Devis/DeleteDevis",
    async ( data : any , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {

            const response = await axios.delete("http://localhost:9998/BackendCRM/devis/"+data);
            console.log(response.data)
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const DetailDevis = createAsyncThunk(
    "Devis/DetailDevis",
    async (data:any , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get("http://localhost:9998/BackendCRM/devis/"+data);
            //console.log(response.data,'response.data')
            console.log(response.data)
            return response.data;


        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const ModifierDevis = createAsyncThunk(
    "Devis/ModifierDevis",
    async (data:any , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.put("http://localhost:9998/BackendCRM/devis/"+data);
            //console.log(response.data,'response.data')
            console.log(response.data)
            return response.data;


        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)


/************************ AllDevis ***********************/
export const AllDevisExport = createSlice({
    name: "AllDevis",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AllDevis.pending, (state) => {
                state.status = 'loading';
                state.error = null

            })
            .addCase(AllDevis.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.record = action.payload;
            })
            .addCase(AllDevis.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})
/************************ DeleteDevis ***********************/
export const DeleteDevisExport = createSlice({
    name: "DeleteDevis",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(DeleteDevis.pending, (state) => {
                state.status = 'loading';
                state.error = null

            })
            .addCase(DeleteDevis.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.record = action.payload;
            })
            .addCase(DeleteDevis.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})
/************************ details Devis **************************/
export const DetailDevisExport = createSlice({
    name: "DetailDevisExport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(DetailDevis.pending, (state) => {
                state.status = 'loading';
                state.error = null

            })
            .addCase(DetailDevis.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.record = action.payload;
            })
            .addCase(DetailDevis.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

/************************ modifier Devis **************************/
export const ModifierDevisExport = createSlice({
    name: "ModifierDevisExport",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ModifierDevis.pending, (state) => {
                state.status = 'loading';
                state.error = null

            })
            .addCase(ModifierDevis.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.record = action.payload;
            })
            .addCase(ModifierDevis.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})
