import React from 'react'
import './Flashcard.css'

export default function Flashcard({
    index, 
    question, 
    answer, 
    answersCounter, 
    setAnswersCounter, 
    iconsResult, 
    setIconsResult,
    incorrectsCounter,
    setIncorrectsCounter}) {

    const [cardClass, setCardClass] = React.useState('closed flashcard');

    return (
        <div class={cardClass}>
            <div class='front' onClick={() => {if(cardClass === 'closed flashcard') {setCardClass('open-question flashcard')}}}>
                <div class='index-question'>Pergunta {index+1}</div>
                <ion-icon class='icon-play' name="play-outline"></ion-icon>
                <ion-icon class='icon-incorrect' name="close-circle"></ion-icon>
                <ion-icon class='icon-correct-with-effort' name="help-circle"></ion-icon>
                <ion-icon class='icon-correct' name="checkmark-circle"></ion-icon>
            </div>
            <div class='question'>{question}</div>
            <img class='turn-icon' src='assets/images/setinha.png' onClick={() => setCardClass('open-answer flashcard')}/>
            <div class='answer'>{answer}</div>
            <div class='buttons'>
                <div class='incorrect' onClick={() => {
                    if(cardClass === 'open-answer flashcard') {
                        setCardClass('closed incorrect flashcard');
                        setAnswersCounter(answersCounter + 1);
                        setIconsResult([...iconsResult, <ion-icon class='icon-incorrect' name="close-circle"></ion-icon>]);
                        setIncorrectsCounter(incorrectsCounter + 1);
                    }
                    }}
                    >Não lembrei</div>
                <div class='correct-with-effort' onClick={() => {
                    if(cardClass === 'open-answer flashcard') {
                        setCardClass('closed correct-with-effort flashcard')
                        setAnswersCounter(answersCounter + 1);
                        setIconsResult([...iconsResult, <ion-icon class='icon-correct-with-effort' name="help-circle"></ion-icon>])
                    }
                    }}
                    >Quase não lembrei</div>
                <div class='correct' onClick={() => {
                    if(cardClass === 'open-answer flashcard') {
                        setCardClass('closed correct flashcard')
                        setAnswersCounter(answersCounter + 1);
                        setIconsResult([...iconsResult, <ion-icon class='icon-correct' name="checkmark-circle"></ion-icon>])
                    }
                    }}
                    >Zap!</div>
            </div>
        </div>
    )
}