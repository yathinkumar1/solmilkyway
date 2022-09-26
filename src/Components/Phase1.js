import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Image5 from '../Images/image5.jpeg';
import Image6 from '../Images/image6.jpeg';
import Image24 from '../Images/image24.jpeg';
import Image22 from '../Images/image22.jpeg';

function Phase1() {
  return (
    <Tabs>
  <TabList>
    <Tab>Geographical Location</Tab>
    <Tab>Temperature Stats</Tab>
    <Tab>Energy Resources</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image5} className='image'></img>
    </div>
    <div class="col">
    <p>Lytton is a village of about 250 residents in southern British Columbia, Canada, on the east side of the Fraser River and primarily the south side of the Thompson River, where it flows southwesterly into the Fraser. During heat waves, Lytton is often the hottest spot in Canada despite its location north of 50°N in latitude. In three consecutive days of June 2021, it broke the all-time record for Canada's highest temperature, ending at 49.6 °C (121.3 °F) on June 29. This is the highest temperature ever recorded north of 45°N and hotter than the all-time records for Europe and South America. The next day (June 30), a wildfire swept through the valley, destroying the majority of the town.</p>

    </div>
    
  </div>
</div>
    
      
    </TabPanel>
    <TabPanel>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image6} className='image'></img>
    </div>
    <div class="col">
    <p>The annual mean temperature in Lytton, Bc, Canada is a little cool at 9.7 degrees Celsius (49.5 degrees Fahrenheit).
Mean monthly temperatures have a variation of 23.7 °C (42.7°F) which is a below moderate range.
The mean daily temperature variation/ range is 10.1 °C (18.2 °F).
The warmest month (July) is really warm having an average temperature of 21.4 degrees Celsius (70.52 degrees Fahrenheit).
The coolest month (January) is slightly cold having a mean temperature of -2.3 degrees Celsius (27.86 degrees Fahrenheit).<b> Lytton in june 2021 recorded the country's highest ever temperature of 49.6C (121.3F)</b></p>

    </div>
    
  </div>
</div>
    </TabPanel>
    <TabPanel>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image24} className='image'></img>
    </div>
    <div class="col">
    <img src={Image22} className='image'></img>

    </div>
    
  </div>
</div>
    

    </TabPanel>
  </TabPanels>
</Tabs>
  );
}

export default Phase1;
