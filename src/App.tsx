import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Features } from './pages/Features'
import { Team } from './pages/Team'
import { Spravka } from './pages/Spravka'
import { Faq } from './pages/Faq'
import { Legal } from './pages/Legal'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { UserAgreement } from './pages/UserAgreement'
import { PublicOffer } from './pages/PublicOffer'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="team" element={<Team />} />
            <Route path="spravka" element={<Spravka />} />
            <Route path="faq" element={<Faq />} />
            <Route path="legal" element={<Legal />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="user-agreement" element={<UserAgreement />} />
            <Route path="public-offer" element={<PublicOffer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
