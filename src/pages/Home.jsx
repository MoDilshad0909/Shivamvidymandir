import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import Features from '../components/home/Features';
import AcademicsOverview from '../components/home/AcademicsOverview';
import StudentLife from '../components/home/StudentLife';
import Infrastructure from '../components/home/Infrastructure';
import Testimonials from '../components/home/Testimonials';
import NoticeBoard from '../components/home/NoticeBoard';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Shivam Vidya Mandir High School & Jr. College</title>
        <meta name="description" content="Welcome to Shivam Vidya Mandir, providing quality education with a holistic approach to student development since 1981." />
      </Helmet>
      
      <Hero />
      <Highlights />
      <Features />
      <AcademicsOverview />
      <StudentLife />
      <Infrastructure />
      <Testimonials />
      <NoticeBoard />
      <CTA />
    </>
  );
};

export default Home;
