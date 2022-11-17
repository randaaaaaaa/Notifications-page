// select all the element i need 
const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark_all");

// make notification box display how many unread messages i have 
unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) =>{
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText= newUnreadMessages.length;

    })
})
//make the mark p tag when clicked remove all the unread notification and update the number of unread notification
markAll.addEventListener("click", () => {
    unreadMessages.forEach((message) => {
        message.classList.remove("unread")
    })
    const newUnreadMessages =document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;

})