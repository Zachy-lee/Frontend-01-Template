const EOF = Symbol('EOF') //EOF: end of File

function data(c) {

}



module.exports.parseHTML = function parseHTML(html) {
    let state = data;
    for (let c of html) {
        state = state(c);
    }
    return state = state(EOF);
}