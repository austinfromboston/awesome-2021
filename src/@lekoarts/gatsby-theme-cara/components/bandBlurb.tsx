import * as React from "react";
import "../styles/intro.css";

export default function BandBlurb({data}){
  const { band_timing, band_blurb, band_image } = data;
  return (
      <React.Fragment>
              <div className="musical-guests">
        <script type="norel">
          {JSON.stringify(data)}
        </script>
        <h2>{band_timing.text}</h2>
        <img className="band-img" src={band_image.url}/>
        <p className="band-info">
        {band_blurb.text}
        </p>
        </div>
 </React.Fragment>
      )
}
