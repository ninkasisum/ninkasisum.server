module.exports = function(local) {
    let splitedDirname = local.split('\\');
    splitedDirname.pop();
    splitedDirname.pop();
    splitedDirname.push('views');
    splitedDirname.push('pages');
    return splitedDirname.join('/');
}