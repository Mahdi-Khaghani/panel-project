import Content from "./layout/content/Content";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import { useAppSelectore } from "./redux/reduxHooks";

function App() {
  const { theme } = useAppSelectore((state) => state.uiManagerReduser);
  return (
    <main className={theme}>
      <div className="dark:text-gray-100">
        <Content />
        <Header />
        <Sidebar />
      </div>
    </main>
  );
}

export default App;
