import { useParams, Link } from "react-router-dom";

function BoardDetail() {
  const { id } = useParams();

  // 실제로는 서버에서 id로 게시글을 조회해야 함
  return (
    <div>
      <h2>게시글 상세</h2>
      <p>게시글 번호: {id}</p>
      <Link to="/board">목록으로</Link>
    </div>
  );
}

export default BoardDetail;
