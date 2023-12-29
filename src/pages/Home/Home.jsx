import {NavLink} from "react-router-dom"
import "./Home.css"
import Yammi from "./assets/HomeBlud.png"
import Toch from "./assets/Union.png"
import Losos from "./assets/LososKr.png"
import Toch2 from "./assets/Union2.png"
import Bludo1 from "./assetsBluda/Bludo1.png"
import Bludo2 from "./assetsBluda/Bludo2.png"
import Bludo3 from "./assetsBluda/Bludo3.png"
import Bludo4 from "./assetsBluda/Bludo4.png"
import Bludo5 from "./assetsBluda/Bludo5.png"
import Bludo6 from "./assetsBluda/Bludo6.png"
import Bludo7 from "./assetsBluda/Bludo7.png"
import Bludo8 from "./assetsBluda/Bludo8.png"
import Bludo9 from "./assetsBluda/Bludo9.png"
import Bludo10 from "./assetsBluda/Bludo10.png"
import Bludo11 from "./assetsBluda/Bludo11.png"
import Bludo12 from "./assetsBluda/Bludo12.png"
import Group0 from "./assetsBluda/Group0.png"
import Group1 from "./assetsBluda/Group1.png"
import Group2 from "./assetsBluda/Group2.png"
import Group3 from "./assetsBluda/Group3.png"
import Group4 from "./assetsBluda/Group4.png"
import Group5 from "./assetsBluda/Group5.png"
export default function Home() {
    function getUpToWork(title,price,img){
        let mex = document.createElement('div')
        mex.className = ""
        img.className = ""
        title.className = ""
        price.className = ""
        mex.appendChild()
    }
    return(
        <div className="ContainH">
            <div className="BlockH1">
                <div className="PodBlH11">
                    <p>Доставка готовой еды из фермерских продуктов!</p>
                    <img className="Backrooms" src={Toch} alt="Error" />
                    <p className="numberPB1">+7 (499) 841-67-29</p>
                    <h6>delivery@midas.rest</h6>
                    <img className="Losos" src={Losos} alt="Error" />
                    <NavLink to='/backet'><button className="BasketB"></button></NavLink>
                    <img className="Backrooms2" src={Toch2} alt="Error" />
                </div>
                <img className="hYamI" src={Yammi} alt="" />
            </div>
            <div className="BlockH2">
                <div className="PodBlH21">
                    <h1>Популярные блюда</h1>
                </div>
                <div className="PodBlH22">
                    <div className="PodPodBlH221">
                        <div className="BludoH">
                            <img src={Bludo1} alt="wesrdtyu" />
                            <h4>Хачапури по-аджарски</h4>
                            <div className="butonGrB">430 г</div>
                            <p>Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.</p>
                            <div className="PodPodPodBlH221">
                                <h3>470 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo2} alt="wesrdtyu" />
                            <h4>Хинкали традиционные (6шт)</h4>
                            <div className="butonGrB">350 г</div>
                            <p>Пряные хинкали с начинкой из ароматной баранины со специями.</p>
                            <div className="PodPodPodBlH221">
                                <h3>495 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo3} alt="wesrdtyu" />
                            <h4>Хинкали жаренные (6шт)</h4>
                            <div className="butonGrB">350 г</div>
                            <p>Пряные хинкали с начинкой из ароматной баранины со специями.</p>
                            <div className="PodPodPodBlH221">
                                <h3>520 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo4} alt="wesrdtyu" />
                            <h4>Ланч низкокалорийный</h4>
                            <div className="butonGrB">450 г</div>
                            <p>Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс.</p>
                            <div className="PodPodPodBlH221">
                                <h3>1 148 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo5} alt="wesrdtyu" />
                            <h4>Хачапури по-мегрельски</h4>
                            <div className="butonGrB">430 г</div>
                            <p>Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.</p>
                            <div className="PodPodPodBlH221">
                                <h3>490 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo6} alt="wesrdtyu" />
                            <h4>Котлета с картофелем по-деревенски</h4>
                            <div className="butonGrB">450 г</div>
                            <p>По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...</p>
                            <div className="PodPodPodBlH221">
                                <h3>430 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="PodPodBlH222">
                    <div className="BludoH">
                            <img src={Bludo7} alt="wesrdtyu" />
                            <h4>Хинкали традиционные (6шт)</h4>
                            <div className="butonGrB">350 г</div>
                            <p>Пряные хинкали с начинкой из ароматной баранины со специями.</p>
                            <div className="PodPodPodBlH221">
                                <h3>495 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo8} alt="wesrdtyu" />
                            <h4>Хачапури по-мегрельски</h4>
                            <div className="butonGrB">430 г</div>
                            <p>Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи.</p>
                            <div className="PodPodPodBlH221">
                                <h3>490 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo9} alt="wesrdtyu" />
                            <h4>Хачапури по-аджарски</h4>
                            <div className="butonGrB">430 г</div>
                            <p>Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.</p>
                            <div className="PodPodPodBlH221">
                                <h3>470 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo10} alt="wesrdtyu" />
                            <h4>Котлета с картофелем по-деревенски</h4>
                            <div className="butonGrB">350 г</div>
                            <p>По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...</p>
                            <div className="PodPodPodBlH221">
                                <h3>430 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo11} alt="wesrdtyu" />
                            <h4>Хинкали жаренные (6шт)</h4>
                            <div className="butonGrB">350 г</div>
                            <p>Пряные хинкали с начинкой из ароматной баранины со специями.</p>
                            <div className="PodPodPodBlH221">
                                <h3>520 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                        <div className="BludoH">
                            <img src={Bludo12} alt="wesrdtyu" />
                            <h4>Ланч низкокалорийный</h4>
                            <div className="butonGrB">450 г</div>
                            <p>Греческий йогурт с ягодами, 3 хинкали традиционных, салат цезарь, пирожки с уткой, морс.</p>
                            <div className="PodPodPodBlH221">
                                <h3>1 148 ₽</h3>
                                <NavLink to='/backet'><button className="BasketB2"></button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BlockH3">
                <div className="ZoglB">
                    <h4>Меню</h4>
                </div>
                <div className="NedoSlid">
                    <NavLink to="/Actions"><div className="blockNSl0"><p>АКЦИИ🔥</p></div></NavLink>
                    <NavLink to="/HotBluds">
                      <div className="blockNSl1">
                        <div className="podD2">
                            <div className="podpodD2"><p>Горячие</p></div>
                            <div className="podpodD2"><p>блюда</p></div>
                        </div>
                      </div> 
                    </NavLink>
                    <NavLink to="/Soups"><div className="blockNSl2"><p>Супы</p></div></NavLink>
                    <NavLink to="/Xinkali"><div className="blockNSl3"><p>Хинкали</p></div></NavLink>
                    <NavLink to="/ColfSnacks">
                      <div className="blockNSl4">
                        <div className="podD2">
                            <div className="podpodD2"><p>Холодные</p></div>
                            <div className="podpodD2"><p>Закуски</p></div>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="Salats"><div className="blockNSl5"><p>Салаты</p></div></NavLink>     
                </div>
            </div>
        </div>
    )
}