var React = require('react');
var {Link} = require('react-router');
var NavBar =React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="/home">Home</Link></li>//to display the hyperlink and specifies the path of the route
                        <li><Link to="/manageparticipants">Manage Participants</Link></li>
                        <li><Link to="/view">View</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar
