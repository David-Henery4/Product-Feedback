import {NavSection, FeedbackBarSection, FeedbackListSection} from "./sections";


function App() {
  return (
    <main className="grid grid-cols-mob font-jost bg-offWhite">
      <NavSection />
      <FeedbackBarSection />
      <FeedbackListSection />
    </main>
  );
}

export default App;
