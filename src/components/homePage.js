"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>PluralSight Administration</h1>
                <p>React, React Rouyter, and Flux for ultra-responsive web apps.</p>
            </div>
            );
    }
});

module.exports = Home;