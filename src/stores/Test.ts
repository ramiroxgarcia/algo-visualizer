export enum Test {
    upter = 1,
    'test' = 't',
    test2 = 'G'
}

const obj = {
    test2: false
}

console.log(Test[Test.map(x => x.)])

Test[Test.upter]

Test['upter']

Test[G]

Object.keys(Test)

for (var enumMem in Test)
{

}