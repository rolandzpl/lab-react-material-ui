export default class BlogService {
  constructor(blogId) {
    this.blogId = blogId;
  }

  getBlogId() {
    return this.blogId;
  }

  getBlogTitle() {
    return "Bronek Foto Blog";
  }

  getArticles() {
    return [
      {
        id: 1,
        dateCreated: "2021-10-26",
        title: "Here's my first article ever",
        shortcut:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis id libero tristique consequat. Phasellus volutpat sem leo, sit amet semper sem mollis id. Lorem. ",
      },
      {
        id: 2,
        dateCreated: "2021-10-26",
        title: "Here's my second article",
        shortcut:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis id libero tristique consequat. Phasellus volutpat sem leo, sit amet semper sem mollis id. Lorem. ",
      },
      {
        id: 3,
        dateCreated: "2021-10-26",
        title: "Here's my yet another article...",
        shortcut:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis id libero tristique consequat. Phasellus volutpat sem leo, sit amet semper sem mollis id. Lorem. ",
      },
    ];
  }
}
