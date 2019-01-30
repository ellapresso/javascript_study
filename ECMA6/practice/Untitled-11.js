const linesToHTML = function(characters) {
  return characters.reduce(function(charactersResult, character) {
    let { name, lines } = character;
    return `${charactersResult || ""}
<article>
  <h1>${name}</h1>
  <ul>
    ${lines.reduce(function(linesResult, line) {
      return `${linesResult || ""}
    <li>${line}</li>
      `.trim();
    }, 0)}
  </ul>
</article>
  `.trim();
  }, 0);
};
const characters = [
  {
    name: "Aria Stark",
    lines: ["A girl has no name."]
  },
  {
    name: "John Snow",
    lines: ["You know nothing, John Snow.", "Winter is coming."]
  }
];
document.body.innerHTML = linesToHTML(characters);
