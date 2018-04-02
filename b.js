/**
 * Created by glzc on 2018/3/20.
 */
const b = {
    a: 'This is b!!',
    b: function(){ console.log('*****', this.a, this) }
};
module.exports = b;