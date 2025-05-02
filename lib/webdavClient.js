import axios from "axios";

const webdavClient = {
  async createUser({ userid, password, email }) {
    try {
      const response = await axios.post(
        `${process.env.NEXTCLOUD_URL}/ocs/v1.php/cloud/users`,
        new URLSearchParams({
          userid,
          password,
          email,
        }),
        {
          headers: {
            "OCS-APIRequest": "true",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: process.env.NEXTCLOUD_USERNAME,
            password: process.env.NEXTCLOUD_PASSWORD,
          },
        }
      );
      console.log("User created successfully in Nextcloud:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating user in Nextcloud:", error.response?.data || error.message);
      throw error;
    }
  },

  async addUserToGroup(userid, groupid) {
    try {
      const response = await axios.post(
        `${process.env.NEXTCLOUD_URL}/ocs/v1.php/cloud/users/${encodeURIComponent(userid)}/groups`,
        new URLSearchParams({ groupid }),
        {
          headers: {
            "OCS-APIRequest": "true",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: process.env.NEXTCLOUD_USERNAME,
            password: process.env.NEXTCLOUD_PASSWORD,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default webdavClient;
