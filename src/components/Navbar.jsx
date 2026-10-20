import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="bg-[#aa7444] text-white shadow-xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold">Cartão de entrada</span>
                    </div>

                    <div className="hidden md:flex space-x-2 items-center">
                        <Link to="/" className="flex items-center gap-2 px-3 py-2 font-medium hover:text-[#46220f]">Página principal</Link>
                        <Link to="/produtos" className="flex items-center gap-2 px-3 py-2 font-medium hover:text-[#46220f]">Cardápio da Cafeteria</Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default NavBar