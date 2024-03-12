import { Link } from "react-router-dom";
const RouteNav = () => {
  const routes = [
    { to: 'home', name: 'Home' },
    { to: 'app', name: 'App' },
    { to: 'arithmetic-draggable', name: 'Formula Builder' },
    { to: 'kanban', name: 'Kanban' },
    { to: 'form-fun', name: 'Form Fun' },
    { to: 'shopping-lists', name: 'Shopping Lists' },
    { to: 'layouts', name: 'Layouts' },
  ]
  return (
    <nav>
      <ul style={{ margin: 0, padding: 0, display: 'flex', gap: 10, listStyleType: 'none' }}>
        {routes.map((route) => (
          <li key={route.to} style={{ border: '1px solid #ccc', padding: 5, borderRadius: 5, backgroundColor: 'white' }}>
            <Link to={route.to}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default RouteNav
