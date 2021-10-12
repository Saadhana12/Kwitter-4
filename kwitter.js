const firebaseConfig = {
    apiKey: "AIzaSyCM1L0LLS-bQ5iw0lSa-MC_sV_Hfnv6Ppg",
    authDomain: "kwitter-app-9bdca.firebaseapp.com",
    databaseURL: "https://kwitter-app-9bdca-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-9bdca",
    storageBucket: "kwitter-app-9bdca.appspot.com",
    messagingSenderId: "632203390001",
    appId: "1:632203390001:web:7cf7083b114464cf0df910"
  };
function addUser () {
    user_name = document.getElementById("user_name").value
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
