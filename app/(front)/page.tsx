import ContactSection from '../components/contact';
import { Feature } from '../components/feature';
import Footer from '../components/footer';
import Header from '../components/header';
import { Herobar } from '../components/herobar';
import TableComponent from '../components/table';
const HomePage = () => {
  return (
    <>
      <Header />
      <Herobar />
      <Feature/>
      <ContactSection/>
      <Footer/>
    </>
  );
};

export default HomePage;
