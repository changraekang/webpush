import styled from "styled-components";

function Pagination({totalPost, postsPerPage}) {
  let pages = [];
  for(let i = 1; i <= Math.ceil(totalPost/postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <ul>
      <li>
        <button>{pages}</button>
      </li>
    </ul>
  )
}

export default Pagination