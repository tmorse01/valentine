import { ConfigProvider, App as AntdApp, notification } from "antd";
import { themeToken } from "./lib/theme-token";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Valentine from "./Valentine";

import "./App.css";

function App() {
  return (
    <ConfigProvider theme={themeToken}>
      <AntdApp>
        <Router>
          <Routes>
            <Route path="/" element={<Valentine />} />
            <Route path="/:name" element={<Valentine />} />
          </Routes>
        </Router>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
