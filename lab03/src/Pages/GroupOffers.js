import React from "react";

class GroupOffers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            queryDesc: "",
            queryTag: "",
            querySubject: "",
            shownOffers: props.groupOffers
        };
    }

    handleSearchDescInput = (event) => {
        this.setState({
            queryDesc: event.target.value 
        })
    }

    handleSearchTagInput = (event) => {
        this.setState({
            queryTag: event.target.value 
        })
    }

    handleSearchSubjectInput = (event) => {
        this.setState({
            querySubject: event.target.value 
        })
    }

    render(){
        const offersHTML = this.props.groupOffers
        .filter((offer) => {
            return (this.state.queryDesc===""?true:offer.description.toLowerCase().includes(this.state.queryDesc.toLowerCase())) &&
                (this.state.queryTag===""?true:offer.tags.map((tag => tag.toLowerCase())).includes(this.state.queryTag.toLowerCase())) &&
                (this.state.querySubject===""?true:offer.subject.toLowerCase().includes(this.state.querySubject.toLowerCase()));
        })
        .map((offer, i) => {
            return <li key={i}>{offer.toHTML(i)}</li>
        });
        return (<div>
            <h2>Oferty Grup</h2>

            <label htmlFor='desc'  className='search-element'>Opis:</label>
            <input id='desc' className='search-element' value={this.state.queryDesc} onChange={this.handleSearchDescInput}></input>

            <label htmlFor='tag' className='search-element'>Tagi:</label>
            <input id='tag' className='search-element' value={this.state.queryTag} onChange={this.handleSearchTagInput}></input>

            <label htmlFor='subj' className='search-element'>Przedmioty:</label>
            <input id='subj' className='search-element' value={this.state.querySubject} onChange={this.handleSearchSubjectInput}></input>

            <ul>{offersHTML}</ul>
            </div>);
    }
}

export default GroupOffers;