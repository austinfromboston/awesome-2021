import * as React from "react";
import "../styles/intro.css";

export default function Intro({
  headline,
  event_date,
  tickets_link,
  location,
  updates,
}) {
  return (
    <React.Fragment>
      <h2 className="h2-up">{headline}</h2>
      <h4 className="h4-up">{event_date}</h4>
      <h4>{location}</h4>
      <p dangerouslySetInnerHTML={{ __html: updates }}></p>
      <p>
        {tickets_link && tickets_link.id && (
          <a
            sx={{
              variant: `buttons.primary`,
              backgroundColor: `primary`,
              display: `inline-block`,
            }}
            href={tickets_link.url}
            className="register-button"
            target="_blank"
          >
            Register Now
          </a>
        )}
      </p>
    </React.Fragment>
  );
}
