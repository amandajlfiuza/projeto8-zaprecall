import './FinalResult.css';
import { FinalMessage } from '../FinalMessage/FinalMessage';

export default function finalResult({answersCounter, iconsResult, incorrectsCounter}) {
    return (
        <div class='finalResult'>
            <FinalMessage answersCounter={answersCounter} incorrectsCounter={incorrectsCounter} />
            <div class='answersCounter'>{answersCounter}/8 CONCLUÍDOS</div>
            <div class='answersIcons'>
                {iconsResult}
            </div>
        </div>
    )
}