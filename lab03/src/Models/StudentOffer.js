var StudentOffer = class {
    constructor(description, tags, subject, student){
        this.description = description;
        this.tags = tags;
        this.subject = subject;
        this.student = student
    }

    toString = () => {
        return this.description + " " + this.subject + " " + this.tags;
    }

    toHTML = (i) => {
        return (
            <div className="offer" key={i}>
                <div className="student-name">{this.student.name}</div>
                <div className="offer-description">{this.description}</div>
                <div className="offer-subject">{this.subject}</div>
                <div className="offer-tags">{this.tags.join(", ")}</div>
            </div>
        )
    }
}

export default StudentOffer;