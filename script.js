const listaFrasesTotal = [
    "\"Temos um Fronteiras Invisíveis sobre\"",
    "\"Escrevi sobre isso naquele jornal...\"",
    "\"Tem um artigo sobre no site do Xadrez Verbal\"",
    "Matias lança uma curiosidade aleatória",
    "Clubismo",
    "\"Tem um Nerdologia falando sobre\"",
    "\"Eu avisei\"",
    "\"Falamos sobre isso no Repertório\"",
    "\"Já falamos disso antes no programa...\"",
    "Golpe de Estado",
    "Piada com o Perú",
    "Lançamento de algo em Cuba",
    "5ª série",
    "Gloriosa República de Vanuatu",
    "Bezuntadão de Tonga",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "Brexit",
]

function criaListaFrases(){
    let listaFrases = []
    let tamanho = 0
    while(tamanho<24){
        indiceAleatorio = Math.floor(Math.random() * listaFrasesTotal.length)
        itemAleatorio = listaFrasesTotal[indiceAleatorio]
        console.log(indiceAleatorio)
        if(listaFrases.includes(itemAleatorio)){
            continue
        }
        else{
            listaFrases.push(itemAleatorio)
        }
        tamanho = listaFrases.length
    }
    listaFrases[24] = listaFrases[12]
    listaFrases[12] = ''
    return listaFrases
}

function criaTabela(){
    const listaFrases = criaListaFrases()
    let conteudoTabela = ""
    indiceCelula = 0
    for(i=0;i<5;i++){
        conteudoTabela += "<tr>"
        for(j=0;j<5;j++){
            if(indiceCelula!=12){
                conteudoTabela += "<td class=\"celulaBingo\" id="+indiceCelula+">"+listaFrases[indiceCelula]+"</td>"
            }
            else{
                conteudoTabela += "<td class=\"celulaBingo\" id="+indiceCelula+"><img src=\"./XV.png\"/></td>"
            }
            indiceCelula++
        }
    }
    document.getElementById("tbodyBingo").innerHTML = conteudoTabela
}

function celulaMouseover(idCelula){
    elemento = document.getElementById(idCelula)
    elemento.style["border-color"]="red";
}

function celulaMouseout(idCelula){
    elemento = document.getElementById(idCelula)
    elemento.style["border-color"]="black"
}

function celulaClick(idCelula){
    elemento = document.getElementById(idCelula)
    if(elemento.getAttribute("clicado")=="false"){
        elemento.setAttribute("clicado","true")
        elemento.style["background-color"] = "lightgreen"
    }
    else{
        elemento.style["background-color"] = "white"
        elemento.setAttribute("clicado","false")
    }
    console.log("click")
}

function adicionaEventos(){
    for(elemento of document.querySelectorAll(".celulaBingo")){
        if(elemento.id!=12){
            elemento.setAttribute("onmouseover","celulaMouseover("+elemento.id+")")
            elemento.setAttribute("onmouseout","celulaMouseout("+elemento.id+")")
            elemento.setAttribute("onclick","celulaClick("+elemento.id+")")
            elemento.setAttribute("clicado","false")
        }
    }
}

criaTabela()
adicionaEventos()