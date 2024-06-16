import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App/App"
import MyBooks from "./MyBooks/MyBooks"

export default function Main() {
  return (
    <React.Component>
    <BrowserRouter>
      <Routes>
        

          <Route path="/app" element={<App />} />
          <Route path="/app/Books" element={<MyBooks />} />
          <Route path="*" element={<App />} />
          

      </Routes>
    </BrowserRouter>
    </React.Component>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);