import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.ts";
import {BrowserRouter, Route, Routes} from "react-router";
import {HomePage} from "./pages/HomePage.tsx";
import {Header} from "./layouts/Header.tsx";
import {CreateCityPage} from "./pages/CreateCityPage.tsx";
import {EditCityPage} from "./pages/EditCityPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={'/create/'} element={<CreateCityPage/>}/>
                        <Route path={'/:id/edit'} element={<EditCityPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
