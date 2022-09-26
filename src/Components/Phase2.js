import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Image17 from '../Images/image17.jpeg'
import Image16 from '../Images/image16.jpeg'
import Image14 from '../Images/image14.jpeg'


function Phase2() {
  return (
    <Tabs>
  <TabList>
    <Tab>Effects</Tab>
    <Tab>Reasons</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image17} className="image"></img>
    </div>
    <div class="col">
    <img src={Image16} className="image"></img>

    </div>
    
  </div>
</div>
    </TabPanel>
    <TabPanel>
    <div class="container">
  <div class="row">
    <div class="col">
    <img src={Image14} className="image"></img>
    </div>
    <div class="col">

    </div>
    
  </div>
</div>    </TabPanel>
    
  </TabPanels>
</Tabs>
  );
}

export default Phase2;
