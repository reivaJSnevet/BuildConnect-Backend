import { User } from "../models/index.js";

const userService = {
  create: async (newUser) => {
    try {
      const user = await User.create(newUser);
      return user;
    } catch (error) {
      throw error;
    }
  },

  getAll: async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User not found with id: ${id}`);
      }
      return user;
    } catch (error) {
      throw error;
    }
  },

  update: async (id, updatedUser) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User not found with id: ${id}`);
      }
      const updated = await user.update(updatedUser);
      return updated;
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error(`User not found with id: ${id}`);
      }
      await user.destroy();
      return `User with id: ${id} has been deleted`;
    } catch (error) {
      throw error;
    }
  },

  addPermission: async (userId, companyId) => {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error(`User not found with id: ${userId}`);
      }
      await user.addPermission(companyId);
      return user;
    } catch (error) {
      throw error;
    }
  },

  removePermission: async (userId, companyId) => {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error(`User not found with id: ${userId}`);
      }
      await user.removePermission(companyId);
      return user;
    } catch (error) {
      throw error;
    }
  },
  
};

export default userService;
