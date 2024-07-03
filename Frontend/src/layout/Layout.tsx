import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
