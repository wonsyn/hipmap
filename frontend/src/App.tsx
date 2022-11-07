import Layout from "./components/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import WelcomePage from "./pages/labeling/welcome";
import ProcessingPage from "./pages/labeling/processting";
import ResultPage from "./pages/labeling/result";
import FullMapPage from "./pages/hipMap/fullMap";
import HipMapResultPage from "./pages/hipMap/result";
import LoginWrapper from "./pages/login";
import { useEffect } from "react";
import SignUpWrapper from "./pages/signUp";
import MyPage from "./pages/myPage";
import MyFollowList from "./pages/myPage/component/MyFollowList";
import Shorts from "./pages/shorts";
import CommentsWrapper from "./components/comments";
import { commentsDummy } from "./components/comments/commentsDummy";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
function App() {

  const queryClient = new QueryClient()
  useEffect(()=>{
      if(!window.Kakao.isInitialized()){
        window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);  
      }
  },[])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="/labeling/welcome" element={<WelcomePage/>}></Route>
            <Route path="/labeling/processing" element={<ProcessingPage/>}></Route>
            <Route path="/labeling/result" element={<ResultPage/>}></Route>
            <Route path="/hipmap/fullmap" element={<FullMapPage/>}></Route>
            <Route path="/hipmap/result" element={<HipMapResultPage/>}></Route>
            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/signup" element={<SignUpWrapper />} />
            <Route path="/myPage">
              <Route path=":username" element={<MyPage />} />
              <Route path="myProfile" element={<MyPage />} />
              <Route path="followlist" element={<MyFollowList />} />
            </Route>
            <Route path="/shorts" element={<Shorts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
