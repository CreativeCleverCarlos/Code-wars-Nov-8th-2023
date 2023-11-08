/** 
 The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
*/

//P.R.E.P

//Parameters - 2 arrays will be given. Each array index will only have 1 character strings. 

//Return - Return to the console

//Example - checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6

function checkExam(array1, array2){
    let total = 0
    for (let i = 0; i < array1.length; i++){
       
            if (array1[i] == array2[i]){ //remember the double "==". Had the write answer but forgot the double equal which made my answer wrong
                total += 4 
            } else if (array2[i] == ""){
                total += 0
            } else{
                total -= 1
            }
            
        }
        //to ensure that the total doesn't go into the negatives. 
        if (total < 0){
            total = 0
        }
    return total
}

console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]))