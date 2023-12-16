import {NavLink} from "react-router-dom"
import "./Home.css"
import Yammi from "./assets/HomeBlud.png"
import Toch from "./assets/Union.png"
import Losos from "./assets/LososKr.png"
import Toch2 from "./assets/Union2.png"
import ButtKrz from "./assets/BasketKn.png"
export default function Home() {
    return(
        <div className="ContainH">
            <div className="BlockH1">
                <div className="PodBlH11">
                    <p>Доставка готовой еды из фермерских продуктов!</p>
                    <img className="Backrooms" src={Toch} alt="Error" />
                    <p className="numberPB1">+7 (499) 841-67-29</p>
                    <h6>delivery@midas.rest</h6>
                    <img className="Losos" src={Losos} alt="Error" />
                    <button className="BasketB"><NavLink to='/basket'></NavLink></button>
                    <img className="Backrooms2" src={Toch2} alt="Error" />
                </div>
                <img className="hYamI" src={Yammi} alt="" />
            </div>
            <div className="BlockH2">
                <div className="PodBlH21"><h1>Популярные блюда</h1></div>
                <div className="PodBlH22"></div>
            </div>
            <div className="BlockH3">
            </div>
        </div>
    )
}