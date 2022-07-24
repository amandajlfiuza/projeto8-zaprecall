import './Start.css';

export default function Start({tela, setTela}) {
    return (
        <div class='startScreen'>
            <img class='logo' src='assets/images/logo1.png'/>
            <div class='title'>ZapRecall</div>
            <div class='startButton' onClick={() => setTela(!tela)}>Iniciar Recall!</div>
        </div>
    )
}