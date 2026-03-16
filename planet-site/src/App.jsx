import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Header from "./components/Header";
import SharedComponent from "./components/SharedComponent";

// ეს კომპონენტი იღებს სახელს URL-დან და აწვდის SharedComponent-ს
function PlanetPage() {
  const { planetName } = useParams();
  return <SharedComponent pathname={planetName} />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* საწყის გვერდზე გადამისამართება Mercury-ზე */}
        <Route path="/" element={<Navigate to="/mercury" replace />} />
        
        {/* ერთი დინამიური რეუტი ყველა პლანეტისთვის */}
        <Route path="/:planetName" element={<PlanetPage />} />

        {/* არასწორ მისამართზე გადამისამართება */}
        <Route path="*" element={<Navigate to="/mercury" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
