const emojis = ['1F498', '1F478', ' 1F383', '2620', '1F385','1F525','1F983','2661', '8986', '8987','9193', '9194','9195','9198','9199','9200','1F302',,'1F305','1F306','1F307','1F308','1F309', '1F30A', '1F30B', '1F30C', '1F30D', '1F30E', '1F30F', '1F311', '1F312', '1F13', '1F14', '1F15','1F16', '1F17', '1F18','1F19', '1F31D', '1F31E', '1FR1F', '1F320', '1F321', '1F322','1F323', '1F324', '1F325', '1F425', '1F326', '1F327', '1F328','1F329', '1F32A', '1F32B', '1F32C', '1F32D', '1F32E', '1F32F','1F330', '1F331', '1F332', '1F334', '1F335']

let emojiGrid = document.getElementById('emoji-grid')
let random= Math.floor((Math.random() * 10) + 0)
let emoji= String.fromCodePoint('0x'+emojis[random])

function generate() {
  for(let i = 0; i < 99; i++){
    emojiGrid.innerHTML += `<p>${emoji}</p>`
    console.log(random+' '+emoji)
      random = Math.floor((Math.random() * 10) + 0)
      emoji = String.fromCodePoint('0x'+emojis[random])
  }
}