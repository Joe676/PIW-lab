import React from "react";
import Group from "../Models/Group";
import GroupOffer from "../Models/GroupOffer";
import Student from "../Models/Student";

class AddGroupOffers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            students: "",
            description: "",
            subject: "",
            tags: "",
            newOffer: new GroupOffer(new Group("", []), "", "")
        };
    }

    handleNewStudentInput = (event) => {
        switch (event.target.id) {
            case 'name':
                this.setState({
                    name: event.target.value,
                    newOffer: new GroupOffer(new Group(event.target.value, this.state.students.split(",").map((s) => new Student(s, ""))), this.state.description, this.state.subject, this.state.tags.split(","))
                });
                break;
        
            case 'students':
                this.setState({
                    students: event.target.value,
                    newOffer: new GroupOffer(new Group(this.state.name, event.target.value.split(",").map((s) => new Student(s, ""))), this.state.description, this.state.subject, this.state.tags.split(","))
                });
                break;

            case 'description':
                this.setState({
                    description: event.target.value,
                    newOffer: new GroupOffer(new Group(this.state.name, this.state.students.split(",").map((s) => new Student(s, ""))), event.target.value, this.state.subject, this.state.tags.split(","))
                });
                break;

            case 'subject':
                this.setState({
                    subject: event.target.value,
                    newOffer: new GroupOffer(new Group(this.state.name, this.state.students.split(",").map((s) => new Student(s, ""))), this.state.description, event.target.value, this.state.tags.split(","))
                });
                break;
            
            case 'tags':
                this.setState({
                    tags: event.target.value,
                    newOffer: new GroupOffer(new Group(this.state.name, this.state.students.split(",").map((s) => new Student(s, ""))), this.state.description, event.target.value, event.target.value.split(","))
                });
                break;
        }
    }

    handleSave = () => {
        this.props.setOffers(this.props.offers.concat(this.state.newOffer));
    }

    render(){

        return(
            <>
                <label htmlFor='name' className='add-element'>Nazwa:</label>
                <input id='name' className='add-element' value={this.state.name} onChange={this.handleNewStudentInput}></input>

                <label htmlFor='students' className='add-element'>Studenci:</label>
                <input id='students' className='add-element' value={this.state.students} onChange={this.handleNewStudentInput}></input>
                
                <label htmlFor='description' className='add-element'>Opis:</label>
                <input id='description' className='add-element' value={this.state.description} onChange={this.handleNewStudentInput}></input>
                
                <label htmlFor='tags' className='add-element'>Tagi (rozdzielone przecinkami):</label>
                <input id='tags' className='add-element' value={this.state.tags} onChange={this.handleNewStudentInput}></input>

                <label htmlFor='subject' className='add-element'>Przedmiot:</label>
                <input id='subject' className='add-element' value={this.state.subject} onChange={this.handleNewStudentInput}></input>

                <input type="button" className='add-element nice-btn' value={"Zapisz"} onClick={this.handleSave}></input>
            </>
        )
    }
}

export default AddGroupOffers;