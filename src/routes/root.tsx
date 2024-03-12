import {Outlet, useParams} from "react-router-dom";
import RouteNav from "../shared/RouteNav";

export default function Root() {
  const params = useParams();
  return (
    <div style={{ width: '100%', padding: 20 }}>
      <RouteNav />
      <div style={{ marginTop: 10}}>
        <Outlet {...params}/>
      </div>
    </div>
  )
}
