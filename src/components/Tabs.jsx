import React from 'react'

const Tabs = ({buttons,children,ButtonsContainer}) => {
  return (
    <>
    <ButtonsContainer>
    {buttons}
     </ButtonsContainer>
    {children}  
    </>
   
  )
}

export default Tabs
