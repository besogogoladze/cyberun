import { Avatar, GetProps, Input, Space } from "antd";
import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [searchBlog, setSearchBlog] = useState("");

  let blog = [
    {
      name: "Manu Arora",
      avatarImage:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7draL6G2Z6DOU7bBHh8ofcMGmRM_GZ8mhQ&s",
      backgroundImage:
        "https://t4.ftcdn.net/jpg/08/58/52/45/360_F_858524531_DB1IMhhR9I0JO9lW4ZpDSzjlWFKKOMCg.jpg",
      title: "Changelog for 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Manu Arora",
      avatarImage:
        "    https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png",
      backgroundImage:
        "https://thumbs.dreamstime.com/b/top-view-map-textured-world-gold-continents-against-deep-teal-ocean-concept-environment-nature-geography-geology-science-358868944.jpg",
      title: "Understanding React Hooks",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    },
    {
      name: "Manu Arora",
      avatarImage:
        "https://img.freepik.com/free-photo/beautiful-female-model-smiling-pleased-showing-okay-zero-sign-complimenting-praising-you-standing-beige-background_1258-86850.jpg",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/514wb7Xgq0L._AC_UL600_SR600,600_.jpg",
      backgroundImage:
        "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      title: "Css Grid Layout",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Manu Arora",
      avatarImage:
        "https://img.freepik.com/free-photo/beautiful-female-model-smiling-pleased-showing-okay-zero-sign-complimenting-praising-you-standing-beige-background_1258-86850.jpg",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/514wb7Xgq0L._AC_UL600_SR600,600_.jpg",
      backgroundImage:
        "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=",
      title: "Css Grid Layout",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Manu Arora",
      avatarImage:
        "    https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Underground.svg/1200px-Underground.svg.png",
      backgroundImage:
        "https://thumbs.dreamstime.com/b/top-view-map-textured-world-gold-continents-against-deep-teal-ocean-concept-environment-nature-geography-geology-science-358868944.jpg",
      title: "Understanding React Hooks",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    },
    {
      name: "Manu Arora",
      avatarImage:
        "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7draL6G2Z6DOU7bBHh8ofcMGmRM_GZ8mhQ&s",
      backgroundImage:
        "https://t4.ftcdn.net/jpg/08/58/52/45/360_F_858524531_DB1IMhhR9I0JO9lW4ZpDSzjlWFKKOMCg.jpg",
      title: "Changelog for 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  type SearchProps = GetProps<typeof Input.Search>;
  const { Search } = Input;

  const onSearch: SearchProps["onSearch"] = (value) => {
    setSearchBlog(value.toLowerCase());
  };

  let filteredBlogs: typeof blog = [];
  blog.forEach((item) => {
    if (item.title.toLowerCase().includes(searchBlog)) {
      filteredBlogs.push(item);
    }
  });

  return (
    <>
      <div style={{ width: "100%", marginTop: "50px" }}>
        <div className="blog-container">
          <div style={{ display: "grid", width: "100%", maxWidth: "1200px" }}>
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <Search
                style={{ width: "100%", maxWidth: "200px" }}
                placeholder="Search"
                allowClear
                onSearch={onSearch}
              />
              <h2>Blogs</h2>
              <p>
                Discover insightful resources and expert advice from our
                seasoned team to elevate your knowledge.
              </p>
            </div>
          </div>
          {filteredBlogs.length > 0 ? (
            <div className="blog-list">
              {filteredBlogs.map((item, index) => (
                <div key={index} className="blog-card">
                  <div
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                    className="blog-image"
                  >
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="blog-info">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Avatar size={40} src={item.avatarImage} />
                      <p>{item.name}</p>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-blogs">No blogs found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
