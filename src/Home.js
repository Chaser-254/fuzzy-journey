import Bio from "./component/Bio";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
const Home = () => {
  return (
    <div className="home">
      <Bio />
      <Skills />
      <Contact />
    </div>
  );
};
export default Home;