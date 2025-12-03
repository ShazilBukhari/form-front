import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-700 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">MERN Auth</h1>

      <div className="flex gap-5">
        <Link to="/signup" className="hover:underline">Signup</Link>
        <Link to="/signin" className="hover:underline">Signin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
