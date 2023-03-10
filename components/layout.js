import NavBar from "./navBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar className="navbar"/>
      <main>{children}</main>
    </>
  );
}
