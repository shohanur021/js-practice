const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
     if(!hasMeeting){
        const meetingDetails = {
            name: "business run",
            location: "Mirpur-1, dhaka",
            time: "10:00 PM"
        }
        resolve(meetingDetails);
     }
     else{
        reject(new Error("meeting already scheduled!"));
     }
});


// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//         resolve(calendar);
//     })
// };

const addToCalender = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calendar);
};

meeting
    .then(addToCalender)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    });