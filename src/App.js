import React, { useState, useEffect, useContext, createContext } from 'react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { Auth } from 'aws-amplify';

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
import Onboarding from './pages/Onboarding';
import PlansUpgrade from './pages/Plans-Upgrade';
import PublisherBank from './pages/PublisherBank';
import PublisherCalendar from './pages/PublisherCalendar';
import PublisherDashboard from './pages/PublisherDashboard';
import PublisherReviewer from './pages/PublisherReviewer';
import PublisherSocialManager from './pages/PublisherSocialManager';
import SupportForms from './pages/SupportForms';
import Support from './pages/Support';

Amplify.configure(config);

const UserGroupContext = createContext();

function UserGroupProvider({ children }) {
    const [userGroups, setUserGroups] = useState([]);

    useEffect(() => {
        async function loadUserGroups() {
            try {
                const currentUser = await Auth.currentAuthenticatedUser();
                const groups = currentUser.signInUserSession.idToken.payload["cognito:groups"];
                setUserGroups(groups || []);
            } catch (error) {
                console.error('Error fetching user groups:', error);
            }
        }
        loadUserGroups();
    }, []);

    return (
        <UserGroupContext.Provider value={userGroups}>
            {children}
        </UserGroupContext.Provider>
    );
}

function useUserGroups() {
    return useContext(UserGroupContext);
}

function GroupProtectedRoute({ group, children }) {
    const userGroups = useUserGroups();
    if (userGroups.includes(group)) {
        return children;
    }
    return <Navigate to="/client/dashboard" />;
  }

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

            {isSidebarOpen && <ChatSupport />}

            <main>
                <Routes>
                    <GroupProtectedRoute path="/onboarding" group="Admin">
                        <Onboarding />
                    </GroupProtectedRoute>
                    <GroupProtectedRoute path="/client/dashboard" group="Client">
                        <ClientDashboard />
                    </GroupProtectedRoute>
                    <GroupProtectedRoute path="/editor/dashboard" group="Editor">
                        <EditorDashboard />
                    </GroupProtectedRoute>
                    <GroupProtectedRoute path="/manager/dashboard" group="Manager">
                        <ManagerDashboard />
                    </GroupProtectedRoute>
                    <GroupProtectedRoute path="/publisher/dashboard" group="Publisher">
                        <PublisherDashboard />
                    </GroupProtectedRoute>
                    {/* ... other routes ... */}
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
            <UserGroupProvider>
                <Routes>
                    <Route path="/" element={<PublicApp />} />
                    <Route path="/*" element={<AuthenticatedApp />} />
                </Routes>
            </UserGroupProvider>
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

function Footer() {
    return <div>Footer</div>;
}

export default App;
