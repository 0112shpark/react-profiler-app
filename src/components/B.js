import React from "react";

const Message = ({ message }) => {
  return <p>{message}</p>;
};

const ListItems = ({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
};
const List = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        return <ListItems key={post.id} post={post} />;
      })}
    </ul>
  );
};
const B = ({ message, posts }) => {
  return (
    <div>
      <h1>B component</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
};

export default B;
