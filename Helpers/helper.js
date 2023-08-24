class Helpers {
    async checkParameters(source, parameter, parameterValue) {
        return source.some(item => parameterValue === item[parameter])
    }
}

module.exports = new Helpers()