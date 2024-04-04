import { useLocation } from "react-router-dom";
import BuildingDetail from "../features/buildings/BuildingDetail";

function Building() {
  const location = useLocation();
  console.log("location", location.state);

  return <BuildingDetail state={location.state} />;
}

export default Building;
