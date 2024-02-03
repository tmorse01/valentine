import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const ValentinesCelebration = () => {
  return (
    <div>
      <Title level={1} className="valentine-name">
        Yay!
      </Title>
      <Title className="valentine-question">
        You said yes! Happy Valentines Day my love! 🥰
      </Title>
      {/* Add your celebration elements here */}
    </div>
  );
};

export default ValentinesCelebration;
