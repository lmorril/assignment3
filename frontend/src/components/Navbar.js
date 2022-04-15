const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="header">
        <h1>The 333 Music Rater</h1>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/stats">Stats</a>
        <a href="/search">Search</a>
        <a href="/login" style={{
          color: 'white',
          backgroundColor: '#ec5990',
          borderRadius: '8px'
        }}>Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
