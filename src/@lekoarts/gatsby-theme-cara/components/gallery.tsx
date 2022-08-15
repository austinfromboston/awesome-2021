/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "../elements/divider";
import Inner from "../elements/inner";
import Content from "../elements/content";
import "../styles/extra.css";

const GalleryImage = (image: any, idx: number)  => (
  <div className="gallery-image-block">
    <div className="fun-thumb">
        <img src={image.primary.gallery_thumbnail.url} key={`thumb_${idx}`}/>
    </div>
  </div>
);
const Gallery = ({
  data,
  offset,
  factor = 1,
}: {
  data: any;
  offset: number;
  factor?: number;
}) => { 
 const { data: { gallery_title, body }} = data[0];
  return (
  <div>
    <script type="ignore">{JSON.stringify(data)}</script>
    <Divider speed={0.2} offset={offset} factor={factor}>
    <Content sx={{ variant: `texts.bigger` }} speed={0.1} offset={0} factor={0}>
      <Inner>
        <div className="gallery-block">
          {body.map(GalleryImage)}
        </div>
      </Inner>
    </Content>
    </Divider>
  </div>
)};

      // {body.map(i => <img src={i.primary.gallery_thumbnail} />)}
export default Gallery;
