import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const AdmissionPage = lazy(() => import('./pages/AdmissionPage'))
const AcademicsPage = lazy(() => import('./pages/AcademicsPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div className="min-h-[60vh] w-full bg-brand-cream">Loading…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
