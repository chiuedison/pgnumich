var eboardlist = document.getElementById("eboard-list");
var eboardnames = document.getElementById("bro-list-eboard-names");
var eboardtitles = document.getElementById("bro-list-eboard-titles");
var eboardyears = document.getElementById("bro-list-eboard-years");
var eboardtexts = document.getElementById("bro-list-eboard-texts");
var eboardlinkedins = document.getElementById("bro-list-eboard-linkedins");
var eboardemails = document.getElementById("bro-list-eboard-emails");


eboardnames = eboardnames.innerHTML.toString().split(";");
eboardtitles = eboardtitles.innerHTML.toString().split(";");
eboardyears = eboardyears.innerHTML.toString().split(";");
eboardtexts = eboardtexts.innerHTML.toString().split(";");
eboardlinkedins = eboardlinkedins.innerHTML.toString().split(";");
eboardemails = eboardemails.innerHTML.toString().split(";");


var classnames = ["Nu", "Mu", "Lambda", "Kappa", "Iota", "Theta", "Eta"];
var brolists = [];

for (i = 0; i < classnames.length; ++i) brolists[i] = document.getElementById(classnames[i].toLowerCase());


var bronames = document.getElementById("bro-list-names");
var broyears = document.getElementById("bro-list-years");
var bromajors = document.getElementById("bro-list-majors");
var brolinkedins = document.getElementById("bro-list-linkedins");
            
bronames = bronames.innerHTML.toString().split("?");
for (let i = 0; i < bronames.length; ++i) bronames[i] = bronames[i].split(";");

broyears = broyears.innerHTML.toString().split("?");
for (let i = 0; i < broyears.length; ++i) broyears[i] = broyears[i].split(";");

bromajors = bromajors.innerHTML.toString().split("?");
for (let i = 0; i < bromajors.length; ++i) bromajors[i] = bromajors[i].split(";");

brolinkedins = brolinkedins.innerHTML.toString().split("?");
for (let i = 0; i < brolinkedins.length; ++i) brolinkedins[i] = brolinkedins[i].split(";");


// $(".eboard-card img").attr("src", "pgn-bro-list-data/pgn-bro-list-" + attr("name").toLowerCase().replace(" ", "-") + ".jpg");


// copies from eboard-card-template
function eboard_card (name, title, text, year, linkedin, email) {
    
    var outer = document.createElement("div");
    outer.setAttribute("class", "eboard-card");
    
    
    // create image
    var img = document.createElement("img");
    img.setAttribute("src", "pgn-bro-list-data/pgn-bro-list-" + name.toLowerCase().replace(" ", "-") + ".jpg");
    
    // create textbox
    var inner1 = document.createElement("div");
    inner1.setAttribute("class", "eboard-card-textbox");
    
    var h4 = document.createElement("h4");
    h4.innerHTML = name + " '" + year;

    var h5 = document.createElement("h5");
    h5.innerHTML = title;
    
    var p2 = document.createElement("p2");
    p2.innerHTML = text;
            
    // create refs
    var inner2 = document.createElement("div");
    inner2.setAttribute("class", "eboard-card-footer");
    
    var a1 = document.createElement("a");
    a1.setAttribute("class", "fa fa-linkedin");
    a1.setAttribute("href", "https://www.linkedin.com/in/" + linkedin);
    
    var a2 = document.createElement("a");
    a2.setAttribute("class", "fa fa-envelope-o");
    a2.setAttribute("href", "mailto:" + email + "@umich.edu");
    
    // build structure
    inner1.appendChild(h4), inner1.appendChild(h5), inner1.appendChild(p2);
    
    inner2.appendChild(a1), inner2.appendChild(a2);
    
    outer.appendChild(img), outer.appendChild(inner1), outer.appendChild(document.createElement("hr")), outer.appendChild(inner2);
    
    return outer;
}


// copies from brother-card-template
function brother_card (name, pc, year, major, linkedin) {
    
    var outer = document.createElement("div");
    outer.setAttribute("class", "brother-card");
    
    
    // create image
    var img = document.createElement("img");
    img.setAttribute("src", "pgn-bro-list-data/pgn-bro-list-" + name.toLowerCase().replace(" ", "-") + ".jpg");
    
    // create textbox
    var inner1 = document.createElement("div");
    inner1.setAttribute("class", "brother-card-textbox");
    
    var h4 = document.createElement("h4");
    h4.innerHTML = name + " '" + year;

    var h5 = document.createElement("h5");
    h5.innerHTML = major;
    
    // create refs
    var inner2 = document.createElement("div");
    inner2.setAttribute("class", "brother-card-footer");
    
    var a = document.createElement("a");
    a.setAttribute("class", "fa fa-linkedin");
    a.setAttribute("href", "https://www.linkedin.com/in/" + linkedin);
        
    // build structure
    inner1.appendChild(h4), inner1.appendChild(h5);
        
    inner2.appendChild(a);
    
    outer.appendChild(img), outer.appendChild(inner1), outer.appendChild(document.createElement("hr")), outer.appendChild(inner2);
    
    return outer;
}





var eboardbox = document.getElementById("eboard").getElementsByClassName("pc-container")[0];
for (let i = 0; i < eboardnames.length; ++i) {
    var card = eboard_card(eboardnames[i], eboardtitles[i], eboardtexts[i], eboardyears[i], eboardlinkedins[i], eboardemails[i]);
    eboardbox.appendChild(card);
}



for (let i = 0; i < bronames.length; ++i) {
    var pcbox = document.getElementById(classnames[i].toString().toLowerCase()).getElementsByClassName("pc-container")[0];
    for (let j = 0; j < bronames[i].length; ++j) {
        var card = brother_card(bronames[i][j], classnames[i], broyears[i][j], bromajors[i][j], brolinkedins[i][j]);
        pcbox.appendChild(card);
    }
}
