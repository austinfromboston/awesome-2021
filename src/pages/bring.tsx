import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout";
import Header from "../@lekoarts/gatsby-theme-cara/components/faq-page/header";
import BringList from "../@lekoarts/gatsby-theme-cara/components/bring-list";

const BringPage = ({ data }) => (
  <Layout>
    <div
      className="bring-page-container"
      style={{ margin: "0 auto", maxWidth: "1000px" }}
    >
      <Header data={data.prismicSiteHeader.data} />
      {data.allPrismicBringList.nodes.map((d, i) => (
        <BringList {...d.data} key={i} />
      ))}
    </div>
  </Layout>
);

export const query = graphql`
  query Bring {
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
    allPrismicBringList(sort: { fields: data___list_index }) {
      nodes {
        data {
          list_body {
            list_item {
              html
              text
            }
          }
          list_header {
            html
            text
          }
          list_title {
            html
            text
          }
        }
      }
    }
  }
`;

export default BringPage;
