//user profile
let userProfile = [
    {
        id: 101,
        firstName: "Ragupathi",
        lastName: "P",
        mobileNum: "9095075260",
        email: "rpathi783@gmail",
        profileImg: "./images/profile/raguprof.jpg",
        profilebanner: "url('images/banner/raguback.jpg')",
        position: " Developer",
    },
    {
        id: 102,
        firstName: "Karthick",
        lastName: "D",
        mobileNum: "9751008258",
        email: "karthickd@gmail",
        profileImg: "./images/profile/karthiprof.jpg",
        profilebanner: "url('images/banner/karthiback.jpg')",
        position: "Developer",
    },
    {
        id: 103,
        firstName: "Yogesh",
        lastName: "G",
        mobileNum: "9655306595",
        email: "yogesh@gmail",
        profileImg: "./images/profile/yogeshprof.jpg",
        profilebanner: "url('images/banner/yogeshback.jpg')",
        position: "Junior Developer",
    },

    {
        id: 104,
        firstName: "kishore",
        lastName: "B",
        mobileNum: "9500231059",
        email: "harikishorebala@gmail",
        profileImg: "./images/profile/kishoreprof.jpg",
        profilebanner: "url('images/banner/kishoreback.jpg')",
        position: "Trainee",
    },
    {
        id: 105,
        firstName: "Ivaraja",
        lastName: "G",
        mobileNum: "9500231059",
        email: "ivaraja1996@gmail",
        profileImg: "./images/profile/ivarprof.jpeg",
        profilebanner: "url('images/banner/ivarback.jpg')",
        position: "Senior Manager",
    },
];
// validate the login id and userprofile
let userdetails = JSON.stringify(userProfile);

localStorage.setItem("uservalue", userdetails);
let getDetails = localStorage.getItem("uservalue");
let getuser = JSON.parse(getDetails);

let localuser = parseInt(localStorage.getItem("userid"));
let appuser = getuser.find(function (check) {
    return check.id == localuser;
});

//get the name element and image element

let mydp = document.getElementsByClassName("userdp");
let myname = document.getElementsByClassName("username");
let mybackbanner = document.getElementsByClassName("back-img");
mybackbanner = mybackbanner[0];

//set the user  image and detail

if (appuser) {
    for (let k = 0; k < mydp.length; k++) {
        mydp[k].setAttribute("src", appuser.profileImg);
    }
    for (let z = 0; z < myname.length; z++) {
        myname[z].innerText = appuser.firstName + " " + appuser.lastName;
    }
    mybackbanner.style.backgroundImage = appuser.profilebanner;
}

// user profile  login event

function myprofile(event) {
    event.preventDefault();
    localStorage.setItem("isLogin", true);
    window.location.replace("profile.html");
}

/*logout function for home page  */
let pageurl = window.location.href;
if (pageurl.includes("index.html")) {
    let getsLogin = localStorage.getItem("isLogin");

    if (!getsLogin) {
        window.location.replace("login.html");
    }
}

function logout(event) {
    event.preventDefault();
    localStorage.clear();
    localStorage.removeItem("isLogin");
    window.location.replace("login.html");
}
/* home page logout end */

/* go to home page from profile page button */

function homePage(event) {
    event.preventDefault();
    localStorage.setItem("isLogin", true);
    window.location.replace("index.html");
}

let profileurl = window.location.href;
if (profileurl.includes("profile.html")) {
    let getsLogin = localStorage.getItem("isLogin");

    if (!getsLogin) {
        window.location.replace("index.html");
    }
}

/* go to home page from profile page button  end*/

/* profile edit function start */

// send-this's handler function
function handleEle(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // show overlay [x.style.display = 'block']
    overlayEle.style.display = "block";
    // get model-box element
    let modelEle = document.getElementsByClassName("profile-box");
    modelEle = modelEle[0];
    // show model-box
    modelEle.style.display = "block";
    //infoedt();
}
// close-this's handler function

//profile post function start

