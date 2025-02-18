import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favorite food from the below menu</h2>
        <p>
          Tomato is a new-age consumer-first organization offering an
          easy-to-use convenience platform, accessible through a unified app.
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
