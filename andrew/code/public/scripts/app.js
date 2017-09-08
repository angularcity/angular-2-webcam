'use strict';

console.log('App.js loaded');

var user = {
    name: 'hari',
    age: 32,
    location: 'Kochin'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        '   ',
        user.name ? user.name : 'Anonymous',
        ' '
    ),
    React.createElement(
        'h1',
        null,
        '  ',
        user.age,
        ' '
    ),
    getLocation(user.location)
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' Location ',
            location,
            ' '
        );
    } else {
        return undefined;
    }
}

ReactDOM.render(template, document.getElementById('root'));
