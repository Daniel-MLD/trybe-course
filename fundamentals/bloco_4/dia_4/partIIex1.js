let palavra = "arasra";
console.log(verificaPalindrome(palavra));

function verificaPalindrome(palavraTeste) {
  let palindrome = '';
  for (let i = 0; i < (palavraTeste.length / 2 ); i += 1) {
    let a = palavraTeste.charAt(i);
    let b = palavraTeste.charAt((palavraTeste.length-1)-i);
    if (a === b) {
      palindrome = true;
    }
    else {
      palindrome = false;    
    }
  }
  return palindrome;
}