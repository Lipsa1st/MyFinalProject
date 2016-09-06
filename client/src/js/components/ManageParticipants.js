var React = require('react');
var ReactDOM = require('react-dom');
var FormComponent = require('./FormComponent');

var ManageParticipants = React.createClass({
    render: function(){
        return(
            <div className="row">
                <FormComponent />
            </div>

        );
    }
});
module.exports= ManageParticipants
