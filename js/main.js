let input = document.getElementsByClassName("form-control");
let passerr = document.getElementsByClassName("passwrong");
function onsign(event) {
    event.preventDefault();
    let count;
    for (let i = 0; i < input.length; i++) {
        count = 0;
        if (input[i].value.trim() === "") {
            input[i].parentNode.getElementsByTagName("p")[0].classList.add("invalid-input");
            count++;
        } else {
            input[i].parentNode.getElementsByTagName("p")[0].classList.remove("invalid-input");
        }
    }
    if (count == 0) {
        let findUser = user.find(function (check) {	
			localStorage.setItem("userid",check.id);
            return check.userId == input[0].value;
        });

        if (findUser) {
            if (input[1].value == findUser.passWord) {
                passerr[0].getElementsByTagName("p")[0].classList.remove("invalid-input");
                 return logIn(event);

            } else {
                passerr[0].getElementsByTagName("p")[0].classList.add("invalid-input");
            }
        } else {
            passerr[0].getElementsByTagName("p")[0].classList.add("invalid-input");
        }
    }
    //Login page create
    let pageurl = window.location.href;
    if (pageurl.includes("index.html")) {
        let getsLogin = localStorage.getItem("isLogin");

        if (!getsLogin) {
            window.location.replace("login.html");
        }
    }
    //login function
    function logIn(event) {
        event.preventDefault();
        localStorage.setItem("isLogin", true);
        window.location.replace("index.html");
		
    }
	
	
}

//Password show function
let showing = document.getElementById("bdy");
let showPass = document.getElementById("pass");
function show(event) {
    event.preventDefault();
    showPass.setAttribute("type", "text");
}
let user = [
    {
        id:101,
		userId: "rpathi783@gmail.com",
        passWord: "Ugar@2021",
    },
    {
        id:102,
		userId: "karthickd@gmail.com",
        passWord: "karthi8258",
    },
    {
        id:103,
		userId: "yogesh@gmail.com",
        passWord: "yogesh123",
    },
    {
        id:104,
		userId: "harikishorebala@gmail.com",
        passWord: "hari9984bal",
    },
	{
        id:105,
		userId: "ivaraja1996@gmail.com",
        passWord: "boomer",
    }
];

/* name details change  change */
