# 🌟react-Profiler-app

<div align="center">
<img src ="./images/totalview.gif" alt = "logo">
</div>

---

## :bell: Visit the site

➡️[Visit the Site!(Vercel)](https://react-tictactoe-app.vercel.app/)

➡️[Visit the Site!(Github pages)](https://0112shpark.github.io/react-tictactoe-app/)

## 🧐 About

Use react-profiler to compare the performance of components.  
After that, try to optimize it.

## 💡Features

-

## ⛏️Built with

- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
- <img src ="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
- <img src ="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
- <img src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">

## 🏃Getting Started

### 📌 Start at local device

- This project works on the device with `node.js` installesd.

1. Make new folder on your computer.
2. Clone this repository.

- `git clone https://github.com/0112shpark/react-profiler-app.git`

3. Install npm packages.**(on your terminal.)**

- `npm install`

4. Run development server with following command.**(on your terminal.)**

- `npm start`

## 📚Some Analysis

### 📃Comparing A.js and B.js

---

#### `A.js` has all of the elements in one component.

```javascript
import React from "react";

//all elements in one component
const A = ({ message, posts }) => {
  return (
    <div>
      <h1>A Component</h1>
      <p>{message}</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default A;
```

#### `B.js` devides elements in several componenets.

```javascript
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
```

✏️ We use `History API` of HTML 5 to change page. For example, we use follwing methods.

- `History.back()`
- `History.foward()`
- `History.go()`
