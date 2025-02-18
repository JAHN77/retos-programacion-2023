function leetSpeak(input: string) {
    const leetAlph: object = {
        a: '4',
        b: 'I3',
        c: '[',
        d: ')',
        e: '3',
        f: '|=',
        g: '&',
        h: '#',
        i: '1',
        j: ',_|',
        k: '>|',
        l: '1',
        m: '/\\/\\',
        n: '^/',
        o: '0',
        p: '|*',
        q: '(_,)',
        r: 'I2',
        s: '5',
        t: '7',
        u: '(_)',
        v: '\\/',
        w: '\\/\\/',
        x: '><',
        y: 'j',
        z: '2',
        1: 'L',
        2: 'R',
        3: 'E',
        4: 'A',
        5: 'S',
        6: 'b',
        7: 'T',
        8: 'B',
        9: 'g',
        0: 'o',
    }
    const formatOutput = () => {
        try {
            let inputArr: string[] = input.toLowerCase().split("");
            let ctx: string = '';
            inputArr.map(letter => {
                letter !== ' ' ? ctx += leetAlph[letter] : ctx += ' ';
            });
            return ctx;
        } catch (err){
            console.log(err)
            return 'Please introduce a string as a parameter.'
        }
    }
    return formatOutput();
}
console.log (leetSpeak('mouredev'));
console.log (leetSpeak('Empezando 2023 con los retos semanales de mouredev'));
console.log (leetSpeak('Empezando el año aprendiendo Typescript'));