import * as React from "react"
import { graphql } from 'gatsby';
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import Header from "../@lekoarts/gatsby-theme-cara/components/faq-page/header"
import Section from "../@lekoarts/gatsby-theme-cara/components/faq-page/section"

const FaqPage = ({data}) => (
  <Layout>
    <div className="faq-page-container" style={{margin: "0 auto;", maxWidth: "1000px"}}>
      <Header data={data.prismicSiteHeader.data} />
      {data.allPrismicFaqSection.nodes.map((d, i) => <Section {...d.data} key={i}/>)}
    </div>
  </Layout>
)

export const query = graphql`
  query Faq{
    prismicSiteHeader {
      data {
        headline {
          text
          html
          raw
        }
        event_date {
          text
          html
          raw
        }
        location {
          text
        }
        ride_board_link {
          id
          url
        }
        schedule_link {
          url
        }
        meals_link {
          url
        }
        facebook_event_link {
          id
          url
        }
        tickets_link {
          id
          url
        }
      }
    }
    allPrismicFaqSection(sort: {fields: data___section_index}) {
      nodes {
        data {
          section_title {
            html
            text
          }
          faq_list {
            faq_question {
              text
            }
            faq_answer {
              text
              html
            }
          }
        }
      }
    }
  }

`

export default FaqPage
