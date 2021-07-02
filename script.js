const nome = window.prompt("Olá, tudo bem? qual e o seu nome.")

const anoNascimento = parseInt(window.prompt("Agora, me fale seu ano de nascimento"))

const anoAtual = 2021

console.log(typeof(anoAtual))
console.log(typeof(anoNascimento))

let number1 = anoAtual
let number2 = anoNascimento
let string1 = nome

console.log(`O nome dele é ${nome}, ele nasceu em ${anoNascimento}, e em 2021 ele vai fazer ou já tem ${number1-number2} anos! nao e recomendado frequentar com menos de 12 anos`)

alert(`O seu nome é ${nome}, e você nasceu em ${anoNascimento}, e em 2021 você vai fazer ou já fez ${number1-number2} anos nao e recomendado frequentar com menos de 12 anos!` )