const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const main = document.getElementById("main-content");
main.innerHTML = "";

for(let i = 0; i < posts.length; i++) {

    console.log(posts[i]);
    // main section (container)
    const section = document.createElement("section");
    section.className = "container";

    // user info div
    const userInfoDiv = document.createElement("div");
    userInfoDiv.className = "user-info";

    const avatarImg = document.createElement("img");
    avatarImg.className = "avatar";
    avatarImg.src = posts[i].avatar;
    avatarImg.alt = `profile picture of ${posts[i].name}`;

    const userName = document.createElement("h1");
    userName.className = `user-name`;
    userName.textContent = posts[i].name;

    const userLocation = document.createElement("h2"); 
    userLocation.classNmae = "user-city";
    userLocation.textContent = posts[i].location;

    userInfoDiv.appendChild(avatarImg);
    userInfoDiv.appendChild(userName);
    userInfoDiv.appendChild(userLocation);

    // post picture div
    const postPictureDiv = document.createElement("div");
    postPictureDiv.className = "post-picture-container";

    const postPictureImg = document.createElement("img");
    postPictureImg.className = "post-picture";
    postPictureImg.src = posts[i].post;
    postPictureImg.alt = `post picture by ${posts[i].name}`;

    postPictureDiv.appendChild(postPictureImg);

    // post icons div
    const postIconsDiv = document.createElement("div");
    postIconsDiv.className = "post-icons";

    const commentA = document.createElement("a");
    const commentImg = document.createElement("img");
    commentA.appendChild(commentImg);
    commentImg.className = "icon";
    commentImg.src = "images/icon-comment.png";
    commentImg.alt = "comment icon";

    const dmA = document.createElement("a");
    const dmImg = document.createElement("img");
    dmA.appendChild(dmImg);
    dmImg.className = "icon";
    dmImg.src = "images/icon-dm.png";
    dmImg.alt = "direct message icon";

    const heartA = document.createElement("a");
    const heartImg = document.createElement("img");
    heartA.appendChild(heartImg);
    heartImg.className = "icon";
    heartImg.src = "images/icon-heart.png";
    heartImg.alt = "heart icon";

    postIconsDiv.appendChild(heartA);
    postIconsDiv.appendChild(commentA);
    postIconsDiv.appendChild(dmA);


    // post like comment div
    const postLikeCommentDiv = document.createElement("div");
    postLikeCommentDiv.className = "post-like-comment";

    const likeP = document.createElement("p");
    likeP.className = "like";
    likeP.innerHTML = `<strong>${posts[i].likes} Likes</strong>`;
    console.log(likeP);

    const commentP = document.createElement("p");
    commentP.className = "comment";
    commentP.innerHTML = `<strong>${posts[i].username}</strong> ${posts[i].comment}`;

    postLikeCommentDiv.appendChild(likeP);
    postLikeCommentDiv.appendChild(commentP);



    // final apending all the divs to the section
    section.appendChild(userInfoDiv);
    section.appendChild(postPictureDiv);
    section.appendChild(postIconsDiv);
    section.appendChild(postLikeCommentDiv);

    main.appendChild(section);

}