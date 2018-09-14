let wait = ms => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("You should see this after "+ms/1000+" seconds.")
        }, ms)
    })
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const getLastCommitDate = (username=> {
    const url= "https://api.github.com/users/${username}/events";
        fetch(url)
        .then(data=> data.json())
        .then(events => events.filter(event =>event.type==="PushEvent"))
        .then((data) => console.log(data))
})