import { User } from '../models/index.js';

const userService = {
  create: async (newUser) => {
    try {
      const user = await User.create(newUser);
      return user;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
