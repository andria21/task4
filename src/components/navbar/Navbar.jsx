import { signOut } from "next-auth/react"
import { NavContainer, Logout } from "./navbar.module"

export default function Navbar({ name }) {
  return (
    <NavContainer>
      <h2>Hello, {name}!</h2>
      <Logout onClick={signOut}>Logout</Logout>
    </NavContainer>
  )
}
