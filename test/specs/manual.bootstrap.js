/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
var specs = [
    [ // essential for all other tests
        "basic/done",
        "basic/main"
    ],
    [ // basic
        "basic/accuracy-complementary-limiters",
        "basic/accuracy-complementary",
        "basic/accuracy-exactly-limiters",
        "basic/accuracy-exactly",
        "basic/accuracy-partially",
        "basic/array-keyword",
        "basic/case-sensitive-diacritics",
        "basic/case-sensitive-synonyms-diacritics",
        "basic/case-sensitive-synonyms",
        "basic/case-sensitive",
        "basic/context-array",
        "basic/context-direct",
        "basic/context-nodelist",
        "basic/context-string",
        "basic/custom-element-class-unmark",
        "basic/custom-element-class",
        "basic/debug",
        "basic/diacritics",
        "basic/duplicate-context",
        "basic/duplicate-keyword",
        "basic/each",
        "basic/empty",
        "basic/entities",
        "basic/escape",
        "basic/events",
        "basic/exclude",
        "basic/filter",
        "basic/ignore-joiners-diacritics",
        "basic/ignore-joiners-escape",
        "basic/ignore-joiners-synonyms-diacritics",
        "basic/ignore-joiners-synonyms",
        "basic/ignore-joiners",
        "basic/jquery",
        "basic/large-document",
        "basic/manipulated-mark",
        "basic/merge-blanks",
        "basic/no-match",
        "basic/no-options",
        "basic/partial-duplicate-words",
        "basic/same-keywords",
        "basic/script-style",
        "basic/separate-word-search",
        "basic/synonyms-diacritics",
        "basic/synonyms-merge-blanks",
        "basic/synonyms-no-match",
        "basic/synonyms",
        "basic/unmark-exclude",
        "basic/unmark-jquery",
        "basic/unmark"
    ]
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
        (function asyncCallback(idx) { // require specs in the array order
            if(typeof specs[idx] === "undefined") {
                // trigger Jasmine
                window.onload();
            } else {
                require(specs[idx], function () {
                    asyncCallback(++idx);
                });
            }
        })(0);
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
