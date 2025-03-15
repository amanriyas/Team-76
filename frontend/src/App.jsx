import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";
import SignUpPage from "./Pages/Registration";
import LeaderboardPage from "./Pages/LeaderboardPage";
import WellnessPage from "./Pages/WellnessPage";
import StudyRoom from "./Pages/StudyRoom";
import StudyChatbox from "./Pages/StudyChatbox"; 
import Calendar from "./Pages/CalendarPage"
import Timer from "./Pages/Timer"
import Flashcardspage from "./Pages/Flashcardspage";
import DashboardPage from "./Pages/DashboardPage";
import ProfilePage from "./Pages/ProfilePage";
import Registration from "./Pages/Registration";
import ModulePage from "./components/ModulePage"
import { UserProvider } from './components/UserContext'; 
import FriendsListPage from './Pages/FriendsListPage';
import BlockListPage from './Pages/BlockListPage';

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

