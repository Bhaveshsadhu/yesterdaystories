import './App.css';
// import Header1  from './Header';
import NavHeader  from './NavHeader';
import HomeSectionOne1 from './HomeSectionOne1'
import HomeSectionOne2 from './HomeSectionOne2'
import HomeSectionOne3 from './HomeSectionOne3'
import HomeSectionOne4 from './HomeSectionOne4'
import Testimonial  from './Testimonial';
import Ourpartners  from './Ourpartners';
import Footer  from './footer';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavHeader/>
      <HomeSectionOne1/>
      <HomeSectionOne2/>
      <Testimonial/>
      <Ourpartners/>
      <HomeSectionOne3/>
      <HomeSectionOne4/>
      <Footer/>
    </div>
  );
}

export default App;
