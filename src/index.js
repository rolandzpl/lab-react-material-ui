import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BlogService from "./services/blogService";
import GalleryService from "./services/galleryService";

ReactDOM.render(
  <React.StrictMode>
    <App
      settings={{
        galleryService: new GalleryService(100),
        blogService: new BlogService("bronekfotoblog"),
        instagramUrl: "https://www.instagram.com/bronekfoto/",
        facebookUrl: "https://www.facebook.com/bbronekfoto",
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
