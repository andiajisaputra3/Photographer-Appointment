import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import Schedule from './pages/schedule/schedule'
import AppointmentInfo from './pages/appointment/appointment-info'
import MyAppointment from './pages/my-appointment/my-appointment'
import AppointmentForm from './pages/appointment/appointment-form'
import ProtectedRoutes from './routes/ProtectedRoutes'

function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/appointment-info' element={<AppointmentInfo />} />
        <Route path='/appointment-form/:id' element={<AppointmentForm />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
      </Route>
    </Routes>
  )
}

export default App
