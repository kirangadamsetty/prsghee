import HeroBanner2 from "../components/HeroBanner2";
import gheebanner2 from "../assets/banners/gheebanner2.jpg"

import ProductOverview from "../components/ProductOverview";
const About = () => {
    const gheeBanner = [
        {
         bgImage : gheebanner2
        }       
        
    ]
 return(
  <div>
    <ProductOverview/>
    <HeroBanner2 banners={ gheeBanner}/>
  </div>
 )
};

export default About;
