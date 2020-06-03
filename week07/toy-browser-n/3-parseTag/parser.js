const EOF = Symbol('EOF') //EOF: end of File

function data(c) {
    if (c === '<') {
        return tagOpen
    } else if (c === EOF) {
        return
    } else {
        return data;
    }
}

function tagOpen(c) {
    if (c === '/') {
        return endTagOpen;
    } else if (c.match(/^[a-zA-Z]$/)) {
        return tagName(c)
    } else {
        return
    }
}

function endTagOpen() {
    if (match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: 'endTag',
            tagName: ''
        }
        return tagName(c)
    }
}

function tagName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName;
    } else if (c === '/') {
        return selfClosingStartTag
    } else if (c.match(/^[a-zA-Z]$/)) {
        return tagName;
    } else if (c === '>') {
        return data
    } else {
        return tagName;
    }
}

function beforeAttributeName(c) {
    if (c.match(/^[\t\n\f]$/)) {
        return beforeAttributeName
    } else if (c === '>') {
        return data;
    } else if (c === '=') {
        return beforeAttributeName;
    } else {
        return beforeAttributeName
    }
}

function selfClosingStartTag(c) {
    if (c === '>') {
        currentToken.selfClosing = true;
        return data;
    } else if (c) {

    }
}

module.exports.parseHTML = function parseHTML(html) {
    let state = data;
    for (let c of html) {
        state = state(c);
    }
    return state = state(EOF);
}