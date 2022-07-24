import './Home.css'
import Deck from '../Deck/Deck';
import FinalMessage from '../FinalMessage/FinalMessage';

export default function Home() {
    return (
        <div class='homeScreen'>
            <div class='navbar' >
                <img class='logo' src='assets/images/logo1.png'/>
                <div class='title'>ZapRecall</div>
            </div>
            <Deck />
            <FinalMessage />
        </div>
    )
}