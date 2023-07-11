import {HamburgerIcon} from "./assets/shared"
import {backgroundHeaderMobile} from "./assets/suggestions";

function App() {
  return (
    <main className="grid grid-cols-mob font-jost">
      <nav className="relative w-full col-start-1 col-end-13 px-6 py-4 flex justify-between items-center text-white">
        <img className="absolute top-0 left-0 w-full h-full -z-10" src={backgroundHeaderMobile} alt="header background gradient" />
        <div>
          <h1 className="font-bold text-[15px] -tracking-[0.19px]">Frontend Mentor</h1>
          <p className="text-[13px] font-medium">Feedback Board</p>
        </div>
        <HamburgerIcon/>
      </nav>

      <div></div>

      <section></section>
    </main>
  );
}

export default App;
