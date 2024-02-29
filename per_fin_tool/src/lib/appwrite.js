import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65d4b59d45aa2243ed9f'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
