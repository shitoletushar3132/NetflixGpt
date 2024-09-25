import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import appStore from "./store/app.store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
import SearchResult from "./components/SearchResult";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import { lazy, Suspense } from "react";
const MainContainer = lazy(() => import("./components/MainContainer"));
const WatchPage = lazy(() => import("./components/WatchPage"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <MainContainer />
          </Suspense>
        ),
      },
      {
        path: "watch",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "results",
        element: <SearchResult />,
      },
      {
        path: "demo",
        element: <Demo />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRouter} />
        {/*
        head
        body
        sidebar
          menuItems
        mainContainer
          buttonsList
          VideoContainer
            videoCard

         */}
      </div>
    </Provider>
  );
}

export default App;
