import dictionary from "../dictionary.json"

export function randomWordSelector() {
    let numberOfWords = dictionary.length
    let randomValue = (Math.random() * numberOfWords)
    let randomWord = ''
    dictionary.map((word, i)=>{
      if(i === Math.round(randomValue))
      {
        console.log(word)
        randomWord = word
      }
      return 0
    })
    return randomWord
  }