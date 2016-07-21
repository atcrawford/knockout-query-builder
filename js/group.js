window.QueryBuilder = (function(exports, ko) {

    var Condition = exports.Condition;

    function Group() {
        var self = this;

        self.fields = ko.observableArray(['Points', 'Goals', 'Assists', 'Shots', 'Shot%', 'PPG', 'SHG', 'Penalty Mins']);
        self.comparisons = ko.observableArray(['=', '<>', '<', '<=', '>', '>=']);
        self.logicalOperators = ko.observableArray(['AND', 'OR']);

        self.templateName = 'group-template';
        self.children = ko.observableArray();

        // give the group a single default condition
        self.children.push(new Condition());

        self.addCondition = function() {
            self.children.push(new Condition());
        };

        self.addGroup = function() {
            self.children.push(new Group());
        };

        self.removeChild = function(child) {
            self.children.remove(child);
        };

        self.childrenChanged = ko.computed(function() {
            console.log(ko.toJS(self.children()));
        })

        // the text() function is just an example to show output
        self.text = ko.computed(function() {
            var result = '(';
            var op = '';

            for (var i = 0; i < self.children().length; i++) {
                var child = self.children()[i];
                result += op + child.text();
            }
            return result += ')';
        });
    }

    exports.Group = Group;
    return exports;

})(window.QueryBuilder || {}, window.ko);