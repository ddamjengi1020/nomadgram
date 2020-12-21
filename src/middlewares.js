export const isAuthenticated = ({ user }) => {
  if (!user) {
    throw Error("You need to log in to perform this action");
  }
  return;
};
