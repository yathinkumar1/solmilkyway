import React from 'react'
import News from '../Components/News'
import {Carousel} from 'react-bootstrap';


const Home = () => {
  let arr=[{
    image:"https://www.canada.ca/content/canadasite/en/environment-climate-change/services/environmental-indicators/temperature-change/_jcr_content/par/mwstabbed_interface_/summary-details0/mwsadaptiveimage/image.img.png/1657658185093.png",
    heading:"Temperature change in Canada",
    desc:"Changes in climate variables such as temperature, precipitation, and humidity affect a wide range of natural processes and human activities. For example, temperature change can influence crops, forests, infrastructure, the spread of disease, the availability of water and the health of ecosystems...",
    more:"https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/temperature-change.html",
},
{
    image:"https://www.climaterealityproject.org/sites/default/files/styles/intro_title_impact_large_never_crop/public/gettyimages-1322287786.jpg.webp?itok=_t9z0PQE",
    heading:"6 INTERACTIVE TOOLS TO BETTER UNDERSTAND THE CLIMATE CRISIS",
    desc:"The climate crisis is capital B big and getting your head around all the causes, effects, and solutions can be a real challenge. Even for those who’ve spent years engaging with the issue....",
    more:"https://www.climaterealityproject.org/blog/6-interactive-tools-better-understand-climate-crisis"
},
{
    image:"https://cdn.climatechangenews.com/files/2014/11/NASA_globe_800.jpg",
    heading:"7 climate change data tools and what they tell you",
    desc:"Emissions data, temperature data, fossil fuel extraction data: the climate debate is awash with numbers.",
    more:"https://www.climatechangenews.com/2015/10/21/7-climate-change-data-tools-and-what-they-tell-you/"
},
{
    image:"https://climate.nasa.gov/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTFNQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7d914aae33b2ca4cc836fb0cec630bc49ff84f80/Aquarius_detail_320x240.jpg?disposition=attachment",
    heading:"Global Warming from 1880 to 2021",
    desc:"Video: Aquarius Salinity plays a major role in global ocean circulation and changes in salinity may impact regional and global climates. NASA's Aquarius mission is painting a global picture of our planet's salty waters...",
    more:"https://climate.nasa.gov/climate_resources/139/video-global-warming-from-1880-to-2021/"
},
{
    image:"https://t4.ftcdn.net/jpg/01/70/02/13/360_F_170021331_SFvzBOxeQcXhQpN5XaPlBfk1gKCbmwJ5.jpg",
    heading:"Past Weather in Lytton, British Columbia, Canada — June 2021",
    desc:"The Paris agreement is a treaty of 196 counties... Who promised not to increase the rise of temp by not more tha. 1.5 degree celcius... But by today it's already a rise of around 2 degree raise in temperature... So we are already out of hands... So our team is here to help ourselves by ..",
    more:"https://climate.nasa.gov/climate_resources/139/video-global-warming-from-1880-to-2021/"
},
{
    image:"https://img.freepik.com/free-vector/global-warming-with-earth-fire_1308-34322.jpg?w=2000",
    heading:"Grueling heatwave sears Pacific north-west as Portland could top 102F This article is more than 1 m",
    desc:"Portland is facing another grueling heatwave with temperatures in the normally temperate Pacific north-west city expected to climb as high as 102F on Tuesday.",
    more:"https://www.theguardian.com/us-news/2022/jul/26/pacific-north-west-heatwave-portland-oregon"
},
{
    image:"https://images.theconversation.com/files/337255/original/file-20200525-124855-1aflz3v.jpg?ixlib=rb-1.1.0&q=30&auto=format&w=600&h=261&fit=crop&dpr=2",
    heading:"Climate change: Seven technology solutions that could help solve crisis",
    desc:"Technological advances, particularly the discovery and use of fossil fuels, have contributed to climate change - but they have also allowed humanity to become aware of our impact on the planet and develop techniques to address global warming.",
    more:"https://news.sky.com/story/climate-change-seven-technology-solutions-that-could-help-solve-crisis-12056397"
},
{
    image:"https://daiaplastic.com/wp-content/uploads/2020/09/Light-Stabilization-of-Polyethylene.png",
    heading:"Light Stabilization of Polyethylene",
    desc:"The degradation of plastics during natural weathering is caused by many factors. Sunlight, moisture and rain, air pollutants, heat, mechanical stress, and even microorganisms can all affect the color and the retention of mechanical properties. However, the most detrimental factor is usually the ultraviolet (UV)...",
    more:"https://daiaplastic.com/en/light-stabilization-of-polyethylene/"
},
{
    image:"https://www.metrorailnews.in/wp-content/uploads/2021/06/Clean-Meto-Green-Metro.jpeg",
    heading:"Clean Metro, Green Metro: Regenerative Braking Technology in Metro Trains and Lifts will save electricity",
    desc:"KANPUR (Metro Rail News): Uttar Pradesh Metro Rail Corporation Ltd. (UPMRC) has always intended to provide not only a safe and convenient mode of transport to the citizens in the form of Metro Services but also the Metro Project being constructed inside the city...",
    more:"https://www.metrorailnews.in/clean-metro-green-metro-regenerative-braking-technology-in-metro-trains-and-lifts-will-save-electricity/"
}
];
  return (
    <div>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{height:"400px"}}
      src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/13439425/shutterstock_285980522.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100" style={{height:"400px"}}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2sZ8VBRWResqzVPYGPV85olBU_h8D7lEpA&usqp=CAU"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"  style={{height:"400px"}}
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMSZelp3_9MGfsHTmSVpp9YLDBgDTezCweg&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div className="d-flex flex-column bd-highlight mb-3" id='mainnews'>
                <div>
                    {
                        arr.map((newsObj,index)=><News key={index} newsObj={newsObj}></News>)
                    }
                </div>
        </div>
    </div>
  )
}

export default Home