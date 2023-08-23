import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Calzado Art</h3>
            <div>
                <button>Zapatos</button>
                <button>Chaquetas</button>
                <button>Bolsos</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar