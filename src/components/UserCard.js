import "./Styles.css"

function sendAlert(){
    alert("Hi! and welcometo my friend's list. You may enter my name in the search input")
}


const UserCard = (props) => {
    return(
        <div className="ui card">
        <div className="content">
            <div className="header">My Profile</div>
            <div className="description">{props.children}</div>
        </div>
        <button className="ui botton button" onClick={sendAlert}>
            <i className="add icon"></i>
            Add Friend
        </button>
    </div>
    )
    
}

export default UserCard;