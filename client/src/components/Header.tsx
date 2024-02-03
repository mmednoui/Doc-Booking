import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-[#DDD0C8] py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-neutral-800 font-bold tracking-tight">
          <Link to="/">DocBooking.com</Link>
        </span>
        <span className="flex space-x-2">
          <span className="flex space-x-2">
            {isLoggedIn ? (
              <>
                <Link
                  className="flex items-center text-black px-3 font-bold"
                  to="/my-bookings"
                >
                  My Bookings
                </Link>
                <Link
                  className="flex items-center text-black px-3 font-bold "
                  to="/my-hotels"
                >
                  My Hotels
                </Link>
                <SignOutButton />
              </>
            ) : (
              <Link
                to="/signin"
                className="flex bg-neutral-800 items-center  text-white rounded-3xl px-10 py-2 font-bold hover:bg-neutral-700"
              >
                Sign In
              </Link>
            )}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
