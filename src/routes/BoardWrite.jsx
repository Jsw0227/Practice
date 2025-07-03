import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BoardWrite() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제로는 서버에 저장해야 함
    alert(`"${title}" 글이 등록되었습니다.`);
    navigate("/board");
  };

  return (
    <div>
      <h2>글쓰기</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default BoardWrite;
