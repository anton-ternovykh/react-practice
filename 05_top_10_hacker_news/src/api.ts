import ArticleModel from "./models/ArticleModel.ts";
import CommentModel from "./models/CommentModel.ts";

const getArticles = () => {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json";

    return fetch(url).then<number[]>((response) => response.json());
}

const getArticle = (id: number) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

    return fetch(url).then<ArticleModel>((response) => response.json());
}

const getComment = (id: number) => {
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

    return fetch(url).then<CommentModel>((response) => response.json());
}

export default {
    getArticles: getArticles,
    getArticle: getArticle,
    getComment: getComment
}