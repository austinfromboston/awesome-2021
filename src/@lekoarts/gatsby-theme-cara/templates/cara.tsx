import * as React from "react";
import { Parallax } from "@react-spring/parallax";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Faq from "../components/faq";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import Gallery from "../components/gallery";

// const Cara = ({ data }) => (
//  <Layout>
//    <Parallax pages={7}>
//      <Hero data={data.prismicSiteHeader.data} offset={0} factor={1} />
//      <Faq data={data.allPrismicFaqSection.nodes} offset={1} factor={5} />
//      {/* <Projects offset={7} factor={2} /> */}
//      {/* <About offset={16} factor={1} /> */}
//      {/* <Contact offset={17} factor={1} /> */}
//    </Parallax>
//  </Layout>
//);

// export const query = <StaticQuery query={graphql`
export default function Cara() {
  return (
    <StaticQuery
      query={graphql`
        query Hero {
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
          allPrismicGallery {
            nodes {
              data {
                gallery_title {
                  text
                }
                body {
                  ... on PrismicGalleryDataBodyGalleryImage {
                    id
                    primary {
                      gallery_image {
                        url
                      }
                      gallery_thumbnail {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          allPrismicFaqSection(sort: { fields: data___section_index }) {
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
      `}
      render={(data) => {
        return (
        <Layout>
          <Parallax pages={9}>
            <Hero data={data.prismicSiteHeader.data} offset={0} factor={1} />
            <Gallery data={data.allPrismicGallery.nodes} offset={1} factor={3} />
            <Faq data={data.allPrismicFaqSection.nodes} offset={2} factor={5} />
          </Parallax>
        </Layout>
      )}}
    />
  );
}
