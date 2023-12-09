import "./Home.css"
import Yammi from "./assets/HomeBlud.png"
import Toch from "./assets/Union.png"
export default function Home() {
    return(
        <div className="ContainH">
            <div className="BlockH1">
                <div className="PodBlH11">
                    <p>Доставка готовой еды из фермерских продуктов!</p>
                    <img className="Backrooms" src={Toch} alt="" />
                    <p className="numberPB1">+7 (499) 841-67-29</p>
                    <h6>delivery@midas.rest</h6>
                </div>
                <img className="hYamI" src={Yammi} alt="" />
            </div>
            <div className="BlockH2">
            </div>
            <div className="BlockH3">
            </div>
        </div>
    )
}