import React, { useState } from 'react'
import questions from './api'
import './accordion.css'
import MyAccordion from './MyAccordion'

const Accordion = () => {

   const [data, setData] = useState(questions)

   return (
      <>
         <section className='main-div'>
            <h1>React Interview</h1>
            {
               data.map((curElement) => {

                  const { id } = curElement
                  return <MyAccordion key={id} {...curElement} />
               })
            }
         </section>
      </>
   )
}

export default Accordion