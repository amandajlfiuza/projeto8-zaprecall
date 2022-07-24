import React from 'react'
import './Flashcard.css'

export default function Flashcard({index, question, answer}) {
    const [cardClass, setCardClass] = React.useState('closed flashcard');

    return (
        <div class={cardClass}>
            <div class='front' onClick={() => setCardClass('open-question flashcard')}>
                <div class='index-question'>Pergunta {index+1}</div>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div class='question'>{question}</div>
            <div onClick={() => setCardClass('open-answer flashcard')}>
                <img class='turn-icon' src='assets/images/setinha.png'/>
            </div>
            <div class='answer'>{answer}</div>
            <div class='buttons'>
                <div class='incorrect'>Não lembrei</div>
                <div class='correct-with-effort'>Quase não lembrei</div>
                <div class='correct'>Zap!</div>
            </div>
        </div>
    )
}