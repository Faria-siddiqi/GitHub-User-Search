import React, { useState } from "react";
import User from "./User";
import Form from "./Form";
import "../Component/Style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GitHubUser() {
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const API_URL = "https://api.github.com";
  async function fetchApi(query) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const onSearchHandle = (event) => {
    setSearchInput(event.target.value);
  };

  async function onSubmitHandle(e) {
    e.preventDefault();
    const query = searchInput;
    const notify = () => toast.error("Please Enter valid username");

    if (query === "") {
      return notify();
    } else {
      const results = await fetchApi(query);
      setUsers(results);
    }
  }
  return (
    <section className="Container">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="subContainer">
        <h1>GitHub User Search</h1>
        <Form
          onSubmit={onSubmitHandle}
          value={searchInput}
          onChange={onSearchHandle}
        />

        <div>
          {users.map((item) => (
            <User
              key={item.login}
              avatar={item.avatar_url}
              url={item.html_url}
              userName={item.login}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GitHubUser;
