const MessageMixer={};

MessageMixer.countCharacter=function countCharacter(inputString, inputCharacter)
{
  var count = 0;
  var string = inputString.toLowerCase();
  var character = inputCharacter.toLowerCase();
    for (var i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return count; 
};

MessageMixer.capitalizeFirstCharacterOfWords=function capitalizeFirstCharacterOfWords(string) 
{
  var arr = string.split(" ");  
    for (var i = 0; i < arr.length; i++) {  
      var word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1); 
    }
  return arr.join(" "); 
};


MessageMixer.reverseWord=function reverseWord(word)
 {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords=function(sentence)
 {
  var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
      words[i] = reverseWord(words[i]);
    }
   return words.join(" ");
};


MessageMixer.replaceFirstOccurence=function replaceFirstOccurence(string, toBeReplaced, replaceWith) 
{
  return string.replace(toBeReplaced, replaceWith);
};


MessageMixer.replaceAllOccurrences=function replaceAllOccurrences(string, toBeReplaced, replaceWith) 
{
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode=function encode(string) 
{
  var replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (var key in replacementObject) {
      string = replaceAllOccurrences(string, key, replacementObject[key]); 
    }	
    return string;
};

MessageMixer.palindrome = function palindrome(string)
{
	return string +" "+ MessageMixer.reverseWord(string);

}

MessageMixer.pigLatin = function pigLatin(sentence, character)
 {
  return sentence.split(' ').join(character);
};

module.exports=MessageMixer;

