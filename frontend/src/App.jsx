import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Services from './components/Services/Services'
import Doctors from './components/Doctors/Doctors'
import Footer from './components/Footer/Footer'
import Contacts from './components/Contacts/Contacts'
import BookingModal from './components/BookingModal/BookingModal'

import Reviews from './components/Reviews/Reviews'
import AdminPage from './components/Admin/AdminPage'

function App() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

    const openBookingModal = () => setIsBookingModalOpen(true)
    const closeBookingModal = () => setIsBookingModalOpen(false)

    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header onBookingClick={openBookingModal} />

                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <Hero onBookingClick={openBookingModal} />
                                <Features />
                                <Services onBookingClick={openBookingModal} />
                                <Doctors />
                                <Reviews />
                                <Contacts />
                            </div>
                        } />
                        <Route path="/admin" element={<AdminPage />} />
                    </Routes>
                </main>

                <Footer />

                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={closeBookingModal}
                />
            </div>
        </Router>
    )
}

export default App
