import React from 'react'
import { CORE_CONCEPTS } from '../data-with-examples'
import CoreConcept from './CoreConcept/CoreConcept'
const Coreconcepts = () => {
  return (
    <section id="core-concepts">
    
    <ul>
      {/* {TabResponse} */}
      {/* not required to repeat instead use map function */}
      {CORE_CONCEPTS.map((coreconcept)=><CoreConcept key={coreconcept.title} {...coreconcept}/>)}
      {/* <CoreConcept 
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      image={CORE_CONCEPTS[0].image}
      />
      <CoreConcept {...CORE_CONCEPTS[1]}/>
      <CoreConcept {...CORE_CONCEPTS[2]}/>
      <CoreConcept {...CORE_CONCEPTS[3]}/>
    */}
    </ul>
    </section>

  )
}

export default Coreconcepts
