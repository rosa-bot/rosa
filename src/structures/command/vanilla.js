'use strict'


/**
 * @class
 * @constructor
*/

export default class Vanilla {
  
  /** 
   * Class base for make commands
   * 
   * @param {Object} ctx
   * @param ctx.message 
   * @param {Object} ctx.client  
   * @param {Object} ctx.args
   * @param {Object} opts
   * @param {String} opts.name 
   * @param {Array} opts.aliases
   * @param {Boolean} opts.avaliable 
   */
   
  constructor(ctx, opts) {
    this.ctx = ctx
    this.message = ctx.message
    this.client = ctx.client
    this.args = ctx.args || null
    this.name = opts.name || null
    this.aliases = opts.aliases
    this.avaliable = true || opts.avaliable
  }
}
new Vanilla()