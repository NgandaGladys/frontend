import Dashboard from './pages/userDashboard';
import { useState } from 'react';
import AdminDashboard from './pages/adminDashboard';
import LoginForm from './components/form';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import HomeContent from './components/homeContent';
import ComplaintsContent from './components/complaintsContent';
import AnsweredContent from './components/answeredComponent';
import LevelContent from './components/levelContent';
import PendingContent from './components/pendingContent';
import CustomerContent from './components/customerContent';
import UserContent from './components/userContent';
import Customer from './components/customer';
import ChartsOverviewDemo from './components/chartComponent';

function App() {
 
  return (
    <Router>
      <Routes>

      
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}

        {/*Routes to user dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<HomeContent />} />
          <Route path="/dashboard/complaints" element={<ComplaintsContent />} />
          <Route path="/dashboard/answered" element={<AnsweredContent />} />
          <Route path="/dashboard/levels" element={<LevelContent />} />
          <Route path="/dashboard/pending" element={<PendingContent />} />
          <Route path="/dashboard/customer"element={<Customer/>} />
          <Route path="/logout" element={<HomePage/>} />

        </Route>
        
        <Route path="/form" element={<LoginForm />} />
        {/* <Route path="/chart" element={</>}/> */}
        <Route path="/chart" element={<ChartsOverviewDemo/>}/>
        
        {/* Routes to admin-dashboard*/}
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<HomeContent />} />
          <Route
            path="/admin-dashboard/complaints"
            element={<ComplaintsContent />}
          />

          <Route path="/admin-dashboard/users" element={<UserContent />} />
          <Route
            path="/admin-dashboard/customers"
            element={<CustomerContent />}
          />
          <Route
            path="/admin-dashboard/answered"
            element={<AnsweredContent />}
          />
          <Route path="/admin-dashboard/levels" element={<LevelContent />} />
          <Route path="/admin-dashboard/pending" element={<PendingContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
