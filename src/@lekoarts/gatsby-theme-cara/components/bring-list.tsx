/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"

function ListItem({html}) {
  return (
    <React.Fragment>
      <li dangerouslySetInnerHTML={{__html: html}} />
    </React.Fragment>
  );
}


const BringList = ({list_title, list_header, list_body}) => {
  return (
<div className="bring-list" >
  <h2>
    {list_title.text}
  </h2>
  <ul>
    {list_body.map((item, i) => <ListItem {...item.list_item} key={i}/>)}
  </ul>
</div>
  )
}

export default BringList;
