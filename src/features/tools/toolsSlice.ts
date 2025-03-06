import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToolModel } from '../../models/tool/tool';
import mockTools from '../../mockCenter/mockTools.json'

const initialState: ToolModel[] = mockTools;

const toolsSlice = createSlice({
    name: 'tools',
    initialState,
    reducers: {
        settools(state, action: PayloadAction<ToolModel[]>) {
            return action.payload;
        },
    },
});

export const { settools } = toolsSlice.actions;
export default toolsSlice.reducer;
