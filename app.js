const postsContainer = document.getElementById("posts");
const form = document.getElementById("post-form");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(API_URL + "?_limit=5"); // limit to 5 posts
  const posts = await res.json();

  postsContainer.innerHTML = ""; // clear before showing

  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <div class="actions">
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      </div>
    `;
    postsContainer.appendChild(div);
  });
}

fetchPosts();
