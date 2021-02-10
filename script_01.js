
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
    console.log("Hallo Drazen!");
}

// Funktionsaufruf (call)
//test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{    
    let firstName = "Drazen"; // Variable
    console.log("Hallo " + firstName + " !");
}

//ausgabeNamen();
//console.log(firstName); // Fehler --> lokal

/***** Funktionen 02b *****/
// 2a. Parametrisierung + Datenübergabe von AUSSEN
/*
function ausgabeNamen(firstName) 
{    
    if (firstName == undefined) {
        firstName = "nobody";
    }
    console.log("Hallo " + firstName + "!");
}

ausgabeNamen("Drazen"); // Argument / ext. Daten
ausgabeNamen("Jenny");
ausgabeNamen(); // Fehler, keine Daten ....
ausgabeNamen(prompt("Bitte Namen eingeben!"));
*/

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName, familyName) 
{    
    console.log("Hallo " + firstName + " " + familyName + "!");
}

// ausgabeNamenParams("Drazen", "Savi");
// ausgabeNamenParams("Savi", "Drazen");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Name?"))

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

function ausgabeNamenParams2(firstName, familyName) 
{    
    // 1. Job: string composing
    let gap = " ";
    let outputStr = "Hallo" + gap + firstName + gap + familyName + "!";

    // 2. Job: output
    console.log(outputStr);
}

// ausgabeNamenParams2("Drazen", "Savi");

/***** Funktionen 03b *****/

ausgabe(getStr("Drazen", "Savi"));
function getStr(firstName, familyName) {
    let gap = " ";
    let outputStr = "Hallo" + gap + firstName + gap + familyName + "!";
    return outputStr;
}


/** 2. Job: Ausgabe **/
//ausgabe("hi"); // Unit-Test | TDD (Test Driven Development)
function ausgabe(outputStr) {
    console.log(outputStr); 
}


