const UserInfo = ({ user }) => {
  return (
    <div>
      <h2>User Info</h2>
      <ul>
        <li>{user.name}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
