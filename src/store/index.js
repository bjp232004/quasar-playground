import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMGraphQL from '@vuex-orm/plugin-graphql';
import database from 'models/Database'
import axios from 'axios';
import VuexORMAxios from '@vuex-orm/plugin-axios'
import VuexORMRestPlugin from 'store/VuexORMRestPlugin';
import CustomAdapter from 'store/custom-adapter';

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 * APOLLO_KEY=service:My-Graph-sf50m:-IMxujkyH50vFfIN9BiL3A \
  rover subgraph publish My-Graph-sf50m@current \
  --name products --schema ./products-schema.graphql \
  --routing-url http://products.prod.svc.cluster.local:4001/graphql
 */

VuexORM.use(
  VuexORMGraphQL, 
  { 
    database:database, 
    url: 'http://localhost:3000/graphql', 
    adapter: new CustomAdapter()
  }
)

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      //example
    },
    plugins: [
      VuexORM.install(database)
    ],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  // VuexORM.use(VuexORMRestPlugin)
  // VuexORM.use(VuexORMGraphQL, { database })
  // VuexORM.use(VuexORMAxios, {
  //   axios,
  //   baseURL: 'http://localhost:3000/graphql'
  // })

  return Store
})
