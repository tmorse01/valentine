import { useState } from "react";
import { Button, Typography } from "antd";

import { useParams } from "react-router-dom";
const { Title } = Typography;
const comicalResponses = [
  "Really? Try again.",
  "Nope, still waiting...",
  "Oh, come on!",
  "Are you sure?",
  "Give it another shot!",
  "Are You Sure You're Sure?",
  "I'm not giving up!",
  "You do realize I'll keep asking?",
  "This Button Is Broken.",
  "Just click Yes!",
  "Click Yes to Confirm No.",
];

export default function ValentineQuestion({ handleShowCofetti }) {
  const { name } = useParams();
  const [noButtonText, setNoButtonText] = useState("No");

  const handleNoClick = () => {
    const responseIndex = Math.floor(Math.random() * comicalResponses.length);
    setNoButtonText(comicalResponses[responseIndex % comicalResponses.length]);
  };

  const handleYesClick = () => {
    handleShowCofetti();
  };

  return (
    <>
      <Title className="valentine-name" level={1}>
        {name ? `Hey ${name}` : "Hey You"}
      </Title>
      <Title className="valentine-question" level={2}>
        Will you be my Valentine?
      </Title>
      <div className="answer-buttons">
        <Button
          block
          type="primary"
          size="large"
          onClick={handleYesClick}
          style={{ marginRight: 10 }}
        >
          Yes
        </Button>
        <Button block size="large" onClick={handleNoClick}>
          {noButtonText}
        </Button>
      </div>
    </>
  );
}
