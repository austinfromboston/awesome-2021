import { jsx } from "theme-ui";
import * as React from "react";

// THIS FILE IS NOT CURRENTLY ACTIVE
const Header = ({ data }: { data: any }) => (
  <React.Fragment>
    <h1>{data.headline.text}</h1>
    <p>
      {data.event_date.text}
      <br />
      {data.location.text}
    </p>
    {data.facebook_event_link && (
      <a href={data.facebook_event_link?.url} target="_blank">
        Facebook Event
      </a>
    )}
    <br />
    {data.tickets_link && (
      <a href={data.tickets_link?.url} target="_blank">
        Register Now
      </a>
    )}
    <br />
  </React.Fragment>
);

export default Header;
