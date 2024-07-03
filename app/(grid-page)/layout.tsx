import NavBar from "../ui/NavBar";
import NavLogo from "../ui/NavLogo";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-white">
      <div className="flex flex-col">
        <NavLogo />
        <NavBar />
        <div className="flex-1 p-16">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
