import './result.css';

function Result () {
    return(
        <div className="result-name">
            <h3 id="results">Results</h3> 
            <table border = "1">
                <tr>
                    <td>User Score Highest</td>
                    <td id="user-score-higest">Score</td>
                    <td>Userscore</td>
                    <td id="user-score-2nd">Score</td>
                    <td >Userscore</td>
                    <td id ="user-score-3rd">Score</td>
                </tr>

            </table>
            <h3 id="quit">Quit</h3>
            </div>
    )
}

export default Result;