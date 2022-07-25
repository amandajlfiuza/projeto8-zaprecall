export function FinalMessage({
    answersCounter, 
    incorrectsCounter}) {

    let renderMessage;

    function message() {
        if (answersCounter === 8 && incorrectsCounter === 0) {
            renderMessage = (
                <>
                    <em>🥳 Parabéns!</em>
                    <div>Você não esqueceu de nenhum flashcard!</div>
                </>
            ) 
        } else if (answersCounter === 8 && incorrectsCounter !== 0) {
            renderMessage = (
                <>
                    <em>😥 Putz...</em>
                    <div>Ainda faltam alguns...
                        Mas não desanime!</div>
                </>
            ) 
        }
    }
    message();

    return (
        <div class='finalMessage'>{renderMessage}</div>
    )
}