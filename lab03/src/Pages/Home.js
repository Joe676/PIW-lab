import { useState } from 'react';

const Home = (props) => {
    const {offers} = props;

    const [searchDesc, setSearchDesc] = useState("");
    const [searchTag, setSearchTag] = useState("");
    const [searchSubject, setSearchSubject] = useState("");
    
    const [shownOffers, setShownOffers] = useState(offers);

    const handleSearchDescInput = (event) => {
        setSearchDesc(event.target.value);
    }

    const handleSearchTagInput = (event) => {
        setSearchTag(event.target.value);
    }

    const handleSearchSubjectInput = (event) => {
        setSearchSubject(event.target.value);
    }

    const handleSearch = (event) => {
        console.log(searchDesc)
        setShownOffers(offers.filter((offer) => {
            return (searchDesc===""?true:offer.description.toLowerCase().includes(searchDesc.toLowerCase())) &&
                (searchTag===""?true:offer.tags.map((tag => tag.toLowerCase())).includes(searchTag.toLowerCase())) &&
                (searchSubject===""?true:offer.subject.toLowerCase().includes(searchSubject.toLowerCase()));
        }))
    }
    
    const offersHTML = shownOffers.map((offer, i) => {
        return <li key={i}>{offer.toHTML(i)}</li>
    });

    return (
        <>
            <label htmlFor='desc'>Opis</label>
            <input id='desc' value={searchDesc} onChange={handleSearchDescInput}></input>

            <label htmlFor='tag'>Tagi</label>
            <input id='tag' value={searchTag} onChange={handleSearchTagInput}></input>

            <label htmlFor='subj'>Przedmioty</label>
            <input id='subj' value={searchSubject} onChange={handleSearchSubjectInput}></input>

            <input type="button" value={"Szukaj"} onClick={handleSearch}></input>
            <ul className='offers-list'>
                {offersHTML}
            </ul>
        </>
    );
}

export default Home;