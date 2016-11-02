/**
 * Created by Nick-Development on 11/1/2016.
 */
//tutorial: https://egghead.io/lessons/node-js-intro-to-web-scraping-with-node-and-x-ray

var Xray = require("x-ray");

var xray = new Xray();

xray('http://google.com','a',
    [
        {
            a: '',
            href: '@href',
            css: '@class'
        }
    ]
)
.write('results.json');
