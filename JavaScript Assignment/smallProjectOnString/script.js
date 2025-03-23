function getText() {
    return document.getElementById('textInput').value;
}
function setResult(value) {
    document.getElementById('result').innerText = value;
}
function toUpperCase() {
    setResult(getText().toUpperCase());
}
function toLowerCase() {
    setResult(getText().toLowerCase());
}
function toCamelCase() {
    let text = getText().toLowerCase().split(' ');
    for (let i = 1; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    setResult(text.join(''));
}
function reverseString() {
    setResult(getText().split('').reverse().join(''));
}
function countVowels() {
    let count = (getText().match(/[aeiou]/gi) || []).length;
    setResult('Vowel Count: ' + count);
}
function countConsonants() {
    let count = (getText().match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
    setResult('Consonant Count: ' + count);
}
function countWords() {
    let count = getText().trim().split(/\s+/).length;
    setResult('Word Count: ' + count);
}
function mostFrequentChar() {
    let str = getText().replace(/\s+/g, '').toLowerCase();
    let freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    let maxChar = Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
    setResult('Most Frequent Character: ' + maxChar);
}
function checkAnagram() {
    let input = getText().split(',');
    if (input.length !== 2) {
        setResult('Enter two words separated by a comma');
        return;
    }
    let sorted1 = input[0].replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    let sorted2 = input[1].replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    setResult(sorted1 === sorted2 ? 'Anagrams' : 'Not Anagrams');
}
function longestWord() {
    let words = getText().match(/\w+/g) || [];
    let longest = words.reduce((a, b) => (b.length > a.length ? b : a), '');
    setResult('Longest Word: ' + longest);
}