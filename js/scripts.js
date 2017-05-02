function isVowel(x){
        if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
            return true;
        }
        else{
            return false;
        }
    }
var para_original = [];
var para_noVowel = [];
//create an empty array to store word in split_para.
var word_array = [];
//Create an empty array to store letters from word_array
var character = [];
$(document).ready(function(){
  para_original = $("#editing").text();
  console.log(para_original);
  var split_para = para_original.split(" ");



  console.log(split_para);
  debugger;
  split_para.forEach(function(word) {
    word_array.splice(0, 1, word) ;
    character = word_array[0].split("");
    // console.log(word_array);
    for(i=0; i<character.length; i++){
      if (isVowel(character[i]) === true ) {
        character[i] = "-";
      }
    }
    word_array[0] = character.join("");
    //new array with vowels replaced by "-"
    para_noVowel.push(word_array[0]);
    // console.log(para_noVowel);
  });
  var para_noVowel_join = para_noVowel.join(" ");
  console.log(para_noVowel_join);
  // console.log(word_array);

});
