import * as React from "react"
import { Parallax } from "@react-spring/parallax"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import Hero from "../components/hero"
import Faq from "../components/faq"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"

const Cara = ({data}) => (
  <Layout>
    <Parallax pages={7}>
      <Hero data={data.prismicSiteHeader.data} offset={0} factor={1} />
      <Faq data={data.allPrismicFaqSection.nodes} offset={1} factor={5} />
      {/* <Projects offset={7} factor={2} /> */}
      {/* <About offset={16} factor={1} /> */}
      {/* <Contact offset={17} factor={1} /> */}
    </Parallax>
  </Layout>
)

export const query = graphql`
  query Hero{
    prismicSiteHeader {
      data {
        headline {
          text
          html
        }
        event_date {
          text
          html
        }
        location {
          text
        }
        ride_board_link {
          url
        }
        facebook_event_link {
          url
        }
        tickets_link {
          url
        }
        general_updates {
          html
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

export default Cara
