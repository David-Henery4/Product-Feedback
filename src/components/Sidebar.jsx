

const Sidebar = ({isSidebarOpen}) => {
  return (
    <aside
      className={`absolute bg-white top-full right-0 w-3/4 h-[100svh] transition-all ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    ></aside>
  );
}

export default Sidebar