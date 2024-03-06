import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './CreateBlog';
import Details from './BlogDetails';
import NotFound from './NotFoundPage';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <div className="contents">
          {/* used in react-router-dom version 6 */}
          <Routes>
            <Route exact path="/" element={<Home/> } ></Route> 
            <Route path='/create' element={<Create/>} ></Route>
            <Route path='/blogs/:id' element={<Details/>} ></Route>
            <Route path='*' element={<NotFound/>} ></Route> 
          </Routes>

          {/* "*" - is used to match all paths so it is best to place it at the bottom  */}

          {/* <Switch>
            <Route path="/" ><Home/></Route>  used in react-router-dom version 5
          </Switch> */}

        </div>
      </div>
    </Router>
  );
}
