import Content from "./Content";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="page">
      <TopBar />
      <Content />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
