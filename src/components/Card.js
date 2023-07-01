import profile1 from "./image/photo01.png";
import profile2 from "./image/photo02.jpg";
import profile3 from "./image/photo03.jpg";
import profile4 from "./image/photo04.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
import DateTime from "./DateTime";
import "./Styles.css";

const Card = () => {
  return (
    <div className="ui four column grid container">
      <div className="column">
        <UserCard>
          <SingleComment
            name="Alex"
            date={<DateTime />}
            text="it is amazing"
            picture={profile1}
          />
        </UserCard>
      </div>
      <div className="column">
        <UserCard>
          <SingleComment
            name="Jack"
            date={<DateTime />}
            text="Great job"
            picture={profile2}
          />
        </UserCard>
      </div>
      <div className="column">
        <UserCard>
          <SingleComment
            name="Sarah"
            date={<DateTime />}
            text="Thanks..."
            picture={profile3}
          />
        </UserCard>
      </div>
      <div className="column">
        <UserCard>
          <SingleComment
            name="Phil"
            date={<DateTime />}
            text="Thanks..."
            picture={profile4}
          />
        </UserCard>
      </div>
      {/* <UserCard>
        <div>
            Hello this is Alex from Intabul
        </div>
      </UserCard> */}
    </div>
  );
};

export default Card;
