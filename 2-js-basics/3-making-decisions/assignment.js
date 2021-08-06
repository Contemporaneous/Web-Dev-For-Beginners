let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
function passMark(mark) {
    if (typeof(mark)=='string'){
        return ['A','A-','B','B-','C','C-'].includes(mark);
    }else{
        return mark >=3;
    }
}

  let studentsWhoPass = allStudents.map(student => passMark(student));

  console.log(studentsWhoPass);