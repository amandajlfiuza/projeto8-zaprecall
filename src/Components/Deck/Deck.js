import './Deck.css';
import Flashcard from '../Flashcard/Flashcard';

const questions = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript'
    },
    {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces'
    },
    {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula'
    },
    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões'
    },
    {
        question: 'O ReactDOM nos ajuda __',
        answer: 'interagindo com a DOM para colocar componentes React na mesma'
    },
    {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências'
    },
    {
        question: 'Usamos props para __',
        answer: 'passar diferentes informações para componentes'
    },
    {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    }
]

function generateRandomIndex() {
    return Math.random() - 0.5;
}

questions.sort(generateRandomIndex);

export default function Deck({
    answersCounter, 
    setAnswersCounter, 
    iconsResult, 
    setIconsResult, 
    incorrectsCounter, 
    setIncorrectsCounter}) {

    const renderQuestions = questions.map((quest, index) => 
        (<Flashcard
            index={index}
            question={quest.question} 
            answer={quest.answer} 
            answersCounter={answersCounter} 
            setAnswersCounter={setAnswersCounter}
            iconsResult={iconsResult}
            setIconsResult={setIconsResult}
            incorrectsCounter={incorrectsCounter}
            setIncorrectsCounter={setIncorrectsCounter}
        />));

    return (
        <div class='deck'>
            {renderQuestions}
        </div>
    )
}