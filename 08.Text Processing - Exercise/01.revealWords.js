function revealWords(words, sentence) {
    // let wordsToReveal = words.split(", ");
    // let sentenceArr = sentence.split(" ");

    // for(let el of wordsToReveal) {
    //     for(let word of sentenceArr) {
    //         if(word.includes("*") && word.length === el.length) {
    //            sentence = sentence.replace(word, el);
    //         }
    //     }
    // } 
    // console.log(sentence);
    //--------------------------------
    words = words.split(", ");
    for(let word of words) {
        sentence = sentence.replace("*".repeat(word.length), word);
    }
    console.log(sentence);
}

revealWords('great',
'softuni is ***** place for learning new programming languages');