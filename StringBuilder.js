var SAF = SAF || {};

SAF.StringBuilder = function () {
    'use strict';

    var items = [];

    this.append = function (value) {
        if (value || value === 0) {
            items.push(value);
        }
        return this;
    };

    this.appendLine = function (value) {
        if (value || value === 0) {
            items.push(value + '\n');
        }
        return this;
    };

    this.appendFormat = function () {
        var value = arguments[0];

        for (var i = 0; i < arguments.length; i++) {
            if (value || value === 0) {
                value = value.replace('{' + (i - 1) + '}', arguments[i]);
            }
        }

        items.push(value);

        return this;
    };

    this.remove = function (value) {
        if (value || value === 0) {
            var args = arguments;
            var ax;

            while ((ax = items.indexOf(value)) !== -1) {
                items.splice(ax, 1);
            }
        }

        return this;
    };

    this.removeLine = function (value) {
        if (value || value === 0) {
            var ax;
            var target = value + '\n';

            while ((ax = items.indexOf(target)) !== -1) {
                items.splice(ax, 1);
            }
        }

        return this;
    };

    this.clear = function () {
        while (items.length > 0) {
            items.pop();
        }
        //items.splice(0, items.length);
        return this;
    };

    /**
     * @return {string}
     */
    this.toString = function () {
        if (items.length > 0) {
            return items.join('');
        }
        return '';
    };

    /**
     * @return {string}
     */
    this.toString2 = function () {
        var result = '';

        for (var i = 0; i < items.length; i++) {
            result += items[i];
        }

        return result;
    };
};

/**
 * @return {string}
 */
SAF.StringBuilder.prototype.version = function () {
    'use strict';
    return '1.0';
};
