const LinkedList = require("../LinkedList-lecture/LinkedListLecture");

const data = [
  "All human beings are born free and equal in dignity and rights.",
  "They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
  "Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.",
  "Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.",
];
const words = new LinkedList();
// words.insert("all");
// words.insert("human");
// words.insert("beings");
words.insert("in");

function concordance(data) {
  const wordMap = new Map();
  const wordSet = new Set();
  for (i = 0; i < data.length; i++) {
    const sentence = data[i].toLowerCase();
    const splitted = new Set(sentence.split(/[\s.,';]/));
    // console.log(splitted)
    const arr = [...splitted];
    arr.forEach((word) => {
      if (word !== "") {
        if (wordMap.has(word)) {
          wordMap.get(word).push(i);
        } else {
          wordMap.set(word, [i]);
        }
      }
    });
  }

  const obj = Object.fromEntries(wordMap);
  return obj;
    //  return wordMap;
}

console.log(concordance(data));

function searchLine(words, concordance, data) {
    if(!words.head) return null;
  let node = words.head;
//   console.log(node.value);
  const result = new Set();
  while (node) {
      const values = node.value;
    //   console.log(node)
      // let word = concordance.get(values);
      let word = concordance[values] //if obj
      // console.log(word);
      if(!word) break
      word.forEach((num) => {
          result.add(data[num]);
        });
        node = node.next;
  }
//   console.log(result);
  return [...result]
}
console.log(searchLine(words, concordance(data), data));
