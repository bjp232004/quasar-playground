import { DefaultAdapter, ConnectionMode } from '@vuex-orm/plugin-graphql';

export default class CustomAdapter extends DefaultAdapter {
  // Your code here
  
  // Example
  getConnectionMode() {
    return ConnectionMode.PLAIN
  }
}