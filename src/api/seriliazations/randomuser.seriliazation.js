export function serializeRandomUsers(response) {
  const results = response.results.map((user, idx) => {
    return {
      no: (response.info.page * response.info.results) - response.info.results + idx + 1,
      username: user.login.username,
      fullname: `${user.name.first} ${user.name.last}`,
      email: user.email,
      gender: user.gender,
      phone: user.phone,
      picture: user.picture.thumbnail,
    };
  });

  return {
    info: response.info,
    results,
  };
}
