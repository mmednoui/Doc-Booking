const Header = () => {
  return (
    <div className="bg-[#DDD0C8] py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-neutral-800 font-bold tracking-tight">
          <a href="/">DocBooking.com</a>
        </span>
        <span className="flex space-x-2">
          <a
            href="/sign-in"
            className="flex bg-neutral-800 items-center  text-white rounded-3xl px-10 py-2 font-bold hover:bg-neutral-700"
          >
            Sign In
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
