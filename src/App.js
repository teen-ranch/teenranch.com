import React from 'react'
import { Root, Routes } from 'react-static'
//
import { Router } from 'components/Router'
// import Dynamic from 'containers/Dynamic'

// import { useAnalytics } from 'hooks/analytics'

import 'styles/app.scss'
import Loader from 'components/Loader'
import Header from 'components/Header'
import TueriProvider from 'components/Tueri'
import CovidBanner from 'components/CovidBanner'
import Container from 'components/Container'

// Any routes that start with 'dynamic' will be treated as non-static routes
// addPrefetchExcludes(['dynamic'])

function App() {

  return (
    <Root>
      <noscript>Please enable JavaScript to view this page.</noscript>
      <TueriProvider replacements={[['https://teenranch.nyc3.digitaloceanspaces.com/website/assets/', 'https://cdn.tueri.io/68719476739/assets/']]}>
        {/* <CovidBanner /> */}
        <Header />
        <React.Suspense fallback={<Container type='body' constrain={ false } style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}><Loader /></Container>}>
          <Router>
            {/* <Dynamic path="dynamic" /> */}
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </TueriProvider>
    </Root>
  )
}

// function Analytics() {
//   useAnalytics()
//   return null
// }

export default App