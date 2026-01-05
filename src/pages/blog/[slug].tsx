import NavBar from "@/components/others/NavBar";
import Footer from '@/components/others/Footer';
import { fetchArticleDataBySlug } from '@/Redux/slices/Blogs/ArticlePage/ArticalSlice';
import { wrapper } from '@/Redux/store';
import { GetServerSideProps } from 'next';
import ArticleBody from '../../components/Blogs/ArticleBody/index'
import React from 'react'
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/rootReducer';
import { fetch_blog_categories, fetch_blogs, fetch_recent_blogs } from '@/Redux/slices/Blogs/HomePage/blogs_category_listing_slice';

const Article = () => {
  const { singleArticle } = useSelector((state: RootState) => state.article);

  return (
    <React.Fragment>
      <Head>
        <title>{singleArticle?.meta_title || singleArticle?.title}</title>
        <meta name="description" content={singleArticle?.meta_description} />
        <meta name="keywords" content={singleArticle?.meta_key} />
        <meta name="robots" content={singleArticle?.meta_robots} />
        <meta property="og:title" content={singleArticle?.meta_title || singleArticle?.title} />
        <meta property="og:description" content={singleArticle?.meta_description} />
        {/* <meta property="og:image" content={singleArticle?.} /> */}
        <meta property="og:url" content={`https://skilldeck.net/blog/${singleArticle?.slug}`} />
      </Head>
      <NavBar />
      {/* Main Body */}
      <div className="pt-20 md:pt-24">
        <ArticleBody />
      </div>
      {/* Main Body */}
      <Footer />
    </React.Fragment>
  )
}

export default Article


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { slug } = context.params as { slug: string[] };
    const state = store.getState();

    // Destructure to access existing state data
    const { categories: blogCategories, blogsByCategory } = state.blogs_and_categories;

    // Fetch blog categories if not loaded
    if (!blogCategories?.length) {
      await store.dispatch(fetch_blog_categories());
    }

    // Fetch recent blogs
    await store.dispatch(fetch_recent_blogs());

    const fetchArticleResult = await store.dispatch(fetchArticleDataBySlug({ slug: slug }));

    const updatedState = store.getState();
    const { singleArticle, error } = updatedState.article;

    if (fetchArticleResult.meta.requestStatus === 'rejected' || error) {
      return {
        props: {},
        status: 500,
      };
    }

    if (!singleArticle) {
      return {
        notFound: true,
      };
    }

    if (singleArticle?.category) {
      const articleCategory = singleArticle.category;

      if (!blogsByCategory[articleCategory] || !blogsByCategory[articleCategory].blogs?.length) {
        await store.dispatch(fetch_blogs({
          slug: articleCategory,
          page: 1
        }));
      }
    }

    return {
      props: {},
    };
  }
);

