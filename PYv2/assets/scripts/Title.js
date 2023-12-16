const main_title = new String("Proyecto Y <3"); //'static String
var index = 0;
var string = "";
setInterval(change_title, 1000);


function change_title() {
    if (index < main_title.length) {
        string+=main_title[index];
        index+=1;
        console.log(string);
    } else {
        index = 0;
        string = "";
    }

    document.title = "|" + string + "|";

}