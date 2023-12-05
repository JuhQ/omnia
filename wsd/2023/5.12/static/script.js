
const postTweet = async (tweet) => {
    const response = await fetch("/api/tweet", {
      method: "post",
      body: JSON.stringify(tweet)
    });
  
    return await response.json();
  };
  
  const createTweetData = (message) => ({ message });
  
  const clearForm = () => {
    document.querySelector("textarea").value = "";
  };
  
  const getMessageFromForm = () => {
    return document.querySelector("textarea").value.trim();
  };
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const message = getMessageFromForm();
    const tweet = createTweetData(message);
    const tweetResponse = await postTweet(tweet);
  
    clearForm();
    addTweetToDom({...tweetResponse, prepend: true});
  };
  
  const showForm = () => {
    const formContainer = document.querySelector("template#form");
    const formClone = formContainer.content.cloneNode(true);
  
    formClone.querySelector("form").addEventListener("submit", handleFormSubmit);
    document.querySelector("#form-container").appendChild(formClone);
  };
  
  const addTweetToDom = ({ img, sender, message, date, prepend }) => {
    const tweetContainer = document.querySelector("template#twiitti");
    const tweetClone = tweetContainer.content.cloneNode(true);
  
    tweetClone.querySelector("img").src = img;
    tweetClone.querySelector("span.name").innerText = sender;
    tweetClone.querySelector("span.date").innerText = new Date(date).toLocaleString('fi-FI', { timeZone: 'Europe/Helsinki' });
    tweetClone.querySelector("div.tweet-content").innerText = message;
  
    if (!prepend) {
      document.querySelector("#tweets").append(tweetClone);
    } else {
      document.querySelector("#tweets").prepend(tweetClone);
    }
  };
  
  const loadTweets = async () => {
    const response = await fetch("/api/tweets");
    const tweets = await response.json();
  
    document.querySelector("#tweets").innerHTML = "";
  
    tweets.forEach(addTweetToDom);
  }
  
  const onload = () => {
    showForm();
  
    loadTweets();
  };
  
  window.addEventListener("load", onload);