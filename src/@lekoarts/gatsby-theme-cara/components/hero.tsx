/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Svg from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro.mdx"

const Hero = ({ data, offset, factor = 1 }: { data: any, offset: number; factor?: number }) => (
  <div>
    <script type="ignore">
      {JSON.stringify(data)}
    </script>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="cookie" hiddenMobile width={48} stroke left="10%" top="20%" />
        <Svg icon="dancing_duo" width={48} color="icon_red" left="60%" top="70%" />
        <Svg icon="fireworks" width={12} color="icon_darkest" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="dancing_dress" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <Svg icon="tree1" width={12} stroke color="icon_brightest" left="90%" top="50%" />
        <Svg icon="sasquatch" width={16} color="icon_red" left="70%" top="90%" />
        <Svg icon="cookie" width={16} stroke color="icon_darkest" left="30%" top="65%" />
        <Svg icon="dancing_stick" width={16} stroke color="icon_pink" left="28%" top="15%" />
        <Svg icon="tree2" width={6} color="icon_darkest" left="75%" top="10%" />
        <Svg icon="dancing_ponytail" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <Svg icon="tree2" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <Svg icon="fireworks" width={6} color="icon_darkest" left="4%" top="20%" />
      <Svg icon="sasquatch" width={12} color="icon_darkest" left="50%" top="60%" />
      <Svg icon="cookie" width={8} color="icon_darkest" left="95%" top="90%" />
      <Svg icon="dancing_dress" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <Svg icon="dancing_stick" width={8} stroke color="icon_darker" left="25%" top="5%" />
      <Svg icon="tree1" width={64} color="icon_green" left="90%" top="5%" />
      <Svg icon="fireworks" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <Svg icon="tree1" width={6} color="icon_darkest" left="10%" top="10%" />
      <Svg icon="frying_pan" width={12} color="icon_darkest" left="40%" top="30%" />
      <Svg icon="unicorn" width={16} stroke color="icon_darker" left="10%" top="50%" />
      <Svg icon="unicorn" width={8} stroke color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Intro headline={data.headline.text} event_date={data.event_date.text} location={data.location.text} updates={data.general_updates.html} tickets_link={data.tickets_link} />
        <br/>
        <a href="/faq">Printable FAQ</a>
        <br/>
        <a href="/bring">What to Bring</a>
        <br/>
        {data.facebook_event_link && <a href={data.facebook_event_link?.url}>Awesome on Facebook</a>}
      </Inner>
    </Content>
  </div>
)

export default Hero
