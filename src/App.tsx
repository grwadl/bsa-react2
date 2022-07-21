import React from 'react';
import './App.scss';
import RouterComponent from "./components/common/RouterComponent/RouterComponent";
import './components/constants.scss';
import {useCheckToken} from "./hooks/useCheckToken";
function App() {
    useCheckToken();
    return (
            <div className="App">
                <RouterComponent/>
            </div>
    );
}

export default App;