function post(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // show overlay [x.style.display = 'block']
    overlayEle.style.display = "block";
    // get model-box element
    let postDtl = document.getElementsByClassName("post-box");
    postDtl = postDtl[0];
    // show model-box
    postDtl.style.display = "block";
    let imgShow = document.getElementById("img-shw");
    imgShow.innerHTML = ""; 
}

//profile post image open start

function onUpload(event) {
    event.preventDefault();
    let uploadImg = document.getElementById("uploadInput");
    uploadImg.click();
}

//profile post image open end

//profile post function end

//close post function start

function hidePost(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // hide overlay [x.style.display = 'none']
    overlayEle.style.display = "none";
    // get model-box element
    let postDtl = document.getElementsByClassName("post-box");
    postDtl = postDtl[0];
    // hide model-box
    postDtl.style.display = "none";
}

//close post function end

function hideEle(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // hide overlay [x.style.display = 'none']
    overlayEle.style.display = "none";
    // get model-box element
    let modelEle = document.getElementsByClassName("profile-box");
    modelEle = modelEle[0];
    // hide model-box
    modelEle.style.display = "none";
}

/* profile edit function end */

/* exprience section start */

// send-this's exprienceEle function
function exprienceEle(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // show overlay [x.style.display = 'block']
    overlayEle.style.display = "block";
    // get exprienceEle-box element
    let expriencelEle = document.getElementsByClassName("exprience-box");
    expriencelEle = expriencelEle[0];
    // show exprienceEle-box
    expriencelEle.style.display = "block";
}
// close-this's hideExprience function
function hideExprience(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // hide overlay [x.style.display = 'none']
    overlayEle.style.display = "none";
    // get exprience-box element
    let expriencelEle = document.getElementsByClassName("exprience-box");
    expriencelEle = expriencelEle[0];
    // hide exprience-box
    expriencelEle.style.display = "none";
}

/* exprience section end */

/* education section start */

// send-this's edushowEle function
function edushowEle(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // show overlay [x.style.display = 'block']
    overlayEle.style.display = "block";
    // get exprienceEle-box element
    let edulEle = document.getElementsByClassName("education-box");
    edulEle = edulEle[0];
    // show exprienceEle-box
    edulEle.style.display = "block";
}
// close-this's edushowEle function
function hideEducation(event) {
    event.preventDefault();
    // get overlay element x
    let overlayEle = document.getElementsByClassName("overlay");
    overlayEle = overlayEle[0];
    // hide overlay [x.style.display = 'none']
    overlayEle.style.display = "none";
    // get exprience-box element
    let edulEle = document.getElementsByClassName("education-box");
    edulEle = edulEle[0];
    // hide exprience-box
    edulEle.style.display = "none";
}

/* education section end */

/********************************************************************************************************************/

/*edit and save the user info in local storage start*/
function saveinfo(event) {
    event.preventDefault();
    let input = document.getElementsByClassName("info-form-control");
    let cout = 0;

    for (let r = 0; r < input.length; r++) {
        if (input[r].value.trim() === "") {
            input[r].parentNode.getElementsByTagName("h4")[0].classList.add("invalid-input");
            cout++;
        } else {
            input[r].parentNode.getElementsByTagName("h4")[0].classList.remove("invalid-input");
        }
    }

    if (cout == 0) {
        let fName = document.getElementById("frmName").value;
        let lName = document.getElementById("frmLstname").value;
        let addName = document.getElementById("frmAdname").value;
        let indusName = document.getElementById("frmInd").value;
        let ctryName = document.getElementById("frmctry").value;
        let ctyName = document.getElementById("frmCty").value;

        let objec = {
            fName,
            lName,
            addName,
            indusName,
            ctryName,
            ctyName,
        };
        localStorage.setItem("edtinfoName", JSON.stringify(objec));
        hideEle(event);
        loadSavedData();
    }
}

