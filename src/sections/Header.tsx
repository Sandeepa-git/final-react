import Link from 'next/link'; // Import Next.js Link

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-2 left-0 right-0 z-50">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#" className="nav-item">Home</Link>
        <Link href="#" className="nav-item">Projects</Link>
        <Link href="#" className="nav-item">About</Link>
        <Link href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
      </nav>
    </div>
  );
};
