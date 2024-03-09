import Home from './home';
import Detail from './detail';
import asyncTest from "./asyncTest";

function initApp() {
    Home.init();
    Detail.init();
    asyncTest();
}

initApp();
