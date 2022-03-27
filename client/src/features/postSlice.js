import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action) => {
            return initialState;
        },
    }
});

export const { fetchPosts } = postSlice.actions

export default postSlice.reducer;