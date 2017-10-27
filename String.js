function reverseParentheses(s) {
    let arr = s.split('');
    // console.log(arr);
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === '(') {
            temp.push(i);
        }
        // console.log(temp)
        if(arr[i] === ')') {
            let buff1 = s;
            let buff2 = s;
            let pop = temp.pop();
            // console.log(pop)
            let x = buff1.split('').splice(pop, i - pop + 1).join('');
            let x1 = buff2.split('').splice(pop + 1, (i - pop - 1)).reverse().join('');
            console.log(x);
            console.log(x1);

            let y = '-' + x1 + '-';
            // let z = y.replace(')', '-');
            // console.log(z);
            //replace the reverse tring in parenthese.
            s = s.replace(x, y);
            
        }
    }
    console.log(s)
    return s.replace(/-/g, '');
}
reverseParentheses("Code(Cha(lle)nge)(abcd)");