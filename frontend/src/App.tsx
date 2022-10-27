import Layout from "./components/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import WelcomePage from "./pages/labeling/welcome";
import ProcessingPage from "./pages/labeling/processting";
import ResultPage from "./pages/labeling/result";
import LoginWrapper from "./pages/login";
import { useEffect } from "react";
import SignUpWrapper from "./pages/signUp";
import MyPage from "./pages/myPage";
import MyFollowList from "./pages/myPage/component/MyFollowList";

function App() {
  useEffect(()=>{
      if(!window.Kakao.isInitialized()){

        console.log("taet")
        window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);  
        console.log(window.Kakao.isInitialized()); // init되면 true, 아니면 false를 반환한다
      }
  },[])
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="/welcome" element={<WelcomePage/>}></Route>
          <Route path="/processing" element={<ProcessingPage/>}></Route>
          <Route path="/result" element={<ResultPage/>}></Route>
          <Route path="/login" element={<LoginWrapper />} />
          <Route path="/signup" element={<SignUpWrapper />} />
          <Route path="/myPage">
            <Route path=":username" element={<MyPage />} />
            <Route path="myProfile" element={<MyPage />} />
            <Route path="followlist" element={<MyFollowList />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
