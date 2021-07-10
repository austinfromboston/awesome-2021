/** @jsx jsx */
import { jsx } from "theme-ui"
import FaqCard from "./faq-card"

type FaqData = {
  faq_answer: {
    html: string,
    text: string,
  },
  faq_question: {
    text: string,
  }
};
type FaqSectionProps = {
  section_title: {
    text: string
  },
  faq_list: Array<FaqData>,
  bg: string
}

const FaqSection = ({ section_title, faq_list, bg }: FaqSectionProps) => (
  <div
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }} >
    <div>
      {section_title.text}
    </div>
    <div>
      {faq_list.map((item) => <FaqCard question={item.faq_question.text} answer={item.faq_answer.html} bg={bg} key={item.faq_question.text}/>)}
      </div>
  </div>
)

export default FaqSection
