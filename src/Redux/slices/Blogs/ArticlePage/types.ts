export interface FetchParams {
    slug: string[];
}

export interface Article {
    title: string;
    slug: string;
    readTime: string;
    interested: string;
    view: string;
    smalldesc: string;
    share: string;
    body: string;
    author: {
        name: string
    };
    category: string;
    faqs: Array<string>;
    bottom_section: Array<any>;
    internal_section: Array<any>;
    meta_key: string;
    meta_title: string;
    meta_description: string;
    meta_robots: string;
}


export interface ArticleState {
    singleArticle: Article | null;
    loading: boolean;
    error: string | null;
}
