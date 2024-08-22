
function Header() {
    return (
        <header>
            <div className="sub-header">
                <div className="container">
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
                <div className="container">
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
                            <form>
                                <input type="search" placeholder="Search HP.com" />
                            </form>
                            <button>C</button>
                            <button>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
