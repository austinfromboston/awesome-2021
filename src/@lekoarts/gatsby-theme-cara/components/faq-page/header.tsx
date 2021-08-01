import { jsx } from "theme-ui"
import * as React from "react"

// THIS FILE IS NOT CURRENTLY ACTIVE
const Header = ({ data }: { data: any}) => (
  <React.Fragment>
    <h1>{data.headline.text}</h1>
    <p>{data.event_date.text}<br/>
    {data.location.text}</p>
    { data.facebook_event_link && <a href={data.facebook_event_link?.url} target="_blank">Facebook Event</a> }
    { data.tickets_link && <a href={data.tichets_link?.url} target="_blank">Register Now</a> }
    { data.tickets_link && <a href={data.tichets_link?.url} target="_blank" sx={{
      display: "block",
      padding: "2px 3px",
      border: "1px solid white",
      background: "green"
    }

    }>Register Now</a> }
  </React.Fragment>
);

export default Header;
