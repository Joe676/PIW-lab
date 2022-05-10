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
                setNewStudentOffer(new StudentOffer(description, tmpTags.split(","), subject, new Student(event.target.value, mail)));
                break;
        
            case 'mail':
                setMail(event.target.value);
                setNewStudentOffer(new StudentOffer(description, tmpTags.split(","), subject, new Student(name, event.target.value)));
                break;

            case 'description':
                setDescription(event.target.value);
                setNewStudentOffer(new StudentOffer(event.target.value, tmpTags.split(","), subject, new Student(name, mail)));
                break;

            case 'subject':
                setSubject(event.target.value);
                setNewStudentOffer(new StudentOffer(description, tmpTags.split(","), event.target.value, new Student(name, mail)));
                break;
        }
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
    }

    return (
        <>
            <label htmlFor='name' className='add-element'>Imię:</label>
            <input id='name' className='add-element' value={name} onChange={handleNewStudentInput}></input>

            <label htmlFor='mail' className='add-element'>E-Mail:</label>
            <input id='mail' className='add-element' value={mail} onChange={handleNewStudentInput}></input>
            
            <label htmlFor='description' className='add-element'>Opis:</label>
            <input id='description' className='add-element' value={description} onChange={handleNewStudentInput}></input>
            
            <label htmlFor='tags' className='add-element'>Tagi (rozdzielone przecinkami):</label>
            <input id='tags' className='add-element' value={tmpTags} onChange={handleTagsInput}></input>

            <label htmlFor='subject' className='add-element'>Przedmiot:</label>
            <input id='subject' className='add-element' value={subject} onChange={handleNewStudentInput}></input>

            <input type="button" className='add-element nice-btn' value={"Zapisz"} onClick={handleSave}></input>
        </>
    );
}

export default AddOffer;