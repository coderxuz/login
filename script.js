const students = [
    { name: 'Jabbarbergenov Bekbolat', age: 15 },
    { name: 'Sobirov Zuxrat', age: 15 },
    { name: 'Sobirov Zuxrat', age: 15 },
    { name: 'Elmuratov Jasur', age: 19 },
    { name: 'Isakov Safarali', age: 16 },
    { name: 'Jollibaev Agabek', age: 15 },
    { name: 'Kengeshbaev Akrombek', age: 15 },
    { name: 'Qarlibaev Xursand', age: 15 },
    { name: 'Jangabaev Sanjar', age: 16 }
];

const studentsList = document.getElementById('students-list');

function displayStudents() {
    students.forEach(student => {
        const studentList = document.createElement('li');
        const studentLink = document.createElement('a');
        const studentText = document.createElement('span');
        const studentText2 = document.createElement('span');
        
        studentList.classList.add('students1-list-item');
        studentLink.classList.add('students1-list-item-link');
        studentText.classList.add('students1-list-item-link-item');
        studentText2.classList.add('students1-list-item-link-item2');
        
        studentText.textContent = `${student.name}`;
        studentText2.textContent = `${student.age} y.o`;
        
        studentLink.appendChild(studentText);
        studentLink.appendChild(studentText2);
        
        studentList.appendChild(studentLink);
        
        studentsList.appendChild(studentList);
    });
}

displayStudents();

const fullscreenBtn = document.getElementById("login-btn");
const myDiv = document.getElementById("header-login");
const submit = document.getElementById("submit");
const main = document.getElementById("main");

fullscreenBtn.onclick = function() {
    myDiv.style.display = "block";
    main.style.display = "none";
};

submit.onclick = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = { username, password };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        myDiv.style.display = "none";
        main.style.display = "block";
    })
    .catch((error) => {
        console.error('Error:', error);
    });
};
