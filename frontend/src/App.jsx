import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import SignUpPage from "./pages/Registration";
import LeaderboardPage from "./pages/LeaderboardPage";
import WellnessPage from "./pages/WellnessPage";
import StudyRoom from "./pages/StudyRoom";
import StudyChatbox from "./pages/StudyChatbox";
import Calendar from "./pages/CalendarPage";
import Timer from "./pages/Timer";
import Flashcardspage from "./pages/Flashcardspage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import ModulePage from "./components/ModulePage";
import { UserProvider } from './components/UserContext';
import FriendsListPage from './pages/FriendsListPage';
import BlockListPage from './pages/BlockListPage';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
    
    <ThemeProvider> 
      <UserProvider> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/wellness" element={<WellnessPage />} />
        <Route path="/studyroom" element={<StudyRoom />} />
        <Route path="/techniques" element={<StudyChatbox />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/flashcards" element={<Flashcardspage />} />
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/modules" element={<ModulePage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/friends" element={<FriendsListPage />} />
        <Route path="/block" element={<BlockListPage />} />
        <Route path="/registration" element={<Registration />}/>
      </Routes>
          </UserProvider>
    </ThemeProvider>
    </div>

  );
}

export default App;
