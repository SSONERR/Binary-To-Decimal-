//Binary to Decimal conversion (İkilik sayıdan onluk sayıya çevirme)


let binary = prompt("Lütfen dönüştürmek istediğiniz sayıyı giriniz : ");

cevir()
function cevir(sayi){
    let ust=0
    let toplam=0
    for(let i=binary.length-1;0<=i;i--){
        if(binary.charAt(i)!==0){
            toplam+=binary.charAt(i)*(2**ust)
            ust++
        }
    }
    alert(binary+" = "+toplam)
}