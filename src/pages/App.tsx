import React, {
} from 'react';

import {
  InputGrid
} from '../components/InputGrid';

import {
  FullPageContainer,
  BorderRadiusPreview,
  ContentContainer,
  InputLabel,
} from './style';


const App: React.FC = () => {
  return (
   <FullPageContainer>
     
     <ContentContainer>
        <InputLabel>
          Border Radius Preview
        </InputLabel>
        
        <InputGrid />

        <BorderRadiusPreview 
          id="border-radius-preview"
        />
     </ContentContainer>
     
   </FullPageContainer>
  );
}

export default App;
