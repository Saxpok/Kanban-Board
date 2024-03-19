import { Route, Routes } from "react-router";

import MainPage from "../mainPage/MainPage";

const MainRoute = () => {

    return (
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
        </Routes>
    )
}

export default MainRoute