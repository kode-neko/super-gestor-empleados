const IdCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img src={user.avatar} alt="user avatar" />
      <ul>
        <li>
          {user.name} {user.surname}
        </li>
        <li>🏠 {user.city} - ({user.state})</li>
      </ul>
    </div>
  );
};

export default IdCard;
