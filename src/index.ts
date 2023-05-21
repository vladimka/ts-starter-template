function levenstein(str1: string, str2: string){
    let dst = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length < str2.length){
        [str1, str2] = [str2, str1];
    }

    for(let i = 0; i < str1.length; i++){
        if(str1[i] === str2[i])
            continue;

        dst++;
    }

    return dst;
}

export default levenstein;