
import { repoReducer } from "./slices/repo.slice";
import { searchReducer } from "./slices/search.slice";
import { themeReducer } from "./slices/theme";
import { userReducer } from "./slices/user.slice";
import { usersReducer } from "./slices/users.slice";

const reducers = {
  theme: themeReducer,
  users: usersReducer,
  user: userReducer,
  search: searchReducer,
  repos: repoReducer,
};

export default reducers;
