import React from "react";
import { Typography, Image } from "antd";

const { Title } = Typography;

const ValentinesCelebration = () => {
  return (
    <>
      <Title level={1} className="valentine-name">
        Yay!
      </Title>
      <Title className="valentine-question">You said yes!</Title>
      <Title level={3} className="valentine-question">
        Happy Valentines Day my love! 🥰
      </Title>
      <img className="image-enhanced" src="/valentines-day-embrace.png" />
    </>
  );
};

export default ValentinesCelebration;
