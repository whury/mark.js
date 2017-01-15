/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
define(function () {
    describe("basic mark with multiple blanks", function () {
        var $ctx1, $ctx2;
        beforeEach(function (done) {
            loadFixtures("basic/merge-blanks.html");

            $ctx1 = $(".basic-merge-blanks > div:nth-child(1)");
            $ctx2 = $(".basic-merge-blanks > div:nth-child(2)");
            new Mark($ctx1[0]).mark("lorem  ipsum", {
                "diacritics": false,
                "separateWordSearch": false,
                "done": function () {
                    new Mark($ctx2[0]).mark("lorem ipsum", {
                        "diacritics": false,
                        "separateWordSearch": false,
                        "done": done
                    });
                }
            });
        });

        it(
            "should wrap matches regardless of the number of blanks",
            function () {
                expect($ctx1.find("mark")).toHaveLength(4);
                expect($ctx2.find("mark")).toHaveLength(4);
            }
        );
    });
});
