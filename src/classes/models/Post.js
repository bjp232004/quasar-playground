import { Model } from '@vuex-orm/core'
import User from './User'

export default class Post extends Model {
  static entity = 'posts'

  // `this.belongsTo` is for belongs to relationship. The first argument is
  // the Model class, and second is the field name for the foreign key.
  static fields () {
    return {
      id: this.attr(null),
      userId: this.attr(null),
      title: this.attr(''),
      body: this.attr('')
    }
  }
}