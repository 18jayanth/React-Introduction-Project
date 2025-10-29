import React ,{useState} from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data-with-examples'
import Section from './Section'
import Tabs from './Tabs'
const Examples = () => {
    const [TabResponse, setTabResponse] = useState()
      
      function handleSelect(selectedButton)
      {
        console.log(selectedButton)
        setTabResponse(selectedButton)
      
    }
    
      let tab_content=<p>Please select a Topic</p>;
      if (TabResponse)
      {
        tab_content=<div id="tab-content">
               <h3>{EXAMPLES[TabResponse].title}</h3> 
               <p>{EXAMPLES[TabResponse].description}</p> 
               <pre>
               <code>{EXAMPLES[TabResponse].code}</code> 
               </pre>
               </div>
      }
  return (
  
    <Section title="Examples" id="examples">
      <Tabs ButtonsContainer="menu" buttons={
        <>

        <TabButton isSelected={TabResponse==='components'} onClick={()=>handleSelect('components')}>Component</TabButton> 
             <TabButton isSelected={TabResponse==='jsx'} onClick={()=>handleSelect('jsx')}>JSX</TabButton> 
             <TabButton isSelected={TabResponse==='props'} onClick={()=>handleSelect('props')}>Props</TabButton> 
             <TabButton isSelected={TabResponse==='state'} onClick={()=>handleSelect('state')}>State</TabButton> 
             </>
            }>{tab_content}</Tabs>
            </Section>
              
  )
}

export default Examples
