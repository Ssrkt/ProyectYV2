var i=0;
setInterval(function(){
    var titles=[
"||",
"|",
"|P|",
"|Pa|",
"|Pag|",
"|Pagi",
"|Pagin|",
"|Pagina|",
"|Pagina|",
"|Pagina |",
"|Pagina <|",
"|Pagina <3|",
"|Pagina <3",
"|Pagina <3|",
"|Pagina <3",
"|Pagina <3|",
"|Pagina <|",
"|Pagina |",
"|Pagina|",
"|Pagin|",
"|Pagina|",
"|Pagin",
"|Pag|",
"|Pa|",
"|P|",
"||",
"|",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 400);