describe("jQuery Entity Array plugin", function () {
    var ea;

    beforeEach(function () {
        setFixtures("<div id=\"entity-array\"/>");
        ea = $("#entity-array");
    });

    it("can be initialized", function () {
        ea.entityArray();
        expect(ea).toHaveClass("entity-array");
    });

    it("generates html for entities provided in options", function () {
        var children,
            entities = [
                {
                    id: 1,
                    name: 'Peter'
                },
                {
                    id: 2,
                    name: 'Paul'
                },
                {
                    id: 3,
                    name: 'Catherine'
                }
            ];

        ea.entityArray({
            entities: entities
        });

        children = ea.children()
        expect(children).toHaveLength(entities.length);

        $.each(entities, function (i) {
            expect($(children[i])).toHaveText(this.name);
            expect($('input', children[i])).toHaveValue(this.id);
        });
    });

    it("removes entities on click", function () {

    });

    it("has an add method", function () {

    });
});
