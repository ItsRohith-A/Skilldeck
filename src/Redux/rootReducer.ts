import { combineReducers } from '@reduxjs/toolkit';
import articlePage from './slices/Blogs/ArticlePage/ArticalSlice';
import categoryBlogsSlice from './slices/Blogs/HomePage/blogs_category_listing_slice';


const rootReducer = combineReducers({
    article: articlePage,
    blogs_and_categories: categoryBlogsSlice,

})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;