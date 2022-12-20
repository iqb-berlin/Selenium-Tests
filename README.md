Diese Umgebung kann verwendet werden, um E2E-tests mit Selenium einzurichten. Mittels dieser Umgebung ist es möglich Tests gegen emulierte Geräte auf Browserstack und gegen lokale Browser auszuführen. Im Ordner: *test* sind zwei Dateien mit den Namen: *Example1.js* und `*Example2.js* zu finden. Diese Dateien enthalten bsph. Testcode. Mittels dieser Vorlagen können weitere Tests im gleichen Ordner angelegt werden. Dazu muss eine weitere Datei mit gleicher Endung dem Ordner hinzugefügt werden und der gewünschte Testcode eingegeben werden. Abschließend kann der neue Test mit den unten aufgeführten Befehlen sowohl lokal als auch gegen Browserstack gestartet werden.

[Hier](https://www.selenium.dev/documentation/webdriver/) sind weitere Informationen zu Selenium-Webdriver zu finden.<br>
Weitere Beispiele finden Sie im Verzeichnis: *node_modules/selenium-webdriver/example*.

## Vorbedingungen

* installieren einer IDE (Bspw. Visual Studio Code)
* installieren von [Git](https://git-scm.com/downloads)
* installieren von [Node.js](https://nodejs.org/de/download/)
* klonen dieses Repositories
* Eingabe des Befehls [npm i]() um alle Abhängigkeiten zu installieren

**Für die lokale Benutzung mit Mocha-Berichten:**

* Um einen lokalen Test zu starten, muss zuvor der entsprechende [Webdriver](https://www.npmjs.com/package/selenium-webdriver) für den zu testenden Browser heruntergeladen werden. Anschließend muss der Speicherort dieses Treibers in den Systemvariablen (PATH) des Betriebssystems angegeben werden.
* Im Anschluss muss der zu testende Browser in der folgenden Datei: *utils.js* / `browser` angegeben werden. Der Name des gewünschten Browsers muss genauso geschrieben werden, wie in den Programmkommentaren an dieser Stelle angegeben ist.

**Für die Benutzung mit Browserstack:**

* Bevor eine Testung gegen Browserstack durchgeführt werden kann, wird ein Konto bei Browserstack benötigt. Nach der Anmeldung werden Authentifizierungsdaten präsentiert, die in der folgenden Datei eingetragen werden müssen: *browserstack.yml* / `Username` and `access_key`. In der gleichen Datei können die zu testenden Browser und Betriebssysteme unter: *browserstack.yml* / `browsers` angegeben werden.

## Starten der Testung

Zum starten einer lokalen Testung mit Mocha-Berichten oder mit Browserstack, müssen die nachfolgenden Befehle in die CLI eingegeben werden.

### Lokal starten mit Mocha-Berichten

Es ist möglich einzelne Tests zustarten oder alle im Ordner: *test* befindlichen gemeinsam. 

* Einzelnen Test starten: `npm run MC: Name der Testdatei`
* Alle Tests starten: `npm run MC:TestAll`

:information_source: Um einen neu angelegten einzelen Test zu starten, ist dieser hier: *package.json* / `scripts` mit dem Kürzel **MS** (Mocha) anzulegen.

:information_source: Alle Berichte werden im Ordner *Reports* gespeichert. Der letzte Bericht wird dabei vom aktuellen Bericht überschrieben.

### Starten mit Browserstack

Es ist möglich einzelne Tests zustarten oder alle im Ordner: *test* befindlichen gemeinsam.

* Einzelnen Test starten: `npm run BS:Name der Testdatei`
* Alle Tests starten: `npm run BS:TestAll`

:information_source: Um einen neu angelegten einzelnen Test zu starten, ist dieser hier: *package.json* / `scripts` mit dem Kürzel **BS** (Browserstack) anzulegen.

:information_source: Testen mit Browserstack ist nur möglich, wenn zuvor ein Konto bei Browserstack eingerichtet wurde!

:information_source: Berichte werden nur bei Browserstack gespeichert, es findet keine lokale Speicherung statt!