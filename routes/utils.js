module.exports = {
    _path: null,
    buildPath() {
        const operator = (__dirname.includes('/'))?'/':'\\';
        const paths = __dirname.split(operator);
        paths.pop() // pop the router directory
        ['views', 'pages'].forEach(p => {
            paths.push(p);
        });
        this._path = paths.join(operator) + operator;
        return this._path;
    },
    getPath() {
        return this._path || this.buildPath()
    }
}