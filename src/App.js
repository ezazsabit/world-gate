
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Signin from './components/authentication/Signin/Signin';
import Signup from './components/authentication/Signup';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Facilities from './components/Facilities/Facilities';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PackageDetail from './components/Packages/PackageDetail';
import Checkout from './components/Checkout/Checkout'
import RequireAuth from './components/authentication/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
    <div className="sticky-top">
    <Header></Header>
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/checkout" element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/packagedetail/:searchPackage" element={<PackageDetail></PackageDetail>} />
        <Route path="/*" element={<Error></Error>} />
        <Route path='/aboutme' element={<Aboutme></Aboutme>}/>
        <Route path='/facilities' element={<Facilities></Facilities>}/>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
