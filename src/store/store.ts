import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.ts';
import toolsReducer from '../features/tools/toolsSlice.ts';
import toolReducer from '../features/tool/toolSlice.ts';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tools: toolsReducer,
        tool: toolReducer,
    },
});

// Infer types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
