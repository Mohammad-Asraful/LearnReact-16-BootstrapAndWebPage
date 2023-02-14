import React, { useState } from 'react'


const MyAccordion = ({ question, answer }) => {

   const [show, setShow] = useState(false)

   return (
      <>
         <div className='main-heading'>
            <p style={{ cursor: 'pointer' }} onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</p>
            <h5>{question}</h5>
         </div>
         {
            show && <p className='answers'>{answer}</p>
         }

      </>
   )
}

export default MyAccordion