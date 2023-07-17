import {NavSection, FeedbackBarSection, FeedbackListSection} from "./sections";

function App() {
  return (
    <main className="grid grid-cols-mob auto-rows-min font-jost bg-offWhite min-h-[100svh] overflow-x-hidden pb-14 smTab:grid-cols-smTab tab:pt-14 tab:pb-28">
      <NavSection />
      <FeedbackBarSection />
      <FeedbackListSection />
    </main>
  );
}

export default App;
