#BBC Sounds Automation Test

##Introduction

JavaScript browser automation framework using official selenium-webdriver and cucumber-js. This framework contains a few acceptance tests for BBC Sounds Homepage.

##Installation

Node needs to be installed before this project is installed. 

**Node installation:** https://blog.teamtreehouse.com/install-node-js-npm-mac 

**Project installation:** 

```bash
npm install selenium-cucumber-js --save-dev
```

## Run the tests

```bash
node index.js -f features/sounds-homepage.feature
```

By default tests are run using Google Chrome, to run tests using another browser supply the name of that browser along with the `-b` switch. Available options are:

Browser    | Example
---------- | ---------------
Chrome     | `-b chrome`
Firefox    | `-b firefox`


### Directory structure

You can use the framework without any command line arguments if your application uses the following folder structure:

```bash
.
├── features
│   └── sounds-homepage.feature
│   └── all-stations.feature
├── step-definitions
│   └── sounds-homepage-steps.js
├── page-objects
│   └── sounds-homepage.js
└── shared-objects
│   ├── test-data.js
│   └── stuff.json
└── reports
    ├── cucumber-report.json
    └── cucumber-report.html
```

##Feature files:

- The scenarios that were already written in Part 1 of the test are all automated and tagged ```@part1```. 
- Gerkhin scenarios are written for the acceptance criteria mentioned in Part 2 and are tagged ```@part2```.
- Non automated scenarios are tagged```@todo```.
- Scenarios are distributed across 2 feature files(```./features/sounds-homepage.feature``` and ```./features/all-stations.feature```) depending on sounds homepage and all stations page scenarios. 

##Step Definitions

- All the step definitions for the automated scenarios are written in ```./step-definitions/sounds-homepage-steps.js ```.
- Comments written on every step to explain what happens in the step.

##Page Objects



##Reports

HTML and JSON reports are automatically generated and stored in  ```bash ./reports ``` folder


# sounds-technical-test
# sounds-technical-test
# sounds-technical-test
