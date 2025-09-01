import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1 class="text-3xl">
        Hello world!
      </h1>



      <BrowserRouter>

        <Routes>
          <Route path='/' element={<StepOne />} /> {/* landing */}
          <Route path="/about" element={<StepTwo />} />{/* about */}
          <Route path="/industries" element={<StepTwo />} />{/* industries */}
          <Route path="/leaderships" element={<StepTwo />} />{/* leaderships */}
          <Route path="/services" element={<StepTwo />} />{/* services */}
          <Route path="/contact" element={<StepTwo />} />{/* contact */}



          {/* services Routes */}
          <Route path='/accounting' element={<StepOne />} /> {/* accounting page */}
          <Route path='/audit_and_assurance' element={<StepOne />} /> {/* audit and assurance */}
          <Route path='/business_advisory' element={<StepOne />} /> {/* business advisory */}
          <Route path='/compliance_support' element={<StepOne />} /> {/* compliance support */}
          <Route path='/direct_indirect_tax' element={<StepOne />} /> {/* direct and indirect tax adivsory */}
          <Route path='/specialized_services' element={<StepOne />} /> {/* speciallized services */}


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App  