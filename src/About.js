import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    //이 설정을 통해 문자열 맨앞의 ?를 생략
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>소개</h1>
      <p>소개하자</p>
      {/* http://localhost:3000/about?detail=true 입력하면 렌더링됨 */}
      {showDetail && <p>detail값이 true일 때 등장하는 글</p>}
    </div>
  );
};

export default About;
