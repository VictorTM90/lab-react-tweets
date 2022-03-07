import ProfileImage from "./ProfileImage";
import User from "./User.jsx"
import Timestamp from "./Timestamp.jsx"
import Message from "./Message.jsx"
import Actions from "./Actions.jsx"

function Tweet(props) {
 //console.log(props)
// const {tweet} = props 
  return (
    <div className="tweet">
     <ProfileImage image ={props.tweet.user.image} />

      <div className="body">
        <div className="top">
        <User userData={props.tweet.user} />
         <Timestamp time ={props.tweet.timestamp} />
        </div>
        
        <Message message = {props.tweet.message} />
        
       
        <Actions />

      <i class="fas fa-ellipsis-h"></i>
    </div>
    </div>
  );
}

export default Tweet;
