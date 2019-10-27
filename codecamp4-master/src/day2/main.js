function main(str1, str2) {
    let count = (str1.length == str2.length) ? checkStr(str1, str2) : false
    return count
    // console.log(count)

    function checkStr(str1, str2) {
        // console.log('Inside1');
        this.count = (str1 === str2) ? 0 : countDiff(str1, str2)
        return this.count
        // console.log(this.count)
    }

    function countDiff(str1, str2) {
        countStr = 0;

        for (let i = 0; i < str1.length; i++) {
            // console.log(`i=${i}`)
            // console.log(`str1=${str1[i]} , str2=${str2[i]}`)
            this.count = (str1[i] !== str2[i]) ? this.countStr = this.countStr + 1 : this.countStr
        }
        return this.countStr;
        // console.log(`Last count = ${this.countStr}`)
    }
}

module.exports = { main };