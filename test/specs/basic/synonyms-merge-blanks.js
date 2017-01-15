/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
define([
    "basic/array-keyword", "basic/synonyms", "basic/merge-blanks"
], function () {
    describe("basic mark with synonyms and multiple blanks", function () {
        var $ctx;
        beforeEach(function (done) {
            loadFixtures("basic/synonyms-merge-blanks.html");

            $ctx = $(".basic-synonyms-merge-blanks");
            new Mark($ctx[0]).mark(["dolor", "amet"], {
                "separateWordSearch": false,
                "diacritics": false,
                "synonyms": {
                    "dolor": "lorem  ipsum"
                },
                "done": done
            });
        });

        it("should merge blanks in synonyms", function () {
            expect($ctx.find("mark")).toHaveLength(4);
        });
    });
});
