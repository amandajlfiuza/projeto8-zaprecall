import React from 'react'
import './Flashcard.css'

export default function Flashcard({index, question, answer}) {
    const [cardClass, setCardClass] = React.useState('closed flashcard');

    return (
        <div class={cardClass}>
            <div class='front' onClick={() => setCardClass('open-question flashcard')}>
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
                <div class='incorrect' onClick={() => setCardClass('closed incorrect flashcard')}>Não lembrei</div>
                <div class='correct-with-effort' onClick={() => setCardClass('closed correct-with-effort flashcard')}>Quase não lembrei</div>
                <div class='correct' onClick={() => setCardClass('closed correct flashcard')}>Zap!</div>
            </div>
        </div>
    )
}