
function Header() {
    return (
        <header>
            <div className="sub-header">
                <div className="container mx-auto">
                    <div className="sub-header-flex">
                        <img src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="" />
                        <img src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="" />
                        <img src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="" />
                        <img src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="" />
                        <img src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="" />
                        <img src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="main-header">
                <div className="container mx-auto">
                    <div className="main-header-flex">
                        <nav>
                            <img className="logo" src="https://s24.q4cdn.com/511786472/files/design/poly-logo.svg" alt="hp-logo" />
                            <ul className="menu">
                                <li>Explore</li>
                                <li>Shop</li>
                                <li>Support</li>
                            </ul>
                        </nav>
                        <div className="main-header-settings">
                            <form className="search-form">
                                <input type="text" placeholder="Search HP.com" className="search-field" />
                                <span className="search-cta">S</span>
                            </form>
                            <button>C</button>
                            <button className="primary-cta">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
