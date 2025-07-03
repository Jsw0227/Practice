import { Link } from "react-router-dom";
import { useState } from "react";

function BoardList() {
  // 임시 게시글 데이터
  const [posts] = useState([
    { id: 1, title: "첫 번째 글" },
    { id: 2, title: "두 번째 글" }
  ]);

  return (
    <div>
      <h2>게시판 목록</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/board/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/board/write">글쓰기</Link>
    </div>
  );
}

export default BoardList;
