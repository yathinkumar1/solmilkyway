import * as React from 'react';
import Image28 from '../Images/image28.jpeg'
import Image29 from '../Images/image29.jpeg'
import Image30 from '../Images/image30.jpeg'
import Image31 from '../Images/image31.jpeg'
import Image32 from '../Images/image32.jpeg'
import Image33 from '../Images/image33.jpeg'
import './Phase4.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

function Phase4() {
  return (
    <Tabs>
  <TabList>
    <Tab>Sol-One</Tab>
    <Tab>Sol-Two</Tab>
    <Tab>Sol-Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <h1 className='solhead'>Prior Alerting System</h1>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image29} className="image"></img>
    </div>
    <div class="col">
    <img src={Image28} className='image'></img>
    </div>
    
  </div>
</div>   
<br></br>
     
      <p>Our approach is to use the drone technology for detecting the threshold temperatures of the areas that generally have high temperatures or the areas which are hit by heat domes. The Drones use AI and sensors inorder to sound the alarms and intimate nearest fire stations once the temperature reaches the threshold limit . This sensors can help in accumulating the fire engines in time</p>
    <p>Even the Drones can be made efficient by adding the cams to detect the fire in the forests and can also implement the water spraying system by carrying some amount of water that doesn't deviate it from flying</p>
    </TabPanel>
    <TabPanel>
    <h1 className='solhead'>Footstep power generation</h1>
    <br></br>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image30} className="image"></img>
    </div>
    <div class="col">
    <img src={Image31} className='image'></img>
    </div>
    
  </div>
</div>       
<p>The footstep power generation technique through piezoelectric sensors produces electrical force by changing mechanical energy of the development of individuals on the floor to electrical energy</p>
</TabPanel>
    <TabPanel>
    <h1 className='solhead'>Reducing Methane Emissions</h1>
    <br></br>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image32} className="image"></img>
    </div>
    <div class="col">
    <img src={Image33} className='image'></img>
    </div>
  </div>
</div>       
<p>The stomachs of cattle, fermentation in rice fields, fracking for natural gas, coal mines, festering bogs, burning forests — they all produce methane, the second most important greenhouse gas, after carbon dioxide. But how much? And how can we best cut these emissions? And is fracking frying the planet, or are bovine emissions more to blame?</p>
<p>Livestock production—primarily cows—produce 14.5 percent of global greenhouse gas emissions. The majority of that is in the form of methane, a potent greenhouse gas that is a natural byproduct of how some livestock process food. But as Christopher Booker reports, scientists are hoping that small tweaks in what cows eat can dramatically reduce a big source of climate emissions.</p>
    </TabPanel>
    
  </TabPanels>
</Tabs>
  );
}

export default Phase4;
