import { useParams } from "react-router-dom";

import Layout, {LayoutsList} from "../components/layouts";

export default function LayoutsRoute() {
  const params = useParams();
  return (
    <div style={{ height: '100%', border: '1px solid #ccc', display: 'flex', flexDirection: 'row', gap: 20 }}>
      <LayoutsList/>
      <Layout layoutId={"default"} {...params}/>
    </div>
  )
}
