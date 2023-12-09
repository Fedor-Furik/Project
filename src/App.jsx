import './App.css'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"
import {Error404, Profile, Home} from "./pages"
import Midas from "./assets/Vector.png"
import Basket from "./assets/Vector (2).png"
import Profil from "./assets/Vector (3).png"
import Search from "./assets/Vector (4).png"

function App() {
  return (
    <Router>
      <header>
        <img className='LogoH' src={Midas} alt="" />
        <nav>
          <NavLink to='/'>АКЦИИ</NavLink>
          <NavLink to='/profile'>ГОРЯЧЕЕ</NavLink>
          <NavLink to='*'>ХОЛОДНОЕ</NavLink>
          <NavLink to='/profile'>СВЯЖАЯ ВЫПЕЧКА</NavLink>
          <NavLink to='/'>ДЕСЕРТЫ</NavLink>
          <NavLink to='*'>НАПИТКИ</NavLink>
        </nav>
        <div className="funct">
          <img src={Search} alt="" />
          <img src={Profil} alt="" />
          <img src={Basket} alt="" />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Error404 />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </main>
      <footer>
        <div className="FootBlok1"><div className="PodBLok1F"><img className="MidasPngFoot" src={Midas} alt="" /><p>Обратная связь</p><p>Доставка</p><p>Оплата</p><p>Контакты</p></div><div className="PodBLok2F"><h5>+7 (499) 841-67-29</h5><p>delivery@midas.rest</p></div></div>
        <div className="FootBlok2"><h6>© 2009–2019, ООО «MIDAS», официальный сайт</h6><div className="PodFootBLok"><p>Политика конфиденциальности и оферта</p><p>Пользовательское соглашение</p></div></div>
      </footer>
    </Router>
  )
}

export default App
