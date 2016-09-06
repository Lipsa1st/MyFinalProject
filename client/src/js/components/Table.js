var React = require('react');
var ReactDOM = require('react-dom');
var Table = React.createClass({
render: function(){
    var getData = this.props.message.map(function(messages){
        return(
            <tr>
              <td>{messages.wave}</td>
              <td>{messages.name}</td>
              <td>{messages.email}</td>
              <td>{messages.phone}</td>
              <td>{messages.empcode}</td>
              <td>{messages.url}</td>
              <td>{messages.empDep}</td>
              <td>{messages.empDesig}</td>
              <td>{messages.skills}</td>
              <td>{messages.exp}</td>
            </tr>
        );
    });

    return(
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>WaveNo</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Git Url</th>
                    <th>Emp Code</th>
                    <th>Emp Department</th>
                    <th>Emp Designation</th>
                    <th>Emp Skills</th>
                    <th>Experience</th>
                </tr>
            </thead>
            <tbody>
                {getData}
            </tbody>
        </table>
    );
}
});
module.exports = Table;
