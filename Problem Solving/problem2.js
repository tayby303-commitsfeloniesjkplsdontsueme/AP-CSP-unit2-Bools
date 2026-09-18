function letterGrade(score) {
    if (score >= 90 && score <= 100) {
        return `Score ${score} -> A`;
    } else if (score >= 80 && score <= 89) {
        return `Score ${score} -> B`;
    } else if (score >= 70 && score <= 79) {
        return `Score ${score} -> C`;
    } else if (score >= 60 && score <= 69) {
        return `Score ${score} -> D`;
    } else if (score < 60) {
        return `Score ${score} -> F`;
    }
}
console.log(letterGrade(95));
console.log(letterGrade(85));
console.log(letterGrade(75));
console.log(letterGrade(65));
console.log(letterGrade(55));