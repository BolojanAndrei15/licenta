import { createClient } from 'webdav';

let webdavClient;
if (!global._webdavClient) {
  global._webdavClient = createClient(
    process.env.NEXTCLOUD_URL,
    {
      username: process.env.NEXTCLOUD_USERNAME,
      password: process.env.NEXTCLOUD_PASSWORD,
    }
  );
}
webdavClient = global._webdavClient;

export default webdavClient;
