import { useState, useEffect } from "react";
import { getAllBlogs } from "../../api/internal";
import "./Blog.css";
import { useNavigate } from "react-router-dom";


function Blog() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async function getAllBlogsApiCall() {
      const response = await getAllBlogs();

      if (response.status === 200) {
        setBlogs(response.data.blogs);
      }
    })();

    setBlogs([]);
  }, []);
  return (
    // <div className={styles.blogsWrapper}>
    //   {blogs.map((blog) => (
    //     <div
    //       id={blog._id}
    //       className={styles.blog}
    //       onClick={() => navigate(`/blog/${blog._id}`)}
    //     >
    //       <h1>{blog.title}</h1>
    //       <img src={blog.photo} />
    //       <p>{blog.content}</p>
    //     </div>
    //   ))}
    // </div>
    <>
    {/* <SearchBar/> */}
    <div className="row-container">
      {blogs.map((blog) => (
        <div
          className="website_container"
          id={blog._id}
          onClick={() => navigate(`/blog/${blog._id}`)}
        >
          <img src={blog.photo} alt="Road Trippers" id="website_image" />
          <h2 className="website_name" id="website_name" alt="Road Trippers">
            {blog.title}
          </h2>

          <p className="summary">{blog.content} </p>
          <div
            className="bookmark_learnmore"
            id="bookmark_learnmore"
            alt="Road Trippers"
          >
            <button
              className="learnmore_button"
              id="learnmore_button"
              alt="Road Trippers"
              style={{ color: "black" }}
            >
              Read More{" "}
              <svg
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-learnmore css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="OpenInNewIcon"
                id="learnmore_icon"
                alt="Road Trippers"
              >
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Blog;
