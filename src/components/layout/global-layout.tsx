import { ReactNode } from "react";
import { FooterComp } from "./footer-comp/footer-global";
import { NavbarComp } from "./navbar-comp/navbar-global";

type GlobalLayoutProps = { component: ReactNode };

export const GlobalLayout = ({ component }: GlobalLayoutProps) => {
  return (
    <div className={`global-layout`}>
      <div className="navbar-wrapper">
        <NavbarComp />
      </div>

      <div className="content-wrapper">
        <div className="content">{component}</div>
      </div>

      <div className="footer-wrapper">
        <FooterComp />
      </div>
    </div>
  );
};
