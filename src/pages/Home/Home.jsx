import FAQs from "../../components/FAQs/FAQs";
import MainHeader from "../../components/Header/MainHeader";
import Programs from "../../components/Programs/Programs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Values from "../../components/Values/Values";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
    </div>
  );
};

export default Home;
