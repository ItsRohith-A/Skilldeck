import Head from 'next/head'
import React from 'react'
import NavBar from "@/components/others/NavBar";
import Blogs from '@/components/Blogs';
import Footer from '@/components/others/Footer';
import { fetch_blog_categories, fetch_blogs, fetch_recent_blogs } from '@/Redux/slices/Blogs/HomePage/blogs_category_listing_slice';
import { wrapper } from '@/Redux/store';

const index = () => {
    return (
        <div>
            <Head>
                <title>Fully Automated Platform For Training Companies | SkillDeck</title>
                <meta name="title" content="Fully Automated Platform For Training Companies | SkillDeck" />
                <meta name="description" content="Automate your marketing, sales, operations and various other functional departments at 5X times lesser cost and Skyrocket your leads and sales. 4X times faster growth & 6X higher conversions." />
            </Head>
            <NavBar />
            <Blogs />
            <Footer />

        </div>
    )
}

export default index

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        const state = store.getState();
        // Destructure to access existing state data
        const { categories: blogCategories, blogsByCategory } = state.blogs_and_categories;
        const blogCategoriesPromise = blogCategories?.length
            ? Promise.resolve()
            : store.dispatch(fetch_blog_categories());
        const recentBlogsPromise = store.dispatch(fetch_recent_blogs());
        // Fetch blogs for the selected category if not already in state
        const selectedBlogCategory = blogCategories?.[0]?.name || 'agile';
        const blogPage = blogsByCategory[selectedBlogCategory]?.page || 1;
        const blogsPromise = blogsByCategory[selectedBlogCategory]
            ? Promise.resolve()
            : store.dispatch(fetch_blogs({ slug: selectedBlogCategory, page: blogPage }));
        // Execute all fetch operations in parallel
        await Promise.all([
            blogCategoriesPromise,
            recentBlogsPromise,
            blogsPromise,
        ]);

        return { props: {} };
    }
);