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

  async addDepartmentFolder(departmentName) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/`;
      const response = await axios.request({
        method: "MKCOL",
        url,
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 201;
    } catch (error) {
      if (error.response && error.response.status === 405) {
        // Folder already exists
        return true;
      }
      throw error;
    }
  },

  async addRegisterFolder(departmentName, registerName) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/`;
      const response = await axios.request({
        method: "MKCOL",
        url,
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 201;
    } catch (error) {
      if (error.response && error.response.status === 405) {
        // Folder already exists
        return true;
      }
      throw error;
    }
  },

  async addDocumentToRegister(departmentName, registerName, documentName, file) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/${encodeURIComponent(documentName)}`;
      const response = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type || "application/octet-stream",
        },
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 201 || response.status === 204;
    } catch (error) {
      throw error;
    }
  },

  async renameDepartmentFolder(oldName, newName) {
    try {
      const base = process.env.NEXTCLOUD_URL; // ex: http://localhost:8080
      const user = process.env.NEXTCLOUD_USERNAME;
      const url = `${base}/remote.php/dav/files/${user}/${encodeURIComponent(oldName)}/`;
      const destination = `${base}/remote.php/dav/files/${user}/${encodeURIComponent(newName)}/`;
      const response = await axios.request({
        method: "MOVE",
        url,
        headers: {
          Destination: destination,
          Overwrite: "T"
        },
        auth: {
          username: user,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
        maxRedirects: 0
      });
      return response.status === 201 || response.status === 204;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        throw new Error("Există deja un folder cu acest nume în Nextcloud.");
      }
      throw error;
    }
  },

  async deleteDepartmentFolder(departmentName) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/`;
      const response = await axios.delete(url, {
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 204;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return true; // Already deleted
      }
      throw error;
    }
  },

  async renameRegisterFolder(departmentName, oldRegister, newRegister) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(oldRegister)}/`;
      const destination = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(newRegister)}/`;
      const response = await axios.request({
        method: "MOVE",
        url,
        headers: {
          Destination: destination,
        },
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 201 || response.status === 204;
    } catch (error) {
      throw error;
    }
  },

  async deleteRegisterFolder(departmentName, registerName) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/`;
      const response = await axios.delete(url, {
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 204;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return true;
      }
      throw error;
    }
  },

  async renameDocument(departmentName, registerName, oldDoc, newDoc) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/${encodeURIComponent(oldDoc)}`;
      const destination = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/${encodeURIComponent(newDoc)}`;
      const response = await axios.request({
        method: "MOVE",
        url,
        headers: {
          Destination: destination,
        },
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 201 || response.status === 204;
    } catch (error) {
      throw error;
    }
  },

  async deleteDocument(departmentName, registerName, documentName) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/${encodeURIComponent(documentName)}`;
      const response = await axios.delete(url, {
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      return response.status === 204;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return true;
      }
      throw error;
    }
  },

  // Returnează numele fișierului asociat unui document (după sufixul __@__iddocument)
  async retrieveDocumentById(departmentName, registerName, iddocument) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/`;
      const response = await axios.request({
        method: "PROPFIND",
        url,
        headers: {
          Depth: 1,
        },
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      // Extrage lista de fișiere din răspunsul XML
      const files = [];
      const matches = response.data.matchAll(/<d:href>([^<]+)<\/d:href>/g);
      for (const m of matches) {
        const name = decodeURIComponent(m[1].split("/").pop());
        if (name && name.includes(`__@__${iddocument}`)) files.push(name);
      }
      return files; // poate fi array gol dacă nu există
    } catch (error) {
      throw error;
    }
  },

  // Returnează un stream (buffer) și content-type pentru un fișier din Nextcloud
  async getDocumentStream(departmentName, registerName, documentName) {
    try {
      const url = `${process.env.NEXTCLOUD_URL}/remote.php/dav/files/${process.env.NEXTCLOUD_USERNAME}/${encodeURIComponent(departmentName)}/${encodeURIComponent(registerName)}/${encodeURIComponent(documentName)}`;
      const response = await axios.get(url, {
        responseType: "arraybuffer",
        auth: {
          username: process.env.NEXTCLOUD_USERNAME,
          password: process.env.NEXTCLOUD_PASSWORD,
        },
      });
      // Determină content-type (dacă nu e setat, fallback la octet-stream)
      const contentType = response.headers["content-type"] || "application/octet-stream";
      return { buffer: response.data, contentType };
    } catch (error) {
      throw error;
    }
  },
};

export default webdavClient;
