function shuffle(quiz){
    const answers = [ quiz.correct_answer, ...quiz.incorrect_answers ]
    for (let i = answers.length -1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        ;[answers[i], answers[j]] = [answers[j], answers[i]]
    }
return answers;
}

export default shuffle;