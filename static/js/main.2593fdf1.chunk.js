(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),s=a.n(r),i=(a(14),a(2)),o=a(3),c=a(1),m=a(5),u=a(4),f=(a(15),a(16),a(17),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).scroll=function(e){return e.current.scrollIntoView({behavior:"smooth"})},n.scroll=n.scroll.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("aside",null,l.a.createElement("div",{className:"aside-container"},l.a.createElement("img",{className:"profile-img",src:"./Images/profile.jpg"}),l.a.createElement("h2",null,"Sanaz Mahmoudi"),l.a.createElement("div",{className:"email"},l.a.createElement("i",{className:"far fa-envelope"}),l.a.createElement("span",null," mahmoudisanaz59@gmail.com")),l.a.createElement("div",{className:"content-scroll"},l.a.createElement("a",{onClick:function(){return e.scroll(e.props.passRefIntro)}},"introduction"),l.a.createElement("a",{onClick:function(){return e.scroll(e.props.passRefAbout)}},"about"),l.a.createElement("a",{onClick:function(){return e.scroll(e.props.passRefTime)}},"timline")),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://twitter.com/SatanMourner",target:"_blank"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{href:"https://www.instagram.com/satanmourner/",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/sanaz-mahmoudi-899448181/",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})),l.a.createElement("a",{href:"https://github.com/shah59"},l.a.createElement("i",{className:"fab fa-github",target:"_blank"})),l.a.createElement("a",{href:"https://gitlab.com/mahmoudi.sanaz59",target:"_blank"},l.a.createElement("i",{className:"fab fa-gitlab"})),l.a.createElement("a",{href:!0,target:"_blank"},l.a.createElement("i",{className:"fab fa-skype"}))),l.a.createElement("p",null,"made with ",l.a.createElement("i",{className:"fa fa-heart"})," and ",l.a.createElement("i",{className:"fa fa-coffee"}))))}}]),a}(l.a.Component)),d=(a(18),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={show:[],clicked:!1},n.print=n.print.bind(Object(c.a)(n)),n.refSlide=[],n}return Object(o.a)(a,[{key:"print",value:function(e){for(var t=0;t<p.length;t++)e.target,this.refSlide[t];console.log(e.target,this.refSlide[0])}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"slider"},l.a.createElement("img",{className:"slide-img",src:"./Images/wall.png"}),l.a.createElement("div",{className:"slides"},p.map((function(e,t){return l.a.createElement("div",{className:"container-slide",key:e.id,style:{display:e.is?"flex":"none"}},e.h1,l.a.createElement("a",{href:e.href,target:"_blank"},l.a.createElement("button",{className:"btn-slide"},e.content," ",l.a.createElement("i",{className:e.i}))))})),l.a.createElement("div",{className:"dot-slide"},l.a.createElement("i",{className:"fa fa-circle",onClick:this.print,ref:function(t){return e.refSlide.push(t)}}),l.a.createElement("i",{className:"fa fa-heart",onClick:this.print,ref:function(t){return e.refSlide.push(t)}}))))}}]),a}(l.a.Component)),p=[{id:1,is:!0,h1:l.a.createElement("h1",null,"Hi! ",l.a.createElement("br",null)," i'm Sanaz"),href:"https://docs.google.com/document/d/1sI9rfUIGP4uDuwhj3bFge--Iq4OdHMtgD4lJgey2-BU/edit?usp=sharing",content:"viwe cv",i:"far fa-file-pdf"},{id:2,is:!1,h1:l.a.createElement("h1",null,"i love building THINGS!!"),href:"https://gitlab.com/mahmoudi.sanaz59",content:"my projects",i:"fas fa-briefcase"}],h=(a(7),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return window.addEventListener("scroll",n.translate)},n.componentWillUnmount=function(){return window.removeEventListener("scroll",n.translate)},n.translate=function(){var e="none";window.pageYOffset>500&&(n.state.scrolled||(e="translate(0px)",n.setState({trans:e,op:1})),setTimeout((function(){n.setState({scrolled:!0})}),500))},n.state={trans:0,scrolled:!1,op:0},n.translate=n.translate.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"intro",ref:this.props.innerRef,style:{transitionDelay:"0.1s",transform:this.state.trans,opacity:this.state.op}},l.a.createElement("h2",null,"who am i?"),l.a.createElement("div",{className:"intro-container"},l.a.createElement("p",null,"i am a computer grad student from university of science and culture. i love exploring new technologies of web.",l.a.createElement("br",null),'i like most computer fields except "Web Design(UI/UX)" because i think it is so difficult for me NOT to include all my personal tastes.',l.a.createElement("br",null),"so this is me and everything you need to know about me.")))}}]),a}(l.a.Component)),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return window.addEventListener("scroll",n.translate)},n.componentWillUnmount=function(){return window.removeEventListener("scroll",n.translate)},n.translate=function(){var e="none",t="none";window.pageYOffset>1e3&&(n.state.scrolled||(e="translateX(0px)",t="translateY(0px)",n.setState({transH:e,transD:t,op:1})),setTimeout((function(){n.setState({scrolled:!0})}),500))},n.state={transH:0,transD:0,scrolled:!1,op:0},n.translate=n.translate.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"about",ref:this.props.innerRef},l.a.createElement("h2",{style:{transitionDelay:"0.1s",transform:this.state.transH,opacity:this.state.op}},"here are some of my expertise"),l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"content",style:{alignSelf:"center",transitionDelay:"0.1s",transform:this.state.transD,opacity:this.state.op}},l.a.createElement("div",{className:"logo-content"},l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 30, 50, 0, 100, 30",fill:"rgb(142, 103, 150)"})),l.a.createElement("i",{className:"fas fa-code"}),l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 0, 50, 30, 100, 0",fill:"rgb(142, 103, 150)"}))),l.a.createElement("h3",null,"web development"),l.a.createElement("p",null,"i have experience building websites using JavaScript, React, jQuery, HTML, CSS.")),l.a.createElement("div",{className:"content",style:{alignSelf:"flex-end",transitionDelay:"0.25s",transform:this.state.transD,opacity:this.state.op}},l.a.createElement("div",{className:"logo-content"},l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 30, 50, 0, 100, 30",fill:"rgb(142, 103, 150)"})),l.a.createElement("i",{className:"fa fa-globe"}),l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 0, 50, 30, 100, 0",fill:"rgb(142, 103, 150)"}))),l.a.createElement("h3",null,"IOT"),l.a.createElement("p",null,"i have experience low-level programming with c and arduino microcontroller.")),l.a.createElement("div",{className:"content",style:{alignSelf:"center",transitionDelay:"0.5s",transform:this.state.transD,opacity:this.state.op}},l.a.createElement("div",{className:"logo-content"},l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 30, 50, 0, 100, 30",fill:"rgb(142, 103, 150)"})),l.a.createElement("i",{className:"fa fa-terminal"}),l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 0, 50, 30, 100, 0",fill:"rgb(142, 103, 150)"}))),l.a.createElement("h3",null,"programming language"),l.a.createElement("p",null,"i like low-level programming languages such as C but i have experience in golang and python for some small projects in university."))))}}]),a}(l.a.Component),g=(a(19),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){return window.addEventListener("scroll",n.translate)},n.componentWillUnmount=function(){return window.removeEventListener("scroll",n.translate)},n.translate=function(){var e="none",t="none";window.pageYOffset>1500&&(n.state.scrolled||(e="translateY(0)",t="translateX(0)",n.setState({transH:e,transLeft:t,op:1})),setTimeout((function(){n.setState({scrolled:!0})}),500))},n.state={transH:0,transLeft:0,scrolled:!1,op:0},n.translate=n.translate.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"timeline",ref:this.props.innerRef},l.a.createElement("h2",{style:{transitionDelay:"0.1s",transform:this.state.transH,opacity:this.state.op}},"timeline"),l.a.createElement("div",{className:"timeline-container t1",style:{transitionDelay:"0.25s",transform:this.state.transLeft,opacity:this.state.op}},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"logo-timeline"},l.a.createElement("i",{className:"fas fa-pen"}))),l.a.createElement("div",{className:"main-side"},l.a.createElement("div",{className:"arrow-container"},l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 10, 10, 0, 10, 20",fill:"rgb(142, 103, 150)"}))),l.a.createElement("div",{className:"main-content"},l.a.createElement("h3",null,"21 Solution, Austria"),l.a.createElement("h4",null,"Front-End Developer"),l.a.createElement("p",null,'I collaborated on a startup project. This project is similar to "Evand.com", but more expanded and it is launched in \xd6sterreich. I wrote static-base ( HTML, CSS, JS ) pages and while working on this project, I also learned a little React.JS and by refactoring old-fashioned code base to Standard-Formed React.JS code base with the help of a supervisor developer.')))),l.a.createElement("div",{className:"timeline-container t2",style:{transitionDelay:"1s",transform:this.state.transH,opacity:this.state.op}},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"logo-timeline"},l.a.createElement("i",{className:"fas fa-pen"}))),l.a.createElement("div",{className:"main-side"},l.a.createElement("div",{className:"arrow-container"},l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 10, 10, 0, 10, 20",fill:"rgb(142, 103, 150)"}))),l.a.createElement("div",{className:"main-content"},l.a.createElement("h3",null,"ielecom, Karaj"),l.a.createElement("h4",null,"Front-End Internship"),l.a.createElement("p",null,"Due to my limited knowledge of the web, I started as an intern and started to learn basic web technologies and developing static-base pages such as HTML 5, CSS 3 and Bootstrap 4.")))),l.a.createElement("div",{className:"timeline-container t1",style:{transitionDelay:"1.75s",transform:this.state.transLeft,opacity:this.state.op}},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"logo-timeline"},l.a.createElement("i",{className:"fas fa-pen"}))),l.a.createElement("div",{className:"main-side"},l.a.createElement("div",{className:"arrow-container"},l.a.createElement("svg",null,l.a.createElement("polygon",{points:"0, 10, 10, 0, 10, 20",fill:"rgb(142, 103, 150)"}))),l.a.createElement("div",{className:"main-content"},l.a.createElement("h3",null,"Rescue Quadcopter, USC"),l.a.createElement("h4",null,"Undergraduate Project"),l.a.createElement("p",null,"i created a rescue quadcopter and my goal is helping to the injured people in emergency situations. i worked with some modules such as Simcard, GPS, Compass to route and send qadcopter with geographical coordinates.")))))}}]),a}(l.a.Component)),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).reset=function(){return window.location.reload(!1)},n.reset=n.reset.bind(Object(c.a)(n)),n.introRef=l.a.createRef(),n.aboutRef=l.a.createRef(),n.timeRef=l.a.createRef(),n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",onLoadedData:this.reset},l.a.createElement(f,{passRefIntro:this.introRef,passRefAbout:this.aboutRef,passRefTime:this.timeRef}),l.a.createElement("section",null,l.a.createElement(d,null),l.a.createElement(h,{innerRef:this.introRef}),l.a.createElement(E,{innerRef:this.aboutRef}),l.a.createElement(g,{innerRef:this.timeRef})))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2593fdf1.chunk.js.map