import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import LoadSpinner from './components/load-spinner';

ReactDom.render(<App />, document.getElementById('app'));
ReactDom.render(<LoadSpinner />, document.getElementById('loader-container'))