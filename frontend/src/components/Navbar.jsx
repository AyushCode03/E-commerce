// import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useUserStore } from "../stores/useUserStore";
// import { useCartStore } from "../stores/useCartStore";

// const Navbar = () => {
// 	const { user, logout } = useUserStore();
// 	const isAdmin = user?.role === "admin";
// 	const { cart } = useCartStore();

// 	return (
// 		<header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-blue-800'>
// 			<div className='container mx-auto px-4 py-3'>
// 				<div className='flex flex-wrap justify-between items-center'>
// 					<Link to='/' className='text-2xl font-bold text-blue-400 items-center space-x-2 flex'>
// 						E-Commerce
// 					</Link>

// 					<nav className='flex flex-wrap items-center gap-4'>
// 						<Link
// 							to={"/"}
// 							className='text-gray-300 hover:text-blue-400 transition duration-300
// 					 ease-in-out'
// 						>
// 							Home
// 						</Link>
// 						{user && (
// 							<Link
// 								to={"/cart"}
// 								className='relative group text-gray-300 hover:text-blue-400 transition duration-300 
// 							ease-in-out'
// 							>
// 								<ShoppingCart className='inline-block mr-1 group-hover:text-blue-400' size={20} />
// 								<span className='hidden sm:inline'></span>
// 								{cart.length > 0 && (
// 									<span
// 										className='absolute -top-2 -left-2 bg-blue-500 text-white rounded-full px-2 py-0.5 
// 									text-xs group-hover:bg-blue-400 transition duration-300 ease-in-out'
// 									>
// 										{cart.length}
// 									</span>
// 								)}
// 							</Link>
// 						)}
// 						{isAdmin && (
// 							<Link
// 								className='bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-md font-medium
// 								 transition duration-300 ease-in-out flex items-center'
// 								to={"/secret-dashboard"}
// 							>
// 								<Lock className='inline-block mr-1' size={18} />
// 								<span className='hidden sm:inline'>Dashboard</span>
// 							</Link>
// 						)}

// 						{user ? (
// 							<button
// 								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
// 						rounded-md flex items-center transition duration-300 ease-in-out'
// 								onClick={logout}
// 							>
// 								<LogOut size={18} />
// 								<span className='hidden sm:inline ml-2'>Log Out</span>
// 							</button>
// 						) : (
// 							<>
// 								<Link
// 									to={"/signup"}
// 									className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 
// 									rounded-md flex items-center transition duration-300 ease-in-out'
// 								>
// 									<UserPlus className='mr-2' size={18} />
// 									Sign Up
// 								</Link>
// 								<Link
// 									to={"/login"}
// 									className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
// 									rounded-md flex items-center transition duration-300 ease-in-out'
// 								>
// 									<LogIn className='mr-2' size={18} />
// 									Login
// 								</Link>
// 							</>
// 						)}
// 					</nav>
// 				</div>
// 			</div>
// 		</header>
// 	);
// };
// export default Navbar;


import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();

  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-blue-800'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <Link to='/' className='text-3xl font-extrabold text-blue-400 hover:text-blue-500 transition-colors duration-300'>
            E-Commerce
          </Link>

          {/* Hamburger Menu Icon - Visible on small screens */}
          <button 
            onClick={toggleMenu}
            className='sm:hidden text-gray-300 hover:text-blue-400 transition duration-300'>
            <span className='text-2xl'>☰</span> {/* Hamburger Icon */}
          </button>

          {/* Navigation Links */}
          <nav className={`sm:flex sm:gap-8 ${isMenuOpen ? "block" : "hidden"} flex-wrap items-center gap-6`}>
            <Link to='/' className='text-gray-300 hover:text-blue-400 transition-colors duration-300 ease-in-out'>
              Home
            </Link>

            {user && (
              <Link
                to='/cart'
                className='relative group text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out'
              >
                <ShoppingCart className='inline-block mr-2 group-hover:text-blue-400' size={22} />
                {cart.length > 0 && (
                  <span className='absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-blue-400'>
                    {cart.length}
                  </span>
                )}
              </Link>
            )}

            {isAdmin && (
              <Link
                to='/secret-dashboard'
                className='bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center transition duration-300 ease-in-out'
              >
                <Lock className='inline-block mr-2' size={20} />
                <span className='hidden sm:inline'>Dashboard</span>
              </Link>
            )}

            {user ? (
              <button
                className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                onClick={logout}
              >
                <LogOut size={20} />
                <span className='hidden sm:inline ml-2'>Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to='/signup'
                  className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                >
                  <UserPlus className='mr-2' size={20} />
                  Sign Up
                </Link>
                <Link
                  to='/login'
                  className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'
                >
                  <LogIn className='mr-2' size={20} />
                  Login
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
