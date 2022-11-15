import Layout from "./components/layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import WelcomePage from "./pages/labeling/welcome";
import ProcessingPage from "./pages/labeling/processting";
import ResultPage from "./pages/labeling/result";
import FullMapPage from "./pages/hipMap/fullmap";
import HipMapResultPage from "./pages/hipMap/result";
import LoginWrapper from "./pages/login";
import { useEffect } from "react";
import SignUpWrapper from "./pages/signUp";
import MyPage from "./pages/myPage";
import MyFollowList from "./pages/myPage/component/MyFollowList";
import Shorts from "./pages/shorts";
import Write from "./pages/write";
import KakaoRedirect from "./pages/login/component/KakaoRedirect";
import MyProfileModify from "./pages/myPage/component/MyProfileModify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookMark from "./pages/bookmark";
import { useAppDispatch, useAppSelector } from "./hoc/useStoreHooks";
import { fetchLoginRefreshThunk } from "./store/login/loginStore";
import PrivateRoute from "./components/PrivateRouter";
import NotFound from "./pages/NotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CameraPage from "./pages/labeling/camera";

function App() {
  const isAuth = useAppSelector((store) => store.userReducer.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
    }
    if (!isAuth) {
      const tokens = localStorage.getItem("token");
      if (tokens) {
        dispatch(fetchLoginRefreshThunk());
      }
    }
  }, []);

  const client = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Layout>
          <Routes>
            <Route element={<PrivateRoute authentication={true} />}>
              <Route path="/main" element={<Main />} />
              <Route path="/hipmap/fullmap" element={<FullMapPage />}></Route>
              <Route
                path="/hipmap/result"
                element={<HipMapResultPage />}
              ></Route>
              <Route path="/myPage">
                <Route path=":username" element={<MyPage />} />
                <Route path="followlist/:userid" element={<MyFollowList />} />
              </Route>
              <Route path="/myPage/bookmark" element={<BookMark />} />
              <Route path="/myProfile/:username" element={<MyPage />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/write" element={<Write />} />
              <Route path="/profileModify" element={<MyProfileModify />} />
              <Route path="/" element={<Navigate replace to="/main" />} />
            </Route>
            <Route path="/camera" element={<CameraPage />} />

            <Route path="/labeling/welcome" element={<WelcomePage />}></Route>
            <Route
              path="/labeling/processing"
              element={<ProcessingPage />}
            ></Route>
            <Route path="/labeling/result" element={<ResultPage />}></Route>

            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/signup" element={<SignUpWrapper />} />

            <Route path="/oauth/kakao" element={<KakaoRedirect />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
