import './Home.css'
import Deck from '../Deck/Deck';
import FinalResult from '../FinalResult/FinalResult';
import React from 'react';

export default function Home() {
    const [answersCounter, setAnswersCounter] = React.useState(0);
    const [iconsResult, setIconsResult] = React.useState([]);
    const [incorrectsCounter, setIncorrectsCounter] = React.useState(0);

    return (
        <div class='homeScreen'>
            <div class='navbar' >
                <img class='logo' src='assets/images/logo1.png'/>
                <div class='title'>ZapRecall</div>
            </div>
            <Deck 
                answersCounter={answersCounter} 
                setAnswersCounter={setAnswersCounter} 
                iconsResult={iconsResult} 
                setIconsResult={setIconsResult} 
                incorrectsCounter={incorrectsCounter} 
                setIncorrectsCounter={setIncorrectsCounter}
            />
            <FinalResult 
                answersCounter={answersCounter} 
                iconsResult={iconsResult} 
                incorrectsCounter={incorrectsCounter}
            />
        </div>
    )
}