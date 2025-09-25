export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-[#1a1a1a] rounded-full px-8 py-3 flex items-center justify-between shadow-lg w-[90%] max-w-9xl">
      {/* Left Logo */}
      <div className="bg-[#e6ff00] rounded-full px-9 py-2 font-bold text-black text-xl ">
        HCD
      </div>

      {/* Center Links */}
      <ul className="flex space-x-10 text-white font-semibold">
        <li>
          <a href="#home" className="cursor-pointer hover:text-[#e6ff00]">
            Home
          </a>
        </li>
        <li>
          <a href="#nps-cargo" className="cursor-pointer hover:text-[#e6ff00]">
            NPS Cargo
          </a>
        </li>
        <li>
          <a href="#servicing" className="cursor-pointer hover:text-[#e6ff00]">
            Servicing
          </a>
        </li>
        <li>
          <a href="#dealership" className="cursor-pointer hover:text-[#e6ff00]">
            Dealership
          </a>
        </li>
      </ul>

      {/* Right Button */}
      <button className="flex items-center space-x-2 text-[#e6ff00] font-medium hover:underline">
        <span>View NPS Quick</span>
        <span>➝</span>
      </button>
    </nav>
  );
}
