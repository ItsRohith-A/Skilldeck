import { createSlice, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { List_include } from './types';
import { HYDRATE } from 'next-redux-wrapper';

export const fetch_blog_categories = createAsyncThunk('blogs/fetchCategories', async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/open-apis/blogs`);
    return response.data;
});

export const fetch_recent_blogs = createAsyncThunk('blogs/fetchRecentBlogs', async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/open-apis/blogs/recent-blogs`);
    return response.data;
});

export const fetch_blogs = createAsyncThunk(
    'blogs/fetchBlogs',
    async ({ slug, page = 1 }: { slug: string; page?: number }) => {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/open-apis/blogs/${slug}?page=${page}`
        );
        const pageSize = 8;
        return {
            slug,
            blogs: response.data,
            page,
            hasMore: response.data.length === pageSize,
        };
    }
);

const initialState: List_include = {
    categories: null,
    blogsByCategory: {},
    loading: false,
    recentBlogs: [],
    error: null,
};

const categoryBlogsSlice = createSlice({
    name: 'blogs_and_categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetch_blog_categories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetch_blog_categories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            })
            .addCase(fetch_blog_categories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            });

        builder
            .addCase(fetch_recent_blogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetch_recent_blogs.fulfilled, (state, action) => {
                state.recentBlogs = action.payload;
                state.loading = false;
            })
            .addCase(fetch_recent_blogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch categories';
            });

        builder
            .addCase(fetch_blogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetch_blogs.fulfilled, (state, action) => {
                const { slug, blogs, page, hasMore } = action.payload;

                if (page === 1 || !state.blogsByCategory[slug]) {
                    state.blogsByCategory[slug] = { blogs, page, hasMore };
                } else {
                    state.blogsByCategory[slug] = {
                        blogs: [...(state.blogsByCategory[slug]?.blogs || []), ...blogs],
                        page,
                        hasMore,
                    };
                }

                state.loading = false;
            })
            .addCase(fetch_blogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch blogs';
            });

        builder.addCase(HYDRATE, (state, action: AnyAction) => {
            return {
                ...state,
                ...action.payload.blogs_and_categories,
            };
        });
    },
});

export default categoryBlogsSlice.reducer;
