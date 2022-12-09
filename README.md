Use it to create some specific **E2E-tests** with **Selenium**. Excecute the created tests with virtual devices on **browserstack** or with your **local** browser. In the folder: **test** you can find some test examples. Use this code structure to create your spezific test in the same folder. Run your test with your preferred browser **local** or on **browserstack**.

[Here](https://www.selenium.dev/documentation/webdriver/) you can find more information about selenium webdriver.<br>
You find more examples in folder: **node_modules/selenium-webdriver/example**.

## Preconditions

* install an IDE (for example Visual Studio Code)
* install [git](https://git-scm.com/downloads)
* install [node.js](https://nodejs.org/de/download/)
* clone this repository
* run [npm i]() for install all dependencies

**to use local with Mocha-Reporting:**

* To run a test with a specific browser you have to download the [browser driver](https://www.npmjs.com/package/selenium-webdriver) an copy in your System-PATH (Systemvariable)
* Set the browser you want to test: **utils.js** / `browser`. Write the names of the browsers only as they are listed in the code comments.

**to use with Browserstack:**

* If you want to start a test with browserstack you need a browserstack account. After you have registered, you will receive authentification data. You have to enter authentification data in the configuration file **browserstack.yml** / `Username` and `access_key`. You can use several Browser and Devices with browserstack. Set the Browser and Devices in the same configuration file **browserstack.yml** / `browsers`.

## Start Testing

Start a test **local** with **Mocha-Reporting** or with **Browserstack**. For this enter the following commands in your CLI.

1. Start **local** with **Mocha-Reporting** <br>
It's possible to run seperates testfiles or all existing testfiles in test-folder. Currently there are two examples in test-folder. You can start the test cases individually with `npm run MC:Example1` , `npm run MC:Example2` or start all with `npm run MC:TestAll`. "MC" means Mocha!<br>
:information_source: For running a new created test-case in test-folder, add a new "MC"-script in **package.json** / `scripts`.<br>
:information_source: All reports will be saved in the **Reports**-folder.

2. Start with **Browserstack** <br>
It's possible to run seperates testfiles or all existing testfiles in test-folder. Currently there are two examples in test-folder. You can start the test cases individually with `npm run BS:Example1` , `npm run BS:Example2` or start all with `npm run BS:TestAll`. "BS" means Browserstack!<br>
:information_source: For running a new created test-case in test-folder, add a new "BS"-script in **package.json** / `scripts`.<br>
:information_source: Runs with browserstack are only possible if you have created a browserstack account. <br>
:information_source: Reports will be only saved by browserstack. There is no local report cache.

## to do

* Verzeichnispfad für Reports parametrierbar halten

---