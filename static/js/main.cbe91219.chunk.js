(window["webpackJsonpabz.agency"]=window["webpackJsonpabz.agency"]||[]).push([[0],{32:function(e,a,t){e.exports=t(46)},37:function(e,a,t){},38:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(22),r=t.n(s),c=(t(37),t(2)),m=t(3),i=t(5),o=t(4),u=t(6),d=(t(38),t(8)),h=t(11),g=(t(39),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).state={menuSidebar:!1,user:[]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users/1").then(function(e){return e.json()}).then(function(a){console.log(a),a.success?e.setState({user:a.user}):console.log("proccess server errors")})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-sm align-items-center fixed-top justify-content-around"},l.a.createElement(d.b,{to:"/",className:"nav-link-logo p-4"},l.a.createElement("img",{src:"../public/logo/logo.svg",alt:"logo",className:"navbar-brand-logo-title"})),l.a.createElement("ul",{className:"navbar-nav align-items-center mt-3  ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/aboutMe",className:"nav-link"},l.a.createElement("h4",null,"About Me"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/relationships",className:"nav-link"},l.a.createElement("h4",null,"Relationships"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/requirements",className:"nav-link"},l.a.createElement("h4",null,"Requirements"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/users",className:"nav-link"},l.a.createElement("h4",null,"Users"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{to:"/signUp",className:"nav-link"},l.a.createElement("h4",null,"Sign Up")))),l.a.createElement(d.b,{to:"/signUp",className:"ml-auto "},l.a.createElement("div",{className:"text-logo d-flex ml-auto justify-content-end"},l.a.createElement("h4",null,this.state.user.name),l.a.createElement("p",null,this.state.user.email)),l.a.createElement("img",{src:this.state.user.photo,alt:"superstar",className:"photos ml-2"}),l.a.createElement("img",{src:"../public/icons/sign-out.svg",className:"ml-3"})),l.a.createElement("div",{className:"align-items-center mr-1"},l.a.createElement("img",{src:"../public/icons/line-menu.svg",alt:"menu",className:"icon-menu p-auto",onClick:function(){return e.setState({menuSidebar:!0})}}))),this.state.menuSidebar?l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar-heading"},l.a.createElement("div",{className:"menuSidebar d-flex justify-content-around"},l.a.createElement("img",{src:this.state.user.photo,alt:"superstar",className:"photos"}),l.a.createElement("i",{className:"far fa-times-circle",onClick:function(){e.setState({menuSidebar:!1})}})),l.a.createElement("div",{className:"superstar d-grid p-2 ml-4 mb-5"},l.a.createElement("h4",{className:"mt-2 mb-0"},this.state.user.name),l.a.createElement("p",null,this.state.user.email)),l.a.createElement("span",{className:"border-bottom-lg border-dark"})),l.a.createElement("div",{className:"list-group d-flex flex-column p-2 ml-4 text-left justify-content-start"},l.a.createElement("a",{href:"#"},l.a.createElement("h4",null,"About Me")),l.a.createElement("a",{href:"#"},l.a.createElement("h4",null,"Relationships")),l.a.createElement("a",{href:"#"},l.a.createElement("h4",null,"Requirements")),l.a.createElement("a",{href:"#"},l.a.createElement("h4",null,"Users")),l.a.createElement("a",{href:"#"},l.a.createElement("h4",null,"Sign Up")))):console.log("not in time"))}}]),a}(n.Component)),p=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"AboutMe d-flex justify-content-center "},l.a.createElement("h1",null,"Let\u2019s get acquainted"),l.a.createElement("div",{className:"mainContainer"},l.a.createElement("div",{className:"d-flex flex-row bd-highlight justify-content-around m-5 p-3"},l.a.createElement("img",{src:"/imgs/man-mobile.svg",alt:"logo",className:"p-2 bd-highlight"}),l.a.createElement("div",{className:"mainTextAboutMe p-2 bd-highlight"},l.a.createElement("h4",null,"I am cool frontend developer"),l.a.createElement("h5",null,"When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load"),l.a.createElement("br",null),l.a.createElement("h5",null,"Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web."),l.a.createElement("br",null),l.a.createElement("h4",{className:"signUpAboutMe"},"Sign Up")))))}}]),a}(n.Component),E=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"titleSkills d-flex justify-content-center text-center"},l.a.createElement("h1",null,"About my relationships with",l.a.createElement("br",null)," web-development")),l.a.createElement("div",{className:"titles d-grid mt-5"},l.a.createElement("div",{className:"row mr-auto ml-auto"},l.a.createElement("div",{className:"col-sm"},l.a.createElement("img",{src:"/imgs/html.svg",logo:"html"}),l.a.createElement("h4",null,"I\u2019m in love with HTML"),l.a.createElement("h5",null,"Hypertext Markup Language(HTML) is the standard markup language for creating web pages and web applications.")),l.a.createElement("div",{className:"col-sm"},l.a.createElement("img",{src:"/imgs/css.svg",logo:"css"}),l.a.createElement("h4",null,"CSS is my best friend"),l.a.createElement("h5",null,"Cascading Style Sheets(CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML")),l.a.createElement("div",{className:"col-sm"},l.a.createElement("img",{src:"/imgs/javascript.svg",logo:"javascript"}),l.a.createElement("h4",null,"JavScript is my passion"),l.a.createElement("h5",null,"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.")))))}}]),a}(n.Component),f=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"RequirementsContainer d-flex justify-content-center text-center"},l.a.createElement("img",{src:"/imgs/bg-2.jpg",className:"img",alt:"background"}),l.a.createElement("h1",null,"General requirements for the test task"),l.a.createElement("div",{className:"RequirementsContainerText p-5"},l.a.createElement("div",{className:"col p-5"},l.a.createElement("p",{className:"mt-3"},"Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.",l.a.createElement("br",null),l.a.createElement("br",null),"If you\u2019re a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.",l.a.createElement("br",null),l.a.createElement("br",null),"Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.")),l.a.createElement("div",{className:"col-image"},l.a.createElement("img",{src:"/imgs/man-laptop-v1.svg",alt:"logo",className:"img"}))))}}]),a}(n.Component),b=t(25),v=t(12),N=t(26);function y(){var e=Object(N.a)(["\n  font-size: 2rem;\n  background: var(--primaryColor);\n  color: var(--background);\n  width: 60%;\n  text-align: -webkit-center;\n  z-index: 3;\n  display: flex;\n  justify-content: center;\n  border: 0.05rem solid var(--background);\n  border-radius: 0.5rem;\n  &:hover {\n    background: #fd7e14;\n    transition: var(--mainTransition);\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return y=function(){return e},e}var x=t(27).a.button(y()),k=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),j=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(i.a)(this,Object(o.a)(a).call(this))).state={email:"",phone:"",name:"",hasAgreedName:!1,hasAgreedEmail:!1,hasAgreedPhone:!1},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(v.a)(e)),e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;t.length>4&&"name"===n?this.setState({hasAgreedName:!0}):this.setState({hasAgreedName:!1}),t.length>11&&"phone"===n?this.setState({hasAgreedPhone:!0}):this.setState({hasAgreedPhone:!1}),k.test(t)?this.setState({hasAgreedEmail:!0}):this.setState({hasAgreedEmail:!1}),this.setState(Object(b.a)({},n,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),console.log("The form was submitted with the following data:"),console.log(this.state)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"signUpContainer pt-5"},l.a.createElement("div",{className:"signUpContainer d-flex justify-content-center"},l.a.createElement("h1",{className:"bd-highlight"},"Register to get a work"),l.a.createElement("h4",{className:"p-3 bd-highlight mt-5"},"Attention! After successful registration and alert, update the list of users in the block from the top")),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"group row mx-auto"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("span",{className:"title"},"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,className:!1===this.state.hasAgreedName?"form-control form-control-lg text-dark is-invalid":"form-control form-control-lg text-dark is-valid",id:"name",placeholder:"Your name"}),!1===this.state.hasAgreedName?l.a.createElement("div",{className:"invalid-feedback d-flex justify-content-center"},"you need more characters"):l.a.createElement("div",{className:"valid-feedback d-flex justify-content-center"},"Looks good!")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("span",{className:"title"},"Email"),l.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChange,className:!1===this.state.hasAgreedEmail?"form-control form-control-lg text-dark is-invalid":"form-control form-control-lg text-dark is-valid",id:"colFormLabelLg",placeholder:"Your email"}),!1===this.state.hasAgreedEmail?l.a.createElement("div",{className:"invalid-feedback d-flex justify-content-center"},"don\u2019t forget about doggy, it\u2019s important"):l.a.createElement("div",{className:"valid-feedback d-flex justify-content-center"},"Alright!")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("span",{className:"title"},"Phone"),l.a.createElement("input",{type:"number",name:"phone",value:this.state.phone,onChange:this.handleChange,className:!1===this.state.hasAgreedPhone?"form-control form-control-lg text-dark is-invalid":"form-control form-control-lg text-dark is-valid",id:"colFormLabelLg",placeholder:"+38( _ _ _ ) _ _ _  _ _  _ _"}),!1===this.state.hasAgreedPhone?l.a.createElement("div",{className:"invalid-feedback d-flex justify-content-center"},"must be more numbers and don\u2019t forget start with `+`"):l.a.createElement("div",{className:"valid-feedback d-flex justify-content-center"},"Okay!"))),l.a.createElement("div",{className:"group row mx-auto"},l.a.createElement("select",{className:"col-sm form-control-lg"},l.a.createElement("option",null,"Select your position"),l.a.createElement("option",null,"trainee/junior"),l.a.createElement("option",null,"middle"),l.a.createElement("option",null,"senior")),l.a.createElement("div",{className:"load-group col-sm"},l.a.createElement("div",{className:"d-inline-flex"},l.a.createElement("input",{type:"photo",className:"input form-control form-control-lg text-dark",id:"colFormLabelLg",placeholder:"Upload your photo"}),l.a.createElement(x,null,"Upload")),l.a.createElement("small",{id:"helper",className:"form-text text-muted"},"File format jpg up to 5 MB, the minimum size of 70x70px"))),l.a.createElement("div",{className:"buttonContainer d-flex justify-content-center"},l.a.createElement(x,null,"SignUp")))),l.a.createElement("div",{className:"footerContainer mt-3"},l.a.createElement("nav",{className:"navbar-icons navbar-expand-lg  d-inline-flex justify-content-around align-items-center pt-1 pb-1"},l.a.createElement("a",{className:"navbar-brand-logo pl-4 d-inline-flex align-items-start mt-2 ml-3",href:"#"},l.a.createElement("img",{src:"/logo/abz.png",width:"30",height:"30",alt:"logo"}),l.a.createElement("h4",{className:"text-white p-1"},"abz.agency")),l.a.createElement("div",{className:"containerContacts d-flex mr-4 justify-content-around"},l.a.createElement("a",{className:"navbar-brand-icons",href:"#"},l.a.createElement("h5",null,"About me")),l.a.createElement("a",{className:"navbar-brand-icons",href:"#"},l.a.createElement("h5",null,"Relationships")),l.a.createElement("a",{className:"navbar-brand-icons",href:"#"},l.a.createElement("h5",null,"Requirements")),l.a.createElement("a",{className:"navbar-brand-icons",href:"#"},l.a.createElement("h5",null,"Users")),l.a.createElement("a",{className:"navbar-brand-icons",href:"#"},l.a.createElement("h5",null,"Sign Up")))),l.a.createElement("div",{className:"footer d-inline-flex justify-content-center"},l.a.createElement("div",{className:"footerContacts d-grid mt-3"},l.a.createElement("div",{className:"mail d-inline-flex p-3 ml-4"},l.a.createElement("img",{src:"/icons/mail.svg",alt:"mail"}),l.a.createElement("h4",{className:"pl-2 mt-2"},"work.of.future@gmail.com")),l.a.createElement("div",{className:"phone d-inline-flex p-3 ml-4"},l.a.createElement("img",{src:"/icons/phone.svg",alt:"phone"}),l.a.createElement("h4",{className:"pl-2 mt-2"},"+38 (050) 789 24 98")),l.a.createElement("div",{className:"cellphone d-inline-flex p-3 ml-4"},l.a.createElement("img",{src:"/icons/cellphone.svg",alt:"cellphone"}),l.a.createElement("h4",{className:"pl-2 mt-2"},"+38 (095) 556 08 45"))),l.a.createElement("div",{className:"linkOnSite d-flex p-1 mt-4 mr-4"},l.a.createElement("div",{className:"col-6 col-md-3"},l.a.createElement("h5",null,"News"),l.a.createElement("h5",null,"Blog"),l.a.createElement("h5",null,"Partners"),l.a.createElement("h5",null,"Shop")),l.a.createElement("div",{className:"col-6 col-md-3"},l.a.createElement("h5",null,"Overview"),l.a.createElement("h5",null,"Design"),l.a.createElement("h5",null,"Code"),l.a.createElement("h5",null,"Collaborate")),l.a.createElement("div",{className:"col-6 col-md-3"},l.a.createElement("h5",null,"Tutorials"),l.a.createElement("h5",null,"Resources"),l.a.createElement("h5",null,"Guides"),l.a.createElement("h5",null,"Examples")),l.a.createElement("div",{className:"col-6 col-md-3"},l.a.createElement("h5",null,"FAQ"),l.a.createElement("h5",null,"Terms"),l.a.createElement("h5",null,"Conditions"),l.a.createElement("h5",null,"Help")))),l.a.createElement("div",{className:"info d-flex mb-5 align-content-center"},l.a.createElement("p",{className:"p2 p-2 ml-4"},l.a.createElement("i",{className:"far fa-copyright"},"abz.agency specially for the test task")),l.a.createElement("div",{className:"infoIcons d-flex justify-content-around mr-4"},l.a.createElement("img",{src:"/icons/facebook.svg",width:"30",height:"30",alt:"facebook",className:"icons"}),l.a.createElement("img",{src:"/icons/linkedin.svg",width:"30",height:"30",alt:"linkedin",className:"icons"}),l.a.createElement("img",{src:"/icons/instagram.svg",width:"30",height:"30",alt:"instagram",className:"icons"}),l.a.createElement("img",{src:"/icons/twitter.svg",width:"30",height:"30",alt:"twitter",className:"icons"}),l.a.createElement("img",{src:"/icons/pinterest.svg",width:"30",height:"30",alt:"pinterest",className:"icons"})))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(i.a)(this,Object(o.a)(a).call(this,e))).fetchData=function(){var e=Object(v.a)(t);fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5").then(function(e){return e.json()}).then(function(a){console.log(a.users),console.log("process success response"),e.setState({users:a.users,buttonAppearance:!0})})},t.state={users:[],buttonAppearance:!1},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"usersContainer mt-5 mx-auto p-4"},l.a.createElement("div",{className:"usersMain d-flex justify-content-center pt-5"},l.a.createElement("h1",{className:"p-2 bd-highlight"},"Our cheerful users"),l.a.createElement("h4",{className:"pt-5 bd-highlight mt-5"},"Attention! Sorting users by registration date")),l.a.createElement("div",{className:"usersMembers "},l.a.createElement("div",{className:"usersRow d-grid"},l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4"},l.a.createElement("img",{src:"/imgs/user-noah-2x.jpg",className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4"},l.a.createElement("h3",null,"Noah"),l.a.createElement("p",{className:"p2"},"Leading specialist of the Control Department",l.a.createElement("br",null),"noah.controldepartment@gmail.com",l.a.createElement("br",null),"+38 (050) 678 03 24"))),l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4"},l.a.createElement("img",{src:"/imgs/user-adolph-2x.png",className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4 "},l.a.createElement("h3",null,"Adolph Baine Charles David Earl"),l.a.createElement("p",{className:"p2"},"The contextual advertising specialist",l.a.createElement("br",null),"adolph.blainecharles-davidearl@gmail.com",l.a.createElement("br",null),"+38 (095) 556 08 45"))),l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4"},l.a.createElement("img",{src:"/imgs/user-liam-2x.jpg",className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4 "},l.a.createElement("h3",null,"Liamgrieescasey Smith Wiam"),l.a.createElement("p",{className:"p2"},"Lead designer",l.a.createElement("br",null),"liamgrievescasey@example.com",l.a.createElement("br",null),"+38 (050) 273 93 32"))),l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4"},l.a.createElement("img",{src:"/imgs/user-elizabeth-2x.jpg",className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4 "},l.a.createElement("h3",null,"Elizabet"),l.a.createElement("p",{className:"p2"},"Frontend developer",l.a.createElement("br",null),"elisabet.frontend@gmail.com",l.a.createElement("br",null),"+38 (095) 924 66 37"))),l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4"},l.a.createElement("img",{src:"/imgs/user-alexander-2x.jpg",className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4 "},l.a.createElement("h3",null,"Alexander"),l.a.createElement("p",{className:"p2"},"Backend developer",l.a.createElement("br",null),"alexander.backend@gmail.com",l.a.createElement("br",null),"+38 (050) 789 24 09"))),l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4"},l.a.createElement("img",{src:"/imgs/user-mason-2x.jpg",className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4"},l.a.createElement("h3",null,"Mason"),l.a.createElement("p",{className:"p2"},"QA",l.a.createElement("br",null),"mason.qa@gmail.com",l.a.createElement("br",null),"+38 (095) 283 27 00"))),!1===this.state.buttonAppearance?l.a.createElement(x,{onClick:this.fetchData},"Show more"):this.state.users.map(function(e){return l.a.createElement("div",{className:"col-sm-6 d-inline-flex p-4",key:e.id},l.a.createElement("img",{src:e.photo,className:"usersImg"}),l.a.createElement("div",{className:"usersInfo ml-1 mt-4 "},l.a.createElement("h3",null,e.name),l.a.createElement("p",{className:"p2"},e.position,l.a.createElement("br",null),e.email,l.a.createElement("br",null),e.phone)))}))))}}]),a}(n.Component),O=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main d-sm-flex justify-content-center"},l.a.createElement("img",{src:"../public/imgs/bg-1.jpg",className:"img-fluid",alt:"background"}),l.a.createElement("div",{className:"mainText d-flex flex-column bd-highlight ml-5 p-3"},l.a.createElement("div",{className:"textMain bd-highlight"},l.a.createElement("h1",null,"Test assignment for Frontend Developer position"),l.a.createElement("p",null,"We kindly remind you that your test assignment should be submitted as a link ti github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good Luck!"),l.a.createElement(x,null,l.a.createElement("h3",{className:"signUp"},"Sign Up")))))}}]),a}(n.Component),S=function(e){function a(){return Object(c.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(g,null),l.a.createElement(h.a,{exact:!0,path:"/",component:O}),l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{path:"/relationships",component:E}),l.a.createElement(h.a,{path:"/aboutMe",component:p}),l.a.createElement(h.a,{path:"/requirements",component:f}),l.a.createElement(h.a,{path:"/signUp",component:j}),l.a.createElement(h.a,{path:"/users",component:w}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(d.a,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.cbe91219.chunk.js.map