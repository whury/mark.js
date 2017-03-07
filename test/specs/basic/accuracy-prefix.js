/*!***************************************************
 * mark.js
 * https://github.com/julmot/mark.js
 * Copyright (c) 2014–2017, Julian Motz
 * Released under the MIT license https://git.io/vwTVl
 *****************************************************/
"use strict";
describe("basic mark with accuracy prefix", function () {
    var $ctx;
    beforeEach(function (done) {
        loadFixtures("basic/accuracy-prefix.html");

        $ctx = $(".basic-accuracy-prefix");
        new Mark($ctx[0]).mark("lorem", {
            "accuracy": "prefix",
            "separateWordSearch": false,
            "done": done
        });
    });

    it("should wrap only prefix matches", function () {
        expect($ctx.find("mark")).toHaveLength(2);
        $ctx.find("mark").each(function () {
            expect($(this).text()).toBe("Lorem");
        });
    });
});
