/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
define([
    "basic/array-keyword", "basic/synonyms", "basic/diacritics"
], function () {
    describe("basic mark with synonyms and diacritics", function () {
        var $ctx;
        beforeEach(function (done) {
            loadFixtures("basic/synonyms-diacritics.html");

            $ctx = $(".basic-synonyms-diacritics");
            new Mark($ctx[0]).mark(["dolor", "amet"], {
                "diacritics": true,
                "separateWordSearch": false,
                "synonyms": {
                    "dolor": "justo"
                },
                "done": done
            });
        });

        it("should find synonyms with diacritics", function () {
            expect($ctx.find("mark")).toHaveLength(13);
        });
    });
});
