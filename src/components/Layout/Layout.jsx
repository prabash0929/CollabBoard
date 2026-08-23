import Navbar from "./Navbar";

function Layout({ children, isLoggedIn }) {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

      <main className="main-content">
        {children}
      </main>
    </>
  );
}

export default Layout;