import { Component } from "react";
import Magic from "./components/Magic";
import State from "./components/State";
export default class App extends Component
{   

    state = {
        korisnici: 'Iluminati',
        childrean: 'djeca'
    }
    render()
    {
        const {korisnici, childrean} = this.state;
        return(
        <div>
            <State state={korisnici} childrean={childrean}/>

            <Magic magic={'Wizzard'}/> 
        </div>
    )};

}
//ovo Magic je malo za vježbu još