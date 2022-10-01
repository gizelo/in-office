import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";

export interface IPost {
    id: string,
    text: string,
}

export interface IPosts {
    value: IPost[];
}

const initialState: IPosts = {
    value: [],
};

export const postsSlice = createSlice({
    name: 'value',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<{ id: string, text: string }>) => {
            state.value.push(action.payload)
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(post => post?.id !== action.payload)
        }
    },
});

export const {addPost, deletePost} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
