let nota1 = 3
let nota2 = 5


console.log(media(nota1, nota2));

function media(n1, n2) {
    let media = (n1 + n2) / 2

    console.log(`Sua média é ${media}`)

    if (media >= 7) {
        return "Você está APROVADO";
    } else if (media >= 5) {
        return "Você está de RECUPERAÇÃO!"
    } else if (media < 5) {
        return "Você está REPROVADO!"
    }
}
