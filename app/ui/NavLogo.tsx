import Link from "next/link";

const NavLogo = () => {
  return (
    <div className="h-28 w-full flex justify-center items-center">
      <Link href="/" className="text-2xl font-light">
        Stefan Bura Film
      </Link>
    </div>
  );
};

export default NavLogo;
