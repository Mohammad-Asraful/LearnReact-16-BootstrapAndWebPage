import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Accordion from './BootstrapAccordionComponent/Accordion'
import InstallBootstrap from './InstallBootstrap'
import Card from './BootstrapCardComponent/Card.jsx'
import './index.css'

const App = () => {
  return (
    <>
      {/* install and using bootstrap */}
      <section style={{ padding: '15px 40px' }}>
        <InstallBootstrap />
      </section>

      {/* Using Bootstrap Accordion components */}
      <section style={{ display: 'grid', justifyContent: 'center' }}>
        <Accordion />
      </section>

      {/* Bootstrap Card component */}
      <section style={{ padding: '30px 40px' }}>
        <Card />
      </section>
    </>
  )
}

export default App