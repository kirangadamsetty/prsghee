import HeroBanner from "../components/HeroBanner.jsx"
import BannerBottom from "../components/BannerBottom.jsx"
import ProductOverview from "../components/ProductOverview.jsx"
import ProductsSection from "../components/ProductsSection.jsx"
import buffalo from "../assets/banners/buffalo-banner.jpg";
import cow from "../assets/banners/cow-banner.jpg";
// import gheebanner1 from "../assets/banners/gheebanner1.jpg"
import gheebanner2 from "../assets/banners/gheebanner2.jpg"
import StatsCounter from "../components/StatsCounter.jsx"
import HeroBanner2 from "../components/HeroBanner2.jsx"
const banners = [
  {
    heading: "Buffalo Ghee rich, Creamy & Wholesome",
    description: "Thicker, creamier, and full of flavor ideal for sweets & special dishes.",
    buttonText: "Learn More",
    bgImage: buffalo,
    
  },
  {
    heading: "Pure Cow Ghee the Taste of Tradition",
    description: "Light, aromatic, and easy to digest, perfect for everyday cooking.",
    buttonText: "Get Started",
    bgImage: cow,
  },
];

const gheeBanner = [
    {
     bgImage : gheebanner2
    },
    // {
    //  bgImage : gheebanner1
    // }
    
]
function Home(){
    
  return(
    <div>
        <HeroBanner banners  = {banners}/>
        <BannerBottom/>
                <StatsCounter/>

        {/* <ProductOverview/> */}
        
        <ProductsSection/>
        <HeroBanner2 banners={ gheeBanner}/>
        
    </div>
  )
}
export default Home



