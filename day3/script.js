document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let grade = document.getElementById("grade").value;
    grade = Number(grade); 
    let message = "";

    if (grade >= 90) {
        message = " A (Excellent 🎉)";
    } else if (grade >= 80) {
        message = " B (Good 😊)";
    } else if (grade >= 70) {
        message = " C (Pass 👍)";
    } else if(grade >= 60){
        message = " D (Fail ❌)";
    } else {
        message = "(Fail ❌)"
    }

    document.getElementById("result").innerHTML = `<p>${message}</p>`;
});
