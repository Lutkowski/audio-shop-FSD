import './styles/global.scss'
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RouterConfig} from "./routesConfig.tsx";

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {Object.values(RouterConfig).map((route) => (
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
