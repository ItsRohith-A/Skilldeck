import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { HYDRATE } from 'next-redux-wrapper';
import { ArticleState, FetchParams } from './types';

const initialState: ArticleState = {
    singleArticle: null,
    loading: false,
    error: null,
};

export const fetchArticleDataBySlug = createAsyncThunk(
    'article/fetchArticleDataBySlug',
    async (params: FetchParams) => {
        const { slug } = params;
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/open-apis/blogs/article/${slug}`);
        return response.data;
    }
);

const articlePage = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDataBySlug.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArticleDataBySlug.fulfilled, (state, action) => {
                state.loading = false;
                state.singleArticle = action.payload || state.singleArticle;
            })
            .addCase(fetchArticleDataBySlug.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
        builder.addCase(HYDRATE, (state, action: AnyAction) => {
            return {
                ...state,
                ...action.payload.article,
            };
        });
    },
});

export default articlePage.reducer;
