const studentDetails = {
    name: 'Hari Thapa',
    roll: 12,
    age: 46,
    favSubjects:['math','science', 'computer'],
    favSubjectsScores:[99,80,78],
    nonFavSubjectsScores:[55,66],
    allSubjects:['math', 'science', 'social', 'sanskrit', 'computer']
  }

//   Qno.6

//   console.log(studentDetails.name[0]+studentDetails.name[5])


 //   Qno.7 Total no of favourite subjects

//   console.log(studentDetails.favSubjects.length)

// Qno. 8 Find which subjects are not his fav subjects

// for(i=0;i<studentDetails.favSubjects.length;i++){
//     for(j=0;j<studentDetails.allSubjects.length;j++){
//         if(studentDetails.favSubjects[i]==studentDetails.allSubjects[j]){
//             studentDetails.allSubjects.splice(j,1)
//         }
//     }
// }
// const nonfavSubjects= studentDetails.allSubjects
// console.log(nonfavSubjects)


//Qno.9) calculate total marks hari scored in all 5 subjects

// let s1=0,s2=0;
// studentDetails.favSubjectsScores.map(item=> s1=s1+item)
// studentDetails.nonFavSubjectsScores.map(item=> s2=s2+item)
// const totalMarks= s1 + s2;
// console.log("Total Marks:"+ totalMarks)


//Qno. 10) calculate the percentage of marks hari scored in all 5 subjects

let s1=0,s2=0;
studentDetails.favSubjectsScores.map(item=> s1=s1+item)
studentDetails.nonFavSubjectsScores.map(item=> s2=s2+item)
console.log((s1+s2)/5 + "%")
