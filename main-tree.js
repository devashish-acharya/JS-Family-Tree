//childOf function
childOf = function() {
    return this.parent.map(p => p.name)
}


//me and sis
const me = {name:'Devashish-Acharya' , parent:[] , childOf}
const sis = {name:'Sampada-Acharya' , parent:[], childOf}
const gen1 = [me, sis]
//tests



//mum and her siblings
const mum = {name:'Aruna-Acharya' , parent:[] , childOf}
const aunt1m = {name:'Sarala-Dixit' , parent:[] , childOf}
const aunt2m = {name:'Karuna-Yadav' , parent:[] , childOf}
const uncleM = {name:'Anil-Adhikari' , parent:[] , childOf}
const gen2m = [mum, aunt1m, aunt2m, uncleM]
//tests



//dad and his sister
const dad = {name:'Santosh-Acharya' , parent:[] , childOf}
const auntD = {name: 'Kusum-Pathak' , parent: [], childOf}
const gen2d = [dad, auntD]



//grandparents (paternal)
const granDd = {name:'Damodar-Acharya' , parent:[], childOf}
const granMd = {name:'Sudha-Acharya' , parent:[] , childOf}



//grandparents (maternal)
const granMm = {name:'Sulochana-Adhikari' , parent:[] , childOf}
const granDm = {name:'Nurotam-Adhikari' , parent:[] , childOf}



//parent link gen1
gen1[0].parent[0] = mum
gen1[0].parent[1] = dad
gen1[1].parent[0] = mum
gen1[1].parent[1] = dad



//parent link gen2(paternal)
gen2d[0].parent[0] = granMd
gen2d[0].parent[1] = granDd
gen2d[1].parent[0] = granMd
gen2d[1].parent[1] = granDd



//parent link gen2(maternal)
gen2m[0].parent[0] = granMm
gen2m[0].parent[1] = granDm
gen2m[1].parent[0] = granMm
gen2m[1].parent[1] = granDm
gen2m[2].parent[0] = granMm
gen2m[2].parent[1] = granDm
gen2m[3].parent[0] = granMm
gen2m[3].parent[1] = granDm


//function link
me.childOf = childOf
sis.childOf = childOf
mum.childOf = childOf
dad.childOf = childOf
auntD.childOf = childOf
aunt1m.childOf = childOf
aunt2m.childOf = childOf
uncleM.childOf = childOf


//test
module.exports = [me, sis, auntD, aunt1m, aunt2m, uncleM]