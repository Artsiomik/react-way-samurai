import './App.css';
import {Header} from "./Components/Component/Header";
import {Main} from "./Components/Component/Main";
import {Footer} from "./Components/Component/Footer";


export const App = () => { // App это КОМПОНЕНТА которая возвращает рзметку jsx
    return (
        <div className="wrapper">
            <Header/>
            <Main />
            <Footer/>
        </div>
    )
}





