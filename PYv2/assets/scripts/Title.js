var i=0;
setInterval(function(){
    var titles=[
        "|",
        "||",
        "|P|",
        "|Pr|",
        "|Pro|",
        "|Proy",
        "|Proye|",
        "|Proyec|",
        "|Proyec|",
        "|Proyec |",
        "|Proyect <|",
        "|Proyecto <3|",
        "|Proyecto Y <3",
        "|Proyecto Y <3|",
        "|Proyecto <3",
        "|Proyecto<3|",
        "|Proyect<|",
        "|Proyect|",
        "|Proyec |",
        "|Proyect|",
        "|Proyec|",
        "|Proye|",
        "|Pro|",
        "|Pr|",
        "|P|",
        "||",
        "|",
    ];

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 400);