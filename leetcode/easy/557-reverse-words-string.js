var reverseWords = function(s) {
    let sList = s.split(' ');
    
    let reverse = []
    
    for (let i = 0; i < sList.length; i++) {
        let word = sList[i].split('').reverse().join('')
        reverse.push(word)
    }
    
    return reverse.join(' ')
};
