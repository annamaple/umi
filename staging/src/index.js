import React from 'react';
// ReactDom.render将在react1.8不支持
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const container = document.getElementById('root');
// createRoot(container!) if you use TypeScript
const root = createRoot(container);
root.render(<BrowserRouter><App tab="home"/></BrowserRouter>);