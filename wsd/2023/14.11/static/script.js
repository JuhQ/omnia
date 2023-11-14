const handleFormSubmit = (event) => {
  event.preventDefault();
  const message = document.querySelector("textarea").value;


  document.querySelector("textarea").value = "";

  const tweet = {
    img: "http://placekitten.com/100/100",
    sender: Math.random(),
    message,
    date: new Date()
  };

  addTweetToDom(tweet);

  fetch("/api/tweet", {
    method: "post",
    body: JSON.stringify(tweet)
  })
};

const showForm = () => {
  const formContainer = document.querySelector("template#form");

  const formClone = formContainer.content.cloneNode(true);

  formClone.querySelector("form").addEventListener("submit", handleFormSubmit);

  document.querySelector("#form-container").appendChild(formClone);
};

const addTweetToDom = ({ img, sender, message, date }) => {
  const tweetContainer = document.querySelector("template#twiitti");
  console.log("img", img);
  const tweetClone = tweetContainer.content.cloneNode(true);

  tweetClone.querySelector("img").src = img;
  tweetClone.querySelector("span.name").innerText = sender;
  tweetClone.querySelector("span.date").innerText = new Date(date)
    .toLocaleTimeString();
  tweetClone.querySelector("div.tweet-content").innerText = message;

  document.querySelector("#tweets").prepend(tweetClone);
};

const loadTweets = async () => {
    const response = await fetch("/api/tweets");
    const tweets = await response.json();
    console.log("tweets", tweets);

    tweets.forEach(addTweetToDom);
}

const onload = () => {
  showForm();

  loadTweets();

  //   addTweetToDom({
  //     sender: "Juha",
  //     message: "nytkö tämä toimii?",
  //     img: "http://placekitten.com/100/300",
  //   });
};

window.addEventListener("load", onload);
