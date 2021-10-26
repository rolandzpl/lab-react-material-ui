import { Typography } from "@mui/material";
import React from "react";

const BlogArticle = ({ article }) => {
  return (
    <div>
      <Typography variant="caption">{article.dateCreated}</Typography>
      <Typography variant="h5">{article.title}</Typography>
      <Typography variant="body1">{article.shortcut}</Typography>
    </div>
  );
};

const Blog = ({ blogService }) => {
  return (
    <div>
      <div>Blog ID: {blogService.getBlogId()}</div>
      <h1>{blogService.getBlogTitle()}</h1>
      {blogService.getArticles().map((a) => (
        <BlogArticle article={a} />
      ))}
    </div>
  );
};

export default function HomePage({ blogService }) {
  return <Blog blogService={blogService} />;
}
