import qventus from "../../../assets/logo-qventus-white.svg";

export const NavbarComp = () => {
  return (
    <div className="navbar-component">
      <div className="navbar-content">
        <div className="brand-container">
          <img src={qventus} alt="qventus" />
        </div>
      </div>
    </div>
  );
};