function loadSavedData() {
    const userele = JSON.parse(localStorage.getItem("edtinfoName"));
    if (userele) {
        if (document.getElementById("frmName")) {
            document.getElementById("frmName").value = userele.fName;
            document.getElementById("frmLstname").value = userele.lName;
            document.getElementById("frmAdname").value = userele.addName;
            document.getElementById("frmInd").value = userele.indusName;
            document.getElementById("frmctry").value = userele.ctryName;
            document.getElementById("frmCty").value = userele.ctyName;
        }

        for (let j = 0; j < myname.length; j++) {
            myname[j].innerHTML = userele.fName + " " + userele.lName;
        }

        let skill = document.getElementsByClassName("user-post");
        for (let e = 0; e < skill.length; e++) {
            skill[e].innerText = userele.indusName;
        }

        let town = document.getElementsByClassName("myTown");
        for (let d = 0; d < town.length; d++) {
            town[d].innerText = userele.ctyName;
        }
    }
}
loadSavedData();

/*edit and save the user info in local storage end*/


/* create a post user array */



let postUserData = [
    {
        id:101,
        firstName: "Ragupathi",
        lastName: "P",
        position: "Senior Developer",
        postText:"Here are some cool web development tricks you must try in your next project 🔥",
        postImg:"https://media.licdn.com/dms/image/D4E22AQEdSHNzbkhvFw/feedshare-shrink_800/0/1684179604471?e=1687392000&v=beta&t=dOA7oGNq9GPJpJ62BS2k3g0HlKfxcq1_8VkWVvUlMpQ",
        postUserId:"12345678"
    },
    {
        id: 102,
        firstName: "Karthick",
        lastName: "D",
        position: "Senior Developer",
        postText:"Update your job preferences to let recruiters know what roles you're interested in.",
        postImg:"https://media.licdn.com/dms/image/sync/C4E18AQHvszE4UGBF2A/companyUpdate-article-image-shrink_627_1200/0/1659691176056?e=1687392000&v=beta&t=pRIst_gNpY9tp8LRpBEA5rYeR2SGRXGX2WVhiAp5Mfs",
        postUserId:"234566778"
    },
    {
        id:103,
        firstName: "Yogesh",
        lastName: "G",
        position: "Senior Developer",
        postText:"Here are some cool web development tricks you must try in your next project 🔥",
        postImg:"https://media.licdn.com/dms/image/D4E22AQEdSHNzbkhvFw/feedshare-shrink_800/0/1684179604471?e=1687392000&v=beta&t=dOA7oGNq9GPJpJ62BS2k3g0HlKfxcq1_8VkWVvUlMpQ",
        postUserId:"12345678"
    },
    {
        id:104,
        firstName: "Harikishore",
        lastName: "B",
        position: "Senior Developer",
        postText:"Here are some cool web development tricks you must try in your next project 🔥",
        postImg:"https://media.licdn.com/dms/image/D4E22AQEdSHNzbkhvFw/feedshare-shrink_800/0/1684179604471?e=1687392000&v=beta&t=dOA7oGNq9GPJpJ62BS2k3g0HlKfxcq1_8VkWVvUlMpQ",
        postUserId:"12345678"
    },
    {
        id:105,
        firstName: "Ivaraja",
        lastName: "G",
        position: "Senior Developer",
        postText:"Here are some cool web development tricks you must try in your next project 🔥",
        postImg:"https://media.licdn.com/dms/image/D4E22AQEdSHNzbkhvFw/feedshare-shrink_800/0/1684179604471?e=1687392000&v=beta&t=dOA7oGNq9GPJpJ62BS2k3g0HlKfxcq1_8VkWVvUlMpQ",
        postUserId:"12345678"
    }
] 


//post the input and image in post storage


