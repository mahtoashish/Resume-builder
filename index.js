const express = require("express");
const pdf = require('html-pdf');
const expressLayouts = require('express-ejs-layouts');
const dynamicResume = require("./docs/dynamic-resume");
// const staticResume = require("./docs/static-resume");

const app = express();

// SETUP MIDDLEWARE
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const options = {
    height: "10.5in",        // allowed units: mm, cm, in, px
    width: "8in",
};

app.get('/', (req, res, next) => {
    res.render('home');
});

app.get('/resume-maker/:theme', (req, res, next) => {
    console.log("theme: ", req.params.theme);
    switch (req.params.theme) {
        case '1':
            res.render('resume-maker', { theme: "blue" });
            break;
        case '2':
            res.render('resume-maker', { theme: "green" });
            break;
        default:
            res.render('resume-maker', { theme: "green" });
            break;
    }
});

app.post('/resume-maker', (req, res, next) => {
    console.log(req.body);

    // Lowercase and process user name
    const userName = req.body.name;
    const lowerCaseName = userName.toLowerCase();
    const noSpaceName = lowerCaseName.replace(' ', '');
    const shortName = noSpaceName.slice(0, 10);
    console.log("short name: ", shortName);

    let themeOptions = {
        leftTextColor: "rgb(91, 88,255);",
        leftBackgroundColor: 'rgb(12,36,58);',
        wholeBodyColor: 'rgb(183,182,255);',
        rightTextColor: 'rgb(12,36,58);',
    };

    if (req.body.theme === 'blue') {

        // HTML to PDF conversion
        pdf.create(dynamicResume(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
            if (error) throw Error("File is not created");
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    } else if (req.body.theme === 'green') {
        themeOptions = {
            leftTextColor: "rgb(34,139,34);",
            leftBackgroundColor: 'rgb(0,100,0);',
            wholeBodyColor: 'rgb(144,238,144);',
            rightTextColor: 'rgb(0,100,0);',
        };
        // HTML to PDF conversion
        pdf.create(dynamicResume(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
            if (error) throw Error("File is not created");
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    } else {
        let themeOptions = {
            leftTextColor: "",
            leftBackgroundColor: '',
            wholeBodyColor: '',
            rightTextColor: '',
        };
        // HTML to PDF conversion
        pdf.create(dynamicResume(req.body, themeOptions), options).toFile(__dirname + "/docs/" + shortName + "-resume.pdf", (error, response) => {
            if (error) throw Error("File is not created");
            console.log(response.filename);
            res.sendFile(response.filename);
        });
    }


});



// app.get('/pdf-statics', (req, res, next) => {
//     // HTML to PDF conversion
//     pdf.create(staticResume(), options).toFile(__dirname + "/docs/static-resume.pdf", (error, response) => {
//         if (error) throw Error("File is not created");
//         console.log(response.filename);
//         res.sendFile(response.filename);
//     });
// })








const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Server is running on : ' + PORT));
