const users = [];

// Join user to chat
function userJoin(id, username, room) {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.username === username);
  let error = 'none';
  if (existingUser) {
    error = 'Username is taken';
    return { error: error, user: null }
  } else {
    const user = { id, username, room };

    users.push(user);

    return { error: error, user: user };
  }
  // return { user };
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
