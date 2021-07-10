/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react";

type FaqCardProps = {
  question: string
  answer: string
  bg: string
}

const FaqCard = ({ question, answer, bg }: FaqCardProps) => {
  const [showAnswer, setShowAnswer] = React.useState(false);
  const toggleShowAnswer = (e: any) => {
    setShowAnswer(!showAnswer);
  }
  return (
  <div sx={{borderBottom: "1px solid white", marginBottom: "10px", paddingBottom: "10px"}}>
    <a
      onClick={toggleShowAnswer}
      href="#"
      sx={{
        pt: 4,
        color: "white",
        fontSize: [3, 4],
        fontWeight: `medium`,
        lineHeight: 1,
      }}
    >
      {question}
    </a>
    <div dangerouslySetInnerHTML={{ __html: answer }}
    className="faq-answer"
    style={{display: showAnswer ? "block" : "none"}}
    sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}/>
  </div>
  )
};

export default FaqCard
