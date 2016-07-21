window.QueryBuilder = (function(exports, ko) {

    function Condition() {
        var self = this;

        self.templateName = 'condition-template';

        self.selectedField = ko.observable('Points');
        self.selectedComparison = ko.observable('=');
        self.selectedLogicalOperator = ko.observable('AND');

        self.value = ko.observable(0);

        self.IsNotLastChild = function(index, parentArrayLength) {
            return index !== (parentArrayLength - 1);
        }

        // the text() function is just an example to show output
        self.text = ko.computed(function() {
            return self.selectedField() +
                ' ' +
                self.selectedComparison() +
                ' ' +
                self.value() +
                ' ' +
                self.selectedLogicalOperator() +
                ' ';
        });
    }

    exports.Condition = Condition;
    return exports;

})(window.QueryBuilder || {}, window.ko);