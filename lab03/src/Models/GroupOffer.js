class GroupOffer{
    constructor(group, description, subject, tags=[]){
        this.group = group;
        this.description = description;
        this.subject = subject;
        this.tags = tags;
    }

    toHTML = (i) => {
        return (<div className="offer" key={i}>
            <div className="group-name">{this.group.name}</div>
            <div className="group-members">
                {this.group.members.map((member) => {return(
                    <span className="group-member">{member.name}</span>
                )})}
            </div>
            <div>
                <div className="offer-description">{this.description}</div>
                <div className="offer-subject">{this.subject}</div>
                <div className="offer-tags">{this.tags.join(", ")}</div>
            </div>
        </div>)
    }
}

export default GroupOffer;