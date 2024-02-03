import { useState } from "react";
import {
  ConfigProvider,
  App as AntdApp,
  Button,
  Typography,
  Layout,
  notification,
} from "antd";
import { themeToken } from "./lib/theme-token";
import "./App.css";

const { Content } = Layout;
const { Title } = Typography;
const comicalResponses = [
  "Really? Try again.",
  "Nope, still waiting...",
  "Oh, come on!",
  "Are you sure?",
  "Give it another shot!",
  "Almost convinced...",
  "I'm not giving up!",
  "You do realize I'll keep asking?",
  "Yes is the right answer...",
  "Just click Yes!",
  "No means Yes, right?",
];

function App() {
  const [api, contextHolder] = notification.useNotification();

  const [noButtonText, setNoButtonText] = useState("No");

  const handleNoClick = () => {
    const responseIndex = Math.floor(Math.random() * comicalResponses.length);
    setNoButtonText(comicalResponses[responseIndex % comicalResponses.length]);
  };

  const handleYesClick = () => {
    api.success({
      message: `Yay!`,
      description: "You made the right choice! Happy Valentine's Day!",
    });
  };

  return (
    <ConfigProvider theme={themeToken}>
      <AntdApp>
        {contextHolder}
        <Layout className="app-layout">
          <Content className="app-content">
            <Title className="valentine-name" level={1}>
              Becca
            </Title>
            <Title className="valentine-question" level={2}>
              Will you be my Valentine?
            </Title>
            <div>
              <Button
                type="primary"
                size="large"
                onClick={handleYesClick}
                style={{ marginRight: 10 }}
              >
                Yes
              </Button>
              <Button size="large" onClick={handleNoClick}>
                {noButtonText}
              </Button>
            </div>
          </Content>
        </Layout>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
