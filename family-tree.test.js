const familyTree = require('./main-tree.js')

describe('Family Tree', function () {
    test('I am in my family tree', function (){
        const me = familyTree[0]
        expect(me.name).toEqual('Devashish-Acharya')
    })

    test('My sister is also there', function () {
        const sis = familyTree[1]
        expect(sis.name).toEqual('Sampada-Acharya')
    })

     test('My mum is in the tree', function () {
        const me = familyTree[0]
        const mum = me.parent[0]
        expect(mum.name).toEqual('Aruna-Acharya')
    })

    test('My dad is in the tree', function () {
        const sis = familyTree[1]
        const dad = sis.parent[1]
        expect(dad.name).toEqual('Santosh-Acharya')
    })

    test('My paternal aunt is in the tree', function () {
        const auntD = familyTree[2]
        expect(auntD.name).toEqual('Kusum-Pathak')
    })

    test('My eldest maternal aunt is in the tree', function () {
        const aunt1m = familyTree[3]
        expect(aunt1m.name).toEqual('Sarala-Dixit')
    })

    test('My second eldest maternal aunt is in the tree', function () {
        const aunt2m = familyTree[4]
        expect(aunt2m.name).toEqual('Karuna-Yadav')
    })

    test('My maternal uncle is in the tree', function () {
        const uncleM = familyTree[5]
        expect(uncleM.name).toEqual('Anil-Adhikari')
    })
    
    test('My maternal Grandmother is in the tree', function () {
        const me = familyTree[0]
        const mum = me.parent[0]
        const grandMm = mum.parent[0]
        expect(grandMm.name).toEqual('Sulochana-Adhikari')
    })

    test('My maternal Granddad is in the tree', function () {
        const me = familyTree[0]
        const mum = me.parent[0]
        const grandDm = mum.parent[1]
        expect(grandDm.name).toEqual('Nurotam-Adhikari')
    })

    test('My paternal Grandmother is in the tree', function () {
        const me = familyTree[0]
        const dad = me.parent[1]
        const grandDm = dad.parent[0]
        expect(grandDm.name).toEqual('Sudha-Acharya')
    })

    test('My paternal Granddad is in the tree', function () {
        const me = familyTree[0]
        const dad = me.parent[1]
        const grandDd = dad.parent[1]
        expect(grandDd.name).toEqual('Damodar-Acharya')
    })
    
}) 

