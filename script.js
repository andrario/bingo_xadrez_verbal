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
    "5ª Série",
    "Gloriosa República de Vanuatu",
    "Bezuntadão de Tonga",
    "Eleições em Israel",
    "Referência obscura",
    "Franceses queimam carros",
    "Nostalgia da FFLCH",
    "\"DOUBLE FUCKING BREAKING NEWS!\"",
    "Erdogolum",
    "Menção a outro programa da Central 3",
    "Gafe de lider de governo",
    "Guerra &#128577",
    "Doce de leite",
    "\"Urso é um cachorrão\"",
]

let quina = false

function criaListaFrases(){
    let listaFrases = []
    let tamanho = 0
    while(tamanho<24){
        indiceAleatorio = Math.floor(Math.random() * listaFrasesTotal.length)
        itemAleatorio = listaFrasesTotal[indiceAleatorio]
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
                conteudoTabela += "<td class=\"celulaBingo\" id="+indiceCelula+"><img id=\"imgCartela\" src=\"./XV.png\"/></td>"
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
    verificaCartela()
}

function adicionaEventos(){
    for(elemento of document.querySelectorAll(".celulaBingo")){
        if(elemento.id!=12){
            elemento.setAttribute("onmouseover","celulaMouseover("+elemento.id+")")
            elemento.setAttribute("onmouseout","celulaMouseout("+elemento.id+")")
            elemento.setAttribute("onclick","celulaClick("+elemento.id+")")
            elemento.setAttribute("clicado","false")
        }
        else{
            elemento.setAttribute("clicado","true")
        }
    }
}

function verificaLinha(estilos,i){
    i*=5
    if(estilos[0+i] === "true" && estilos[1+i] === "true" && estilos[2+i] === "true" && estilos[3+i] === "true" && estilos[4+i] === "true"){
        return true
    }
    return false
}

function verificaColuna(estilos,i){
    if(estilos[0+i] === "true" && estilos[5+i] === "true" && estilos[10+i] === "true" && estilos[15+i] === "true" && estilos[20+i] === "true"){
        return true
    }
    return false
}

function verificaCartela(){
    estilos = []
    vitoria = 0
    for(item of document.querySelectorAll(".celulaBingo")){
        estilos.push(item.getAttribute('clicado'))
    }
    for(i=0;i<5;i++){
        if( verificaLinha(estilos,i) === true){ vitoria++ }
        if( verificaColuna(estilos,i) === true){ vitoria++ }
    }
    // debugger
    if(vitoria>0){
        if(vitoria==10){
            // window.alert("Cartela cheia!")
            document.getElementById("imgCartela").style.animation = 'giro 5s linear 5'
        }
        else if(quina==false){
            // window.alert("Quina!")
            document.getElementById("imgCartela").style.animation = 'giro 2s linear 1'
            quina = true
        }
        else{
            document.getElementById("imgCartela").style.animation = 'para 1s linear 1'
        }
    }
    else{
        document.getElementById("imgCartela").style.animation = 'para 1s linear 1'
        quina = false
    }
}

criaTabela()
adicionaEventos()