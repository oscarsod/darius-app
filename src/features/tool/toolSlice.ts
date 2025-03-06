import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ToolModel } from '../../models/tool/tool';
import mockTools from '../../mockCenter/mockTools.json';

const mock = true

export const fetchTool = createAsyncThunk(
    'too/fetchTool',
    async (id: string) => {
        if (mock) {
            const tool = mockTools.find((s) => s.id.toString() === id);
            if (!tool) throw new Error('tool not found in mock data');
            return tool;
        } else {

            const response = await fetch(`/api/tools/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch tool');
            }
            return await response.json() as ToolModel;
        }
    }
);

interface ToolState {
    tool: ToolModel | null;
    loading: boolean;
    error: string | null;
}

const initialState: ToolState = {
    tool: null,
    loading: false,
    error: null,
};

const toolSlice = createSlice({
    name: 'tool',
    initialState,
    reducers: {
        clearTool(state) {
            state.tool = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTool.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear previous error
            })
            .addCase(fetchTool.fulfilled, (state, action: PayloadAction<ToolModel>) => {
                state.loading = false;
                state.tool = action.payload; // Set the fetched Tool data
            })
            .addCase(fetchTool.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tool';
            });
    },
});

export const { clearTool } = toolSlice.actions;
export default toolSlice.reducer;
