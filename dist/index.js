class Dict {
  constructor() {
    this.words = {};
  }
  add(word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term) {
    return this.words[term];
  }
}
class Word {
  constructor(term, def) {
    this.term = term;
    this.def = def;
  }
}
const kimchi = new Word("kimchi", "한국의 매운 음식");
const pizza = new Word("pizza", "서양의 맛있는 음식");
const dict = new Dict();
dict.add(kimchi);
dict.add(pizza);
//# sourceMappingURL=index.js.map
