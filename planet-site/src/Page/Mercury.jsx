import { useLocation } from "react-router-dom";
import planets from "../assets/data.json";
import SharedComponent from "../components/SharedComponent";


export default function Mercury() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);


  return <SharedComponent pathname={pathname} />;
   
}
