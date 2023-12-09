import "./Home.css"
import Yammi from "./assets/HomeBlud.png"
export default function Home() {
    return(
        <div className="ContainH">
            <div className="BlockH1">
                <div className="PodBlH11"><p>Доставка готовой еды из фермерских продуктов!</p></div>
                <img className="hYamI" src={Yammi} alt="" />
            </div>
            <div className="BlockH2">
            </div>
            <div className="BlockH3">
            </div>
        </div>
    )
}