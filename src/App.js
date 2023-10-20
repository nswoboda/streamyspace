import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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

function App() {
  // State for Sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="App">

        {/* Header */}
        <header className="App-header">
          <h1>Welcome to StreamySpace</h1>
          {/* Profile & Settings Dropdown */}
          <ProfileDropdown />

          {/* Notifications */}
          <NotificationCenter />

          {/* Sidebar Toggle Button */}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? 'Close Chat' : 'Open Chat'}
          </button>
        </header>

        {/* Collapsible Team Communication Sidebar */}
        {isSidebarOpen && <Sidebar />}

        {/* Main Content Area */}
        <main>
          <Routes>
            <Route path="/chat-support" element={<ChatSupport />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/client-register" element={<ClientRegisterPage />} />
            <Route path="/client-suggestions" element={<ClientSuggestionsGeneration />} />
            <Route path="/client-video-reviewer" element={<ClientVideoReviewer />} />
            <Route path="/editor-content-upload" element={<EditorContentUpload />} />
            <Route path="/editor-dashboard" element={<EditorDashboard />} />
            <Route path="/editor-bank" element={<EditorBank />} />
            <Route path="/finance-manager-dashboard" element={<FinanceManagerDashboard />} />
            <Route path="/" element={<Landing />} />
            <Route path="/manager-dashboard" element={<ManagerDashboard />} />
            <Route path="/manager-reviewer" element={<ManagerReviewer />} />
            <Route path="/manager-suite" element={<ManagerSuite />} />
            <Route path="/plans-upgrade" element={<PlansUpgrade />} />
            <Route path="/publisher-bank" element={<PublisherBank />} />
            <Route path="/publisher-calendar" element={<PublisherCalendar />} />
            <Route path="/publisher-dashboard" element={<PublisherDashboard />} />
            <Route path="/publisher-reviewer" element={<PublisherReviewer />} />
            <Route path="/publisher-social-manager" element={<PublisherSocialManager />} />
            <Route path="/support-forms" element={<SupportForms />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
}

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

export default withAuthenticator(App, { includeGreetings: true });
