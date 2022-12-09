/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++Beispiel: Impressum öffnen im IQB-Testcenter Testserver+++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

const { Builder, By, Key, until } = require('selenium-webdriver');
const utils = require('../utils.js');
let chai = require('chai');
let { assert, should, expect } = require('chai');

//schreibe die Angaben aus utils.js in diese Variablen
const URL = utils.InitTest.url;
const BROWSER = utils.InitTest.browser;

describe('Impressum Funktion', function () {
        //Starte Webdriverinstanz
        let driver;

        //tue etwas bevor alle Testschritte (it's) ausgeführt werden
        before(async function () {
            driver = await new Builder().forBrowser(BROWSER).build();
            //Öffne angegebene Webadresse
            await driver.get(URL);
         });
        
        //Tue etwas nach Durchführung aller Testschritte (it's)
        after(async function () {
                //Zerstöre Webdriver Instanz
                await driver.quit();
        });

        //tue etwas vor jedem Testschritt
        beforeEach(async function () {
         
        });

        //Öffnen der Impressumseite
        it('öffne Impressum', async function () {
                
                //Warte explizit bis die Impressumseite vollständig geladen und Element sichtbar ist.
                //Führe erst dann einen Befehl auf dieses Element aus
                let loadedElImpres = await driver.wait(until.elementLocated(By.xpath("/html/body/tc-root/ng-component/div/ng-component/div/mat-card/mat-card-actions/a")),10000, "Timeout: Element:Impressum nicht gefunden");
                loadedElImpres.click();

                //warte explizit auf ein Element welches nur auf der Impressumseite angezeigt wird
                await driver.wait(until.elementLocated(By.xpath("/html/body/tc-root/ng-component/div/div/mat-card/mat-card-actions/button")),10000, "Timeout: Element:Zurück zur Startseite nicht gefunden");

                //Abschlussbedingung: Prüfe ob Impressumseite geöffnet: Es müsste sich die URL entsprechend geändert haben
                let actualUrl = await driver.getCurrentUrl();
                //Erwartet wird nun die Adresse der Impressumseite
                let expectedUrl = "https://testcenter.iqb.hu-berlin.de/#/legal-notice";
                //Überprüfung der Erwartungen
                assert.equal(actualUrl, expectedUrl, "Impressumseite nicht vollständig geladen?.");
        
        });


        //Schließen der Impressumseite
        it('Schliesse Impressum', async function () {

                await driver.findElement(By.xpath("/html/body/tc-root/ng-component/div/div/mat-card/mat-card-actions/button")).click();
                
                //Warte explizit bis Startseite vollständig geladen und Element sichtbar ist.
                await driver.wait(until.elementLocated(By.xpath("/html/body/tc-root/ng-component/div/ng-component/div/mat-card/mat-card-actions/a")),10000, "Timeout: Element:Impressum nicht gefunden");
                
                //Abschlussbedingung: Prüfe ob wieder auf der Startseite
                let actualUrl = await driver.getCurrentUrl();
                //Erwartet wird nun die Adresse der Startseite
                let expectedUrl = "https://testcenter.iqb.hu-berlin.de/#/r/login/";
                //Überprüfung der Erwartungen
                assert.equal(actualUrl, expectedUrl, "Startseite nicht vollständig geladen?.");
                
        });

});

