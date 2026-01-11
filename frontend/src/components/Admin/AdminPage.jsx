
import { useState, useEffect } from 'react'
import { supabase } from '../../supabaseClient'
import Login from './Login'
import Dashboard from './Dashboard'

const AdminPage = () => {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setLoading(false)
        })

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    if (loading) {
        return <div style={{ padding: '4rem', textAlign: 'center' }}>Загрузка...</div>
    }

    if (!session) {
        return <Login />
    }

    return <Dashboard session={session} />
}

export default AdminPage
