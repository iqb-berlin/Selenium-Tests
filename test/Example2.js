/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Beispiel einer An-Abmeldung am IQB-Testcenter Testserver+++++++++++++++++++++++++++++++++++++++++++++++++++
++++++++++++++++++++++++++++++++++++++++++++++++es sind zuvor entsprechende Zugangsdaten in utils.js einzutragen++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

const { Builder, By, Key, until } = require('selenium-webdriver');
const utils = require('../utils.js');
let chai = require('chai');
let { assert, should, expect } = require('chai');

//schreibe die Angaben aus utils.js in diese Variablen
const URL = utils.InitTest.url;
const BROWSER = utils.InitTest.browser;

describe('Login-Logout Procedure', function () {
        //Starte Webdriverinstanz
        let driver;

        //tue etwas vor allen Testschritten
        before(async function () {
                
        });

        //tue etwas vor jedem Testschritt (it)
        beforeEach(async function () {
                driver = await new Builder().forBrowser(BROWSER).build();
                //Öffne angegebene Webadresse
                await driver.get(URL);
                
        });

        //Tue etwas nach jedem Testschritt (it)
        afterEach(async function () {
                //Zerstöre Webdriver Instanz
                await driver.quit();
        });

        //Anmelden als Admin
        it('LoginAsAdmin', async function () {

                //schreibe die Angaben aus utils.js in diese Variablen
                const USERNAME = utils.LoginSuperAdmin.user;
                const KENNWORT = utils.LoginSuperAdmin.pw;

                //Warte explizit bis Seite vollständig geladen und erwartetes Element vorhanden ist,
                //für erst dann einen Befehl für dieses Element aus
                let loadedElement = await driver.wait(until.elementLocated(By.id("mat-input-0")),10000, "Timeout: Element:Benutzername nicht gefunden");
                loadedElement.click();
                
                //Eingabe Logindaten
                await driver.findElement(By.id("mat-input-0")).sendKeys(USERNAME);
                await driver.findElement(By.id("mat-input-1")).click();
                await driver.findElement(By.id("mat-input-1")).sendKeys(KENNWORT);
                //Klick auf Login als Admin
                await driver.findElement(By.css("[data-cy=\"login-admin\"]")).click();

                //warte explizit auf ein Element welches nur bei erfolgreicher Anmeldung angezeigt wird
                await driver.wait(until.elementLocated(By.css("[data-cy=\"logout\"]")),10000, "Timeout: Element:Logout nicht gefunden");

                //Abschlussbedingung: Prüfe ob Anmeldug als Admin erfolgreich: Es müsste sich die URL entsprechend geändert haben
                let actualUrl = await driver.getCurrentUrl();
                let expectedUrl = "https://testcenter.iqb.hu-berlin.de/#/r/admin-starter";
                assert.equal(actualUrl, expectedUrl, "Anmeldung nicht erfolgreich? Folgeseite erscheint nicht.");
                
        });


        //Anmelden als User
        it('LoginAsUser and Logout Procedure', async function () {

                //schreibe die Angaben aus utils.js in diese Variablen
                const USERNAME = utils.LoginUser.user;
                const KENNWORT = utils.LoginUser.pw;

                //Warte explizit bis Seite vollständig geladen und erwartetes Element vorhanden ist,
                //für erst dann einen Befehl für dieses Element aus
                let loadedElement = await driver.wait(until.elementLocated(By.id("mat-input-0")),10000, "Timeout: Element nicht gefunden");
                loadedElement.click();

                //Eingabe Login Daten
                await driver.findElement(By.id("mat-input-0")).sendKeys(USERNAME);
                await driver.findElement(By.id("mat-input-1")).click();
                await driver.findElement(By.id("mat-input-1")).sendKeys(KENNWORT);
                await driver.findElement(By.css("[data-cy=\"login-user\"]")).click();

                //warte explizit auf ein Element welches nur bei erfolgreicher Anmeldung angezeigt wird
                await driver.wait(until.elementLocated(By.css("[data-cy=\"logout\"]")),10000, "Timeout: Element nicht gefunden");

                //Prüfe ob Anmeldug als User erfolgreich: URL muss sich geändert haben
                let actualUrl_1 = await driver.getCurrentUrl();
                let expectedUrl_1 = "https://testcenter.iqb.hu-berlin.de/#/r/test-starter";
                assert.equal(actualUrl_1, expectedUrl_1, "Anmeldung nicht erfolgreich? Folegseite erscheint nicht.");

                //Abmeldung
                await driver.findElement(By.css("[data-cy=\"logout\"]")).click();

                //warte explizit auf ein Element welches nur bei erfolgreicher Abmeldung angezeigt wird
                await driver.wait(until.elementLocated(By.css("[data-cy=\"login-user\"]")),10000, "Timeout: Element nicht gefunden");

                 //Abschlussbedingung: Prüfe ob Abmeldug als User erfolgreich: URL muss sich geändert haben
                 let actualUrl_2 = await driver.getCurrentUrl();
                 let expectedUrl_2 = "https://testcenter.iqb.hu-berlin.de/#/r/login/";
                 assert.equal(actualUrl_2, expectedUrl_2, "Abmeldung nicht erfolgreich? Startseite erscheint nicht.");

                 

        });

});

