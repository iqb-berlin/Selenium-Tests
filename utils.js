

//Grundeinstellung für den Test
let InitTest = {
    //Testobjekt
    "url" : "https://testcenter.iqb.hu-berlin.de/#/r/login/",
    
    //Hier können die folgenden Browser gewählt werden: MicrosoftEdge, chrome, firefox
    //Bitte genau so eintragen (Groß-Kleinschreibung beachten)
    "browser" : "firefox"
}

//Daten Superadmin
let LoginSuperAdmin = {

    "user" : "xxx",
    "pw" : "xxx",

}

//Daten User*innen
let LoginUser = {

    "user" : "xxx",
    "pw" : "xxx",

}

module.exports = {

    LoginSuperAdmin,
    LoginUser,
    InitTest
}