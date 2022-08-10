import VuexORM from '@vuex-orm/core'

import User from 'models/User'
import Post from 'models/Post'

const database = new VuexORM.Database()

// Register Models to Database.
database.register(User)
database.register(Post)

export default database;