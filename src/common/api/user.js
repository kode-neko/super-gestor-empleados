async function getUserList() {
  return fetch("https://randomuser.me/api/?results=10")
    .then((data) => data.json())
    .then((json) => {
      const userListAux = json.results.map((user) => ({
        avatar: user.picture.large,
        name: user.name.first,
        surname: user.name.last,
        email: user.email,
        phone: user.phone,
        city: user.location.city,
        state: user.location.state,
        contratado: false,
      }));
      return userListAux;
    });
}

export { getUserList };
