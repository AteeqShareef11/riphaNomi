import Layout from './layout/Layout';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Colleges from './Pages/Colleges';
import Acadmic from './Pages/Acadmic';
import Qec from './Pages/Qec';
import LatestNews from './Pages/LatestNews';
import MeritList from './Pages/MeritList';
import ProgramFinder from './Pages/ProgramFinder';
import FeeStructure from './Pages/FeeStructure';
import ListOfPrograms from './Pages/ListOfPrograms';
import ContactAdmisions from './Pages/ContactAdmisions';
import Login from './auth/Login';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/colleges' element={<Colleges />} />
          <Route path='/acadamic' element={<Acadmic />} />
          <Route path='/qec' element={<Qec />} />
          <Route path='/admissions/latest' element={<LatestNews />} />
          <Route path='/admissions/merit' element={<MeritList />} />
          <Route path='/admissions/program' element={<ProgramFinder />} />
          <Route path='/admissions/fee' element={<FeeStructure />} />
          <Route path='/admissions/listofprograme' element={<ListOfPrograms />} />
          <Route path='/admissions/contactAdmissions' element={<ContactAdmisions />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;