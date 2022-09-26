import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Image18 from '../Images/image18.jpeg'
import Image19 from '../Images/image19.jpeg'
import Image20 from '../Images/image20.jpeg'
import Image21 from '../Images/image21.jpeg'


function Phase3() {
  return (
    <Tabs>
  <TabList>
    <Tab>Zap</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image18} className="image"></img>
    </div>
    <div class="col">
    <img src={Image19} className="image"></img>

    </div>
    
  </div>
</div> 
<br></br>
<div class="container">
  <div class="row">
    <div class="col">
    <img src={Image20} className="image"></img>

    </div>
    <div class="col">
    <img src={Image21} className="image"></img>

    </div>
    
  </div>
</div> 
    <button className='btn btn-primary' href="https://en-roads.climateinteractive.org/scenario.html?v=22.9.0&p16=-0.01&p39=250&p47=2.3&p55=3&p57=-6.2&p67=37">Simulate</button>
    </TabPanel>
   
  </TabPanels>
</Tabs>
  );
}

export default Phase3;
