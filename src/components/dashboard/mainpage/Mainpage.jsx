/* eslint-disable no-unused-vars */
import "./mainpage.css";
import Header from "../header/Header.jsx";
import BlogCard from "../blogCard/BlogCard.jsx";
import FollowCard from "../followCard/FollowCard.jsx";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import axios from "axios";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { LinearProgress } from "@mui/material";

const Mainpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const [mainContent, setMainContent] = useState("Latest Blogs");
  const [loading, setLoading] = useState(false);
console.log(blogs)
  async function getBlogs() {
    const response = await axios
      .get(`http://localhost:8000/blogs/all-blogs?skip=${0}`)
      .then((response) => {
        console.log(response);
        setBlogs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  async function getMyBlogs() {
  const response = await axios
    .get(`http://localhost:8000/blogs/my-blogs?skip=${0}`)
    .then((response) => {
      setMyBlogs(response.data.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
  }


  function createBlog() {
    console.log("Creating a Blog");
  }
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Header />
      <div className="main-aside">
        <aside>
          <List
            className="aside-list"
            component="nav"
            aria-label="mailbox folders">
            <ListItem
              button
              onClick={() => {
                createBlog();
              }}>
              <span>Post A Blog</span>
              <Fab className="add-icon" size="small" color="" aria-label="add">
                <AddIcon />
              </Fab>
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setMainContent("My Blogs");
                }, 1500);
                getMyBlogs();
              }}>
              <ListItemText primary="My Blogs" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setMainContent("Followers");
                }, 1500);
              }}
              divider>
              <ListItemText primary="Followers" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setMainContent("Following");
                }, 1500);
              }}>
              <ListItemText primary="Following" />
            </ListItem>
            <Divider light />
            <ListItem
              button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setMainContent("Latest Blogs");
                }, 1500);
              }}>
              <ListItemText primary="Latest Feed" />
            </ListItem>
            <Divider light />
            {loading ? (
              <LinearProgress className="loading-component" color="secondary" />
            ) : (
              ""
            )}
          </List>
        </aside>
        <main>
          <center>
            <h1>{mainContent}</h1>
            <br />
            <hr />
          </center>
          <div className="cards">
            {mainContent === "Latest Blogs" && blogs !== ""
              ? blogs.map((blog, index) => (
                  <>
                    <BlogCard
                      key={index}
                      username={blog.username}
                      userLogo={blog.username.slice(0, 2).toUpperCase()}
                      title={blog.title}
                      description={blog.description}
                    />
                  </>
                ))
              : ""}

            {mainContent === "My Blogs" && myBlogs !== ""
              ? myBlogs.map((blog, index) => (
                  <>
                    <BlogCard
                      key={index}
                      username={blog.username}
                      userLogo={blog.username.slice(0, 2).toUpperCase()}
                      title={blog.title}
                      description={blog.description}
                    />
                  </>
                ))
              : ""}

            {mainContent === "Following" ? (
              <>
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
                <FollowCard badgeInfo="Unfollow" />
              </>
            ) : (
              ""
            )}

            {mainContent === "Followers" ? (
              <>
                <FollowCard badgeInfo="Remove" />
                <FollowCard badgeInfo="Remove" />
                <FollowCard badgeInfo="Remove" />
                <FollowCard badgeInfo="Remove" />
                <FollowCard badgeInfo="Remove" />
                <FollowCard badgeInfo="Remove" />
              </>
            ) : (
              ""
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Mainpage;

