/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"

function FaqItem({question, answer}) {
  return (
    <React.Fragment>
      <dt id={question}><strong>{question}</strong></dt>
      <dd dangerouslySetInnerHTML={{__html: answer}} />
    </React.Fragment>
  );
}


const Section = ({section_title, faq_list}) => {
  return (
<div className="faq-section" >
  <h2>
    {section_title.text}
  </h2>
  <dl>
    {faq_list.map((item) => <FaqItem question={item.faq_question.text} answer={item.faq_answer.html} key={item.faq_question.text}/>)}
  </dl>
</div>
  )
}

export default Section;
