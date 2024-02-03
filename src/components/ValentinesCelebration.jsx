import React from "react";
import { Typography, Image } from "antd";

const { Title } = Typography;

const ValentinesCelebration = () => {
  return (
    <>
      <Title level={1} className="celebration-title">
        Yay! You said yes!
      </Title>
      <Title level={2} className="celebration-message">
        Happy Valentines Day my love! 🥰
      </Title>
      <img className="image-enhanced" src="/valentines-day-embrace.png" />
    </>
  );
};

export default ValentinesCelebration;
