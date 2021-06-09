import React, { useEffect, useState } from 'react';
import VideoList from '../basics/VideoList';
// import Header from '../Header';
// import Layout from '../Layout';
// import Footer from '../Footer';
// import WrapTitle from '../basics/WrapTitle';

// function Youtube(){
//     return(
//         <div id="wrap" className="light">
//             <Header info="none"/>
//             <Layout>
//                 <section id="youtubeCont">
//                     <div className="container">
//                         <WrapTitle text={["youtube","coding"]}/>
//                         <div className="youtube_cont">
//                             <div className="site">
//                                 <h2>웹 표준 사이트 만들기</h2>
//                                 <div className="left">
//                                     <img src="img/site01@2x.jpg" alt="이미지" />
//                                 </div>
//                                 <div className="right">
//                                     <dl>
//                                         <dt>레이아웃</dt>
//                                         <dd>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</dd>
//                                         <dt>플러그인</dt>
//                                         <dd>제이쿼리를 통하여 이미지슬라이드, 라이트 박스를 구현합니다. 스크립트가 어려울 수 있지만 간단하게 설치하여 작동시켜 봅니다.</dd>
//                                         <dt>CSS</dt>
//                                         <dd>CSS의 다양한 속성을 사용하여 사이트의 디자인 작업을 구성합니다. CSS는 통해 디자인을 어떻게 꾸미는지 알아봅니다.</dd>
//                                     </dl>
//                                 </div>
//                             </div>
//                             <div className="site">
//                                 <h2>웹 표준 사이트 만들기</h2>
//                                 <div className="left">
//                                     <img src="img/site01@2x.jpg" alt="이미지" />
//                                 </div>
//                                 <div className="right">
//                                     <dl>
//                                         <dt>레이아웃</dt>
//                                         <dd>레이아웃은 사이트를 만드는데 가장 기본적이 요소입니다. 레이아웃만 제대로 만들 수 있다면 사이트의 제작에 50%는 끝나다고 보셔도 됩니다. 그만큼 레이아웃 제작은 상당히 중요합니다.</dd>
//                                         <dt>플러그인</dt>
//                                         <dd>제이쿼리를 통하여 이미지슬라이드, 라이트 박스를 구현합니다. 스크립트가 어려울 수 있지만 간단하게 설치하여 작동시켜 봅니다.</dd>
//                                         <dt>CSS</dt>
//                                         <dd>CSS의 다양한 속성을 사용하여 사이트의 디자인 작업을 구성합니다. CSS는 통해 디자인을 어떻게 꾸미는지 알아봅니다.</dd>
//                                     </dl>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </Layout>
//             <Footer />
//         </div>
//     )
// }

function Youtube(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD5gcnx_XoCu5v43ehy3v_E5XXvfbD5tns", requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result))
            .catch(error => console.log('error', error));
    },[]);
    return <VideoList video={videos} />
}

export default Youtube;