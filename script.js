function makeid(l) {
  // write your code here
	  let result = ""
  let arr = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]
for(let i=0;i<l;i++){
    let x = Math.floor(Math.random() * (61  + 1)) 
    result += arr[x]
}
	return result
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
