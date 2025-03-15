import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import WellnessChatbox from "../components/WellnessChatBox.jsx";
import Wellness from "../assets/Wellness.png";


const WellnessPage = () => {
    return (
        <>
        <Sidebar/>
        <Header title="Wellness Chat" pageIcon ={Wellness} />
        <WellnessChatbox />
        </>
    )
}

export default WellnessPage;