if (pageurl.includes("index.html")) {
    let fileInput = document.getElementById("uploadInput");
    let postDescriptionTextarea = document.getElementById("nw-pst-des");
  
    // Get selected file
    fileInput.addEventListener("change", function (event) {
      let file = event.target.files[0];
  
      // FileReader object to read the file
      let reader = new FileReader();
  
      // FileReader onload event
      reader.onload = function (e) {
        let imageSrc = e.target.result; // Get the image source data
  
        // Create an image element to display the selected image
        let imageElement = document.createElement("img");
        imageElement.src = imageSrc;
        imageElement.classList.add("uploaded-image");
  
        let imgShow = document.getElementById("img-shw");
        imgShow.innerHTML = ""; // Clear any existing content
        imgShow.appendChild(imageElement); // Append the image to the container
  
        // Save the image source data to local storage
        localStorage.setItem("selectedImage", imageSrc);
      };
  
      // read file as a data URL
      reader.readAsDataURL(file);
    });
  
    // Get references to the necessary elements
    let postContainer = document.getElementById("post-container");
    let imageInput = document.getElementById("uploadInput");
    let textarea = document.getElementById("nw-pst-des");
    let postButton = document.getElementById("snd-pst-btn");
  
    postButton.addEventListener("click", function () {
      let selectedImage = localStorage.getItem("selectedImage");
      let textareaContent = textarea.value;
      hidePost(event);
      
  
      // Create HTML markup for the post

        let postMarkup = `
        <div class="posts">
          <div class="post-info">
            <div class="post-details">
              <p>${appuser.id}</p>
              <p>${appuser.firstName} ${appuser.lastName}</p>
              <p>${appuser.position}</p>
            </div>
            <div class="post-txt">
              <p>${textareaContent}</p>
            </div>
            <div class="post-img">
              <img src="${selectedImage}" alt="">
            </div>
            <div class="post-actions">
              <div class="commentbox">
                <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;&nbsp;Like</a>
                <a href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i>&nbsp;&nbsp;Comment</a>
                <a href="#"><i class="fa fa-retweet" aria-hidden="true"></i>&nbsp;&nbsp;Repost</a>
                <a href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;Send</a>
              </div>
            </div>
          </div>
        </div>
      `;
      
  
      // Append the post markup to the post-container
      postContainer.innerHTML += postMarkup;
  
      // Save the post data to local storage
      let savedPosts = localStorage.getItem("posts");
      if (savedPosts) {
        savedPosts = JSON.parse(savedPosts);
      } else {
        savedPosts = [];
      }
  
      savedPosts.push({
        appuser: appuser,
        textareaContent: textareaContent,
        selectedImage: selectedImage
      });
  
      localStorage.setItem("posts", JSON.stringify(savedPosts));
  
      // Reset the image input and textarea
      imageInput.value = "";
      textarea.value = "";
  
      // Clear the stored image source data from local storage
      localStorage.removeItem("selectedImage");
    });
  
    // Retrieve posts from local storage on page load
    window.addEventListener("load", function () {
      let savedPosts = localStorage.getItem("posts");
      if (savedPosts) {
        savedPosts = JSON.parse(savedPosts);
        savedPosts.forEach(function (savedPost) {
          let postMarkup = `
            <div class="posts">
              <div class="post-info">
                <div class="post-details">
                  <p>${savedPost.appuser.id}</p>
                  <p>${savedPost.appuser.firstName} ${savedPost.appuser.lastName}</p>
                  <p>${savedPost.appuser.position}</p>
                </div>
                <div class="post-txt">
                  <p>${savedPost.textareaContent}</p>
                </div>
                <div class="post-img">
                  <img src="${savedPost.selectedImage}" alt="">
                </div>
                <div class="post-actions">
                  <div class="commentbox">
                    <a href="#"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>&nbsp;&nbsp;Like</a>
                    <a href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i>&nbsp;&nbsp;Comment</a>
                    <a href="#"><i class="fa fa-retweet" aria-hidden="true"></i>&nbsp;&nbsp;Repost</a>
                    <a href="#"><i class="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;Send</a>
                  </div>
                </div>
              </div>
            </div>
          `;
  
          postContainer.innerHTML += postMarkup;
        });
      }
    });
  }
  
