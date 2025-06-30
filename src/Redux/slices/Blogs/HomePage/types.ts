export interface BlogCategory {
    name: string;
    id: string;
}

export interface Blogs {
    _id: string;
    title: string;
    slug: string;
    view: string;
    smalldesc: string;
    author: { name: string, photo: string }
    thumbnail: string;
    createdAt: string;
}


export interface CategoryCourses {
    blogs: Blogs[];
    page: number;
    hasMore: boolean;
}

export interface List_include {
    categories: BlogCategory[] | null;
    blogsByCategory: { [key: string]: CategoryCourses | null };
    recentBlogs?: Blogs[],
    loading: boolean;
    error: string | null | undefined;
}
