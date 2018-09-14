const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const tripleLang = users.filter(function(n){
    return n.languages.length >=3;
});
console.log(tripleLang);

let emailArray=[];

const list = users.map(function(n){
    emailArray.push(n.email);
});
console.log (emailArray);


const averageExperience = users.reduce(function (years, user) {
    return totalYears = years +user.yearsOfExperience/users.length;
}, 0);
console.log(averageExperience);

let emailLength = [];
const longestEmail = users.reduce(function (length, user){
    emailLength.push(user.email.split("").length);
    for (let i=0; i<emailLength.length;i++){
        if (emailLength[i]<emailLength[i-1]){
            emailLength.pop(emailLength[i]);
        }
    }
    return emailLength;
}, 0);
console.log(longestEmail);