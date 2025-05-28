
// 간단한 UI 예시 (JS + HTML 구조 기반)
// 실제로는 React + Webpack 번들링 구조
document.getElementById('root').innerHTML = `
  <h1>하모니비즈 MVP 데모</h1>
  <h2>👤 근로계약서 자동 작성</h2>
  <label>직원 이름: <input type='text' placeholder='홍길동'></label><br>
  <label>월급: <input type='text' placeholder='2,200,000원'></label><br>
  <button>근로계약서 생성</button>

  <hr>

  <h2>📢 정부지원금 추천</h2>
  <label>업종: <input type='text' placeholder='도소매업'></label><br>
  <label>매출: <input type='number' placeholder='50000000'></label><br>
  <label>직원 수: <input type='number' placeholder='5'></label><br>
  <button>추천 보기</button>

  <div id='results'></div>
`;
