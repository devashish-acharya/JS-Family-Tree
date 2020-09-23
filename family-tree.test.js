const familyTree = require('./family-tree.js')

describe('Family Tree', function () {
    test('I am in my family tree', function (){
        const me = familyTree[0]
        expect(me.name).toEqual('Devashish-Acharya')
    })
}) 

test('My sister is also there', function () {
    const sister = familyTree[1]
    expect(sister.name).toEqual('Sampada-Acharya')
})