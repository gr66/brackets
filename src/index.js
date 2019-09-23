module.exports = function check(str, bracketsConfig) {
    let open = [],
        close = [];

    bracketsConfig.forEach(function(pair) {
        open.push(pair[0]);
        close.push(pair[1]);
    })

    let opened = [];

    for (let i = 0; i < str.length; i++) {
        if ( str[i] == close[open.indexOf(opened[opened.length - 1])] ) {
            opened.pop();
        } else if (open.includes(str[i])) {
            opened.push(str[i]);
        } else {
            return false;
        };
    }
    return opened.length == 0;
}
