import React, {Component} from 'react';
import axios from 'axios';


export default class Edit extends Component{

    constructor(props){
            super(props);
            this.onChangPersonName =this.onChangPersonName.bind(this);
            this.onChangeBusinesName = this.onChangeBusinesName.bind(this);
            this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
            this.onSubmit =this.onSubmit.bind(this);

            this.state = {
                    person_name :'',
                    business_name :'',
                    business_nic_number : ''
            }
        }
    componentDidMount(){
        axios.get('http://localhost:4000/business/edit'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                person_name :response.data.person_name,
                business_name : response.data.business_name,
                business_nic_number :response.data.business_nic_number
            });
        })
        .catch(function(error){
            console.log(error);
        })
    }
   
    onChangPersonName(e){
     this.setState({
         person_name:e.target.value
     });
    }
    
    onChangBusinessName(e){
        this.setState({
            business_name:e.target.value
        });
       }

       
    onChangeNICNumber(e){

        this.setState({
            business_nic_number:e.target.value
        });
       }

    onSubmit(e){
        e.preventDefault();
        const obj ={
            person_name:this.state.person_name,
            business_name:this.state.business_name,
            business_nic_number:this.state.business_nic_number
        };
        axios.post('http://localhost:4000/business/update'+this.props.match.params.id,obj)
        .then(response => console.log(response.data));
        this.props.history.push('/index');
    }

    render(){
        return(
            <div>
                <p>Welcome to Edit Component</p>
            </div>
        )
    }
}
  