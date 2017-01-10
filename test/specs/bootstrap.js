/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
var specs = [
    "basic/main"
];
requirejs.config({
    deps: [
        "jasmine-boot",
        "jasmine-jquery",
        "manual.conf",
        "jquery",
        "mark",
        "jquery.mark"
    ],
    callback: function () {
        require(specs, function () {
            // trigger Jasmine
            window.onload();
        });
    },
    paths: {
        "jquery": "../../vendor/jquery/dist/jquery.min",
        "mark": "../../dist/mark",
        "jquery.mark": "../../dist/jquery.mark",
        "jasmine": "../../vendor/jasmine/lib/jasmine-core/jasmine",
        "jasmine-html": "../../vendor/jasmine/lib/jasmine-core/jasmine-html",
        "jasmine-boot": "../../vendor/jasmine/lib/jasmine-core/boot",
        "jasmine-jquery": "../../vendor/jasmine-jquery/lib/jasmine-jquery"
    },
    shim: {
        "jasmine-html": {
            deps: ["jasmine"]
        },
        "jasmine-boot": {
            deps: ["jasmine-html"]
        },
        "jasmine-jquery": {
            deps: ["jquery", "jasmine-boot"]
        },
        "manual.conf": {
            deps: ["jasmine-jquery"]
        }
    }
});
