import { useState, useEffect } from "react";
import { ConfigProvider, App as AntdApp, notification } from "antd";
import { themeToken } from "./lib/theme-token";
import { HappyProvider } from "@ant-design/happy-work-theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Valentine from "./components/Valentine";
import Confetti from "react-confetti";

import "./App.css";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    let timer;
    if (showConfetti) {
      timer = setTimeout(() => setShowConfetti(false), 10000); // Stop confetti after 10 seconds
    }
    return () => clearTimeout(timer);
  }, [showConfetti]);

  const handleShowCofetti = () => {
    setShowConfetti(true);
  };

  return (
    <ConfigProvider theme={themeToken}>
      <HappyProvider>
        <AntdApp>
          {showConfetti && (
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={500}
              gravity={0.03}
              recycle={true}
              tweenDuration={1000}
              colors={[
                "#FF69B4",
                "#DB7093",
                "#FFC0CB",
                "#FFB6C1",
                "#FF1493",
                "#FFF0F5",
              ]}
            />
          )}
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <Valentine
                    showConfetti={showConfetti}
                    handleShowCofetti={handleShowCofetti}
                  />
                }
              />
              <Route
                path="/:name"
                element={
                  <Valentine
                    showConfetti={showConfetti}
                    handleShowCofetti={handleShowCofetti}
                  />
                }
              />
            </Routes>
          </Router>
        </AntdApp>
      </HappyProvider>
    </ConfigProvider>
  );
}

export default App;
