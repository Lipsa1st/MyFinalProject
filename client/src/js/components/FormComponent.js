var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./Table');
var FormComponent = React.createClass({
    getInitialState: function() {
        return({message:[]});
    },
    
    render: function(){
        if(this.state.message.length>0)
        {
            var dataTable=<Table message={this.state.message}/>;
        }
        return(
            <div>
            <div className="container-fluid" id="myForm">
                <form method="post" action="http://localhost:8080/saveBut" id="FormBorder">
                        Select list:
                        <select name="wave" className="form-control">
                            <option>---Select---</option>
                            <option>Wave 1</option>
                            <option>Wave 2</option>
                            <option>Wave 3</option>
                            <option>Wave 4</option>
                        </select>
                            Name:  <input type="text" name="name" className="form-control" />

                            Email:  <input type="text" name="email" className="form-control"/>

                            Phone:  <input type="text" name="phone" className="form-control"/>

                            Git URL:  <input type="text" name="url" className="form-control"/>

                            EmpCode:  <input type="text" name="empcode" className="form-control"/>

                            Empdept:  <input type="text" name="empDep" className="form-control"/>

                            EmpDesig:  <input type="text" name="empDesig" className="form-control"/>

                            Skills:  <textarea rows="4" cols="4" name="skills" id="comment" className="form-control"></textarea>

                            Experience:  <input type="text" name="exp" className="form-control"/><br/>

                            <input type="submit" className="btn btn-warning" value="Submit" onClick={this.getData}/>
                </form>
                </div>
                <div className="container">
                    {dataTable}
                </div>
        </div>
        );
    },

    getData: function()
        {
            console.log("getdata is called");
            $.ajax({
                url: 'http://localhost:8080/showData',
                dataType: 'json',
                type: 'GET',
                success: function(response){
                    //console.log(response);
                    this.setState({message:response});
                    console.log(this.state.message);
                }.bind(this),
                error: function(xhr, status, err){
                    console.error(err.toString());
                }.bind(this)
            });
        },
})
module.exports = FormComponent
