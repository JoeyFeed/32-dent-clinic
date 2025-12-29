import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Services from './components/Services/Services'
import Doctors from './components/Doctors/Doctors'
import Footer from './components/Footer/Footer'

// Простой компонент заглушка
const PagePlaceholder = ({ title }) => (
    <div style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
            <h2>{title}</h2>
            <p>Эта страница находится в разработке.</p>
        </div>
    </div>
)

function App() {
    return (
        <Router>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />

                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <Hero />
                                <Features />
                                <Services />
                                <Doctors />
                            </div>
                        } />
                        <Route path="/services" element={<PagePlaceholder title="Наши Услуги" />} />
                        <Route path="/doctors" element={<PagePlaceholder title="Наши Врачи" />} />
                        <Route path="/prices" element={<PagePlaceholder title="Прайс-лист" />} />
                        <Route path="/contacts" element={<PagePlaceholder title="Контакты" />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}

export default App
