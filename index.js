/**
 * Created by glzc on 2018/3/20.
 */
const a = require('./a');
require.ensure([], function(require){
    const b = require('./b');
    b.b();
    document.body.innerHTML = b.a;
    /*document.body.addEventListener('click', function(){
        b.b();
    })*/
}, 'b');

a.b();
