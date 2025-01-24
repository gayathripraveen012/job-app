import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation() 
  const hideNavbarRoutes = ["/admin-dashboard", "/manage-jobs", "/view-user-applications","/user-dashboard","/browse-jobs","/applied-jobs"]
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname)
  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {children}
    </>
  )
}


function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/browse-jobs" element={<BrowseJobs />} />
      <Route path="/applied-jobs" element={<AppliedJobs />} />
      <Route path="/manage-jobs" element={<ManageJobs />} />
      <Route path="/view-user-applications" element={<ViewUserApplications />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/update-delete-job" element={<UpdateAndDeleteJob />} />
      <Route path="/apply-job" element={<ApplyJob/>} />
    </Routes>
  </Layout>
  )
}

export default App
