import { Layout } from "antd";
import ValentineQuestion from "./ValentineQuestion";
import ValentinesCelebration from "./ValentinesCelebration";

const { Content } = Layout;

export default function Valentine({ showConfetti, handleShowCofetti }) {
  return (
    <Layout className="app-layout">
      <Content className="app-content">
        {showConfetti ? (
          <ValentinesCelebration />
        ) : (
          <ValentineQuestion handleShowCofetti={handleShowCofetti} />
        )}
      </Content>
    </Layout>
  );
}
