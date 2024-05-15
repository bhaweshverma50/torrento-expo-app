import { Client } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.dudller.torrento',
  projectId: '66448e4f000f4a6261cb',
  databaseId: '6644915200265ac1fd09',
  usersCollectionId: '6644918a003cbfaf3f60',
};

const client = new Client();

client.setEndpoint(config.endpoint).setProject(config.projectId).setPlatform(config.platform);
