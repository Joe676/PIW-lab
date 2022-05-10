import { useState } from 'react';
import Student from '../Models/Student';
import StudentOffer from '../Models/StudentOffer';

const AddOffer = (props) => {
    const {offers, setOffers} = props;
    const [newStudentOffer, setNewStudentOffer] = useState(
        new StudentOffer("", [], "", 
        new Student("", "")));

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    
    const [tmpTags, setTmpTags] = useState("");

    const handleNewStudentInput = (event) => {
        switch (event.target.id) {
            case 'name':
                setName(event.target.value);
                break;
        
            case 'mail':
                setMail(event.target.value);
                break;

            case 'description':
                setDescription(event.target.value);
                break;

            case 'subject':
                setSubject(event.target.value);
                break;
        }
        setNewStudentOffer(new StudentOffer(description, tmpTags.split(","), subject, new Student(name, mail)));
        console.log({newStudentOffer});
    }

    const handleTagsInput = (event) => {
        setTmpTags(event.target.value);
        var tmp = newStudentOffer;
        tmp.tags = tmpTags.split(",").map((tag) => tag.trim());
        setNewStudentOffer(tmp);
        
        console.log({newStudentOffer});
    }

    const handleSave = (event) => {
        setOffers(offers.concat(newStudentOffer));
        console.log(offers);
    }

    return (
        <>
            <label htmlFor='name'>Imie</label>
            <input id='name' value={name} onChange={handleNewStudentInput}></input>

            <label htmlFor='mail'>E-Mail</label>
            <input id='mail' value={mail} onChange={handleNewStudentInput}></input>
            
            <label htmlFor='description'>Opis</label>
            <input id='description' value={description} onChange={handleNewStudentInput}></input>
            
            <label htmlFor='tags'>Tagi (rozdzielone przecinkami)</label>
            <input id='tags' value={tmpTags} onChange={handleTagsInput}></input>

            <label htmlFor='subject'>Przedmiot</label>
            <input id='subject' value={subject} onChange={handleNewStudentInput}></input>

            <input type="button" value={"Zapisz"} onClick={handleSave}></input>
        </>
    );
}

export default AddOffer;