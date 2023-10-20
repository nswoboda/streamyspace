import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import ChatSupport from './pages/ChatSupport';
import Checkout from './pages/Checkout';
import ClientDashboard from './pages/ClientDashboard';
import ClientRegisterPage from './pages/ClientRegisterPage';
import ClientSuggestionsGeneration from './pages/ClientSuggestions-Generation';
import ClientVideoReviewer from './pages/ClientVideoReviewer';
import EditorContentUpload from './pages/EditorContentUpload';
import EditorDashboard from './pages/EditorDashboard';
import EditorBank from './pages/EditorBank';
import FinanceManagerDashboard from './pages/FinanceManagerDashboard';
import Landing from './pages/Landing';
import ManagerDashboard from './pages/ManagerDashboard';
import ManagerReviewer from './pages/ManagerReviewer';
import ManagerSuite from './pages/ManagerSuite';
import PlansUpgrade from './pages/Plans-Upgrade';
import PublisherBank from './pages/PublisherBank';
import PublisherCalendar from './pages/PublisherCalendar';
import PublisherDashboard from './pages/PublisherDashboard';
import PublisherReviewer from './pages/PublisherReviewer';
import PublisherSocialManager from './pages/PublisherSocialManager';
import SupportForms from './pages/SupportForms';
import Support from './pages/Support';

Amplify.configure(config);

function AuthenticatedApp() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to StreamySpace</h1>
        <ProfileDropdown />
        <NotificationCenter />
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? 'Close Chat' : 'Open Chat'}
        </button>
      </header>

      {isSidebarOpen && <Sidebar />}

      <main>
        <Routes>
          {/* All routes except the Landing route */}
          {/* ... (all your routes) ... */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function PublicApp() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicApp />} />
        <Route path="/*" element={<AuthenticatedAppWrapper />} />
      </Routes>
    </Router>
  );
}

const AuthenticatedAppWrapper = withAuthenticator(AuthenticatedApp, { includeGreetings: true });

// Placeholder components
function ProfileDropdown() {
  return <div>Profile Dropdown</div>;
}

function NotificationCenter() {
  return <div>Notifications</div>;
}

function Sidebar() {
  return <div>Sidebar</div>;
}

function Footer() {
  return <div>Footer</div>;
}

export default App;
