import { useLocation } from "react-router-dom";
import SharedComponent from "../components/SharedComponent";

export default function Uranus() {
  const location = useLocation();
  const pathname = location.pathname.slice(1);

  return <SharedComponent pathname={pathname} />;
}