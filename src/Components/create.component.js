import React, {Component} from 'react';
 

export default class Create extends Component{ 

    constructor(props){
        super(props);
        this.onChangePersonName =this.onChangePersonName.bind(this);
        this.onChangeBusinessName= this.onChangeBusinessName.bind(this);
        this.onChangeNICnumber=this.onChangeNICnumber.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.setState={
            person_name: '',
            business_name: '',
            NIC_number:''
        }
    }
    onChangePersonName(e){
        this.setState({
            person_name:e.target.value
        });
    }
    onChangeBusinessName(e){
        this.setState({
            business_name:e.target.value
        });
    }
    onChangeNICnumber(e){
        this.setState({
            NIC_number:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        console.log(`The values are ${this.state.person_name},${this.state.business_name},and ${this.state.NIC_number}`)
        this.setState({
            person_name: '',
            business_name: '',
            NIC_number:''
        })
    }


    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Add Person Name : </label>
                        <input type ="text" className ="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name : </label>
                        <input type ="text" className ="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add NIc Name : </label>
                        <input type ="text" className ="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value ="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
  
 