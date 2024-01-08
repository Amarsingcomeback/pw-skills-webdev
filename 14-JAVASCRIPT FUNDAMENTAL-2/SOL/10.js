function countWords(sentence) {
  // Create a Map to store word counts
  const wordMap = new Map();

  // Split the sentence into an array of words
  const words = sentence.split(/\s+/);

  // Iterate through each word in the array
  words.forEach((word) => {
    // Remove punctuation and convert to lowercase for consistency
    const cleanedWord = word.replace(/[^\w\s]/gi, "").toLowerCase();

    // Update the count in the Map
    if (cleanedWord) {
      if (wordMap.has(cleanedWord)) {
        // If the word is already in the Map, increment the count
        wordMap.set(cleanedWord, wordMap.get(cleanedWord) + 1);
      } else {
        // If the word is not in the Map, add it with a count of 1
        wordMap.set(cleanedWord, 1);
      }
    }
  });

  // Return the Map with word counts
  return wordMap;
}

// Example usage:
const sentence =
  "Please please submit your assinment on time, your assinments are important";
const wordCounts = countWords(sentence);

// Output the word counts
wordCounts.forEach((count, word) => {
  console.log(`${word}: => ${count}`);
});
