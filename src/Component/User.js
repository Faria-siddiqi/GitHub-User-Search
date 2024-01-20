import React from "react";
import "../Component/Style.css";
function User({ url, avatar, userName }) {
  return (
    <section>
      <h3>Results</h3>
      <div className="user">
        <img src={avatar} alt="Image" width={50} height={50} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          {userName}
        </a>
      </div>
    </section>
  );
}

export default User;
