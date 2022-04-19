function timeConversion(s) {
    // Write your code here
    if(s.includes('AM')){
        s = s.replace('AM', '');
        s = s.split(':');
        let hr = +s[0];
        if(hr === 12){
            hr = '00';
        }
        s = hr + ':' + s[1] + ':' + s[2]
    }
    if(s.includes('PM')){
        s = s.replace('PM', '')
        s = s.split(':');
        let hr = +s[0] + 12
        s = hr + ':' + s[1] + ':' + s[2]
    }
    console.log(s)
    return s;
}
console.log(timeConversion('12:45:54PM');