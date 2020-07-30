(this["webpackJsonpgame-app"]=this["webpackJsonpgame-app"]||[]).push([[0],{191:function(e,t){var n=function(e){var t=Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&");return"?".concat(t)},a=function(e,t,n){return new Promise((function(a,r){var o={url:e,method:t,contentType:"application/json",success:function(e){a(e)},error:function(e){a({success:!1,message:"\u7f51\u7edc\u9519\u8bef, \u8bf7\u91cd\u65b0\u5c1d\u8bd5"})}};if("post"===t){var c=JSON.stringify(n);o.data=c}!function(e){var t=new XMLHttpRequest;t.open(e.method,e.url,!0),void 0!==e.contentType&&t.setRequestHeader("Content-Type",e.contentType),t.onreadystatechange=function(n){if(4===t.readyState){if(200==t.status){var a=JSON.parse(t.response);e.success(a)}500==t.status&&e.error()}},"GET"===e.method?t.send():t.send(e.data)}(o)}))},r={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e+n(t),o="get",c={};return a(r,o,c)},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e,r="post";return a(n,r,t)}};e.exports=r},219:function(e,t,n){n(220),e.exports=n(427)},249:function(e,t,n){},254:function(e,t,n){},256:function(e,t,n){},415:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(249),n(36)),s=n(37),l=n(39),u=n(38),m=n(57),d=n(41),f=n(22),p=n(61),h=n.n(p),v=n(92),b=n(192),g=n(428),y=n(431),E=n(42),k=n(62),O="https://reactnd-books-api.udacity.com",j=localStorage.token;j||(j=localStorage.token=Math.random().toString(36).substr(-8));var w={Accept:"application/json",Authorization:j},x=function(e,t){return fetch("".concat(O,"/books/").concat(e.id),{method:"PUT",headers:Object(k.a)(Object(k.a)({},w),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},L=n(191),S=n.n(L),C={getList:function(e){return S.a.get("/book/list",e).then((function(e){return e}))}},N=C,T=(n(254),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(){var t=Object(v.a)(h.a.mark((function t(n,a){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.target.value,t.next=3,e.moveToBookShelf(a,r);case 3:return t.next=5,e.props.getBookList();case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.moveToBookShelf=function(){var e=Object(v.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,n);case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e.state={},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.bookItem,n=e.bookList,o=t.id,c=t.title,i=(t.imageLinks,t.authors),s=void 0===i?[]:i,l=t.cover,u=t.url;n.find((function(e){return t.id===e.id}));return r.a.createElement(a.Fragment,null,r.a.createElement(d.b,{to:{pathname:"iframe",query:{url:u}}},r.a.createElement("li",{key:o},r.a.createElement("div",{className:"book"},r.a.createElement("div",{className:"book-top"},r.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:l?"url(".concat(l,")"):""}})),r.a.createElement("div",{className:"book-title"},c),r.a.createElement("div",{className:"book-authors"},s.join())))))}}]),n}(r.a.Component)),U=T,I=(n(256),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={bookList:[],visible:!0,videoVisible:!1},e.getBookList=Object(v.a)(h.a.mark((function t(){var n,a,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getList();case 2:n=t.sent,a=n.success,r=n.data,o=n.msg,a?e.setState({bookList:r}):b.a.error("".concat(o));case 7:case"end":return t.stop()}}),t)}))),e.handleOk=function(t){e.setState({visible:!1,videoVisible:!0})},e.handleCancel=function(t){e.setState({visible:!1})},e.videoHandleCancel=function(){e.setState({videoVisible:!1})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getBookList()}},{key:"render",value:function(){var e=this,t=this.state,n=t.bookList,a=t.visible,o=t.videoVisible;return r.a.createElement("div",{className:"home-books-results"},!o&&!a&&r.a.createElement(g.a,{tip:"\u52a0\u8f7d\u4e2d...",spinning:!(n.length>0)},r.a.createElement("ol",{className:"books-grid"},n.map((function(t){return r.a.createElement(U,{key:t.id,bookList:n,getBookList:e.getBookList,bookItem:t})})))),r.a.createElement(y.a,{title:null,visible:a,onOk:this.handleOk,closable:!1,onCancel:this.handleCancel,bodyStyle:{textAlign:"center"},footer:[r.a.createElement(E.a,{key:"submit",type:"primary",onClick:this.handleOk},"\u786e\u5b9a")]},"\u5f00\u59cb\u5b9e\u9a8c\u524d\u8bf7\u60a8\u89c2\u770b\u672c\u7cfb\u7edf\u6559\u5b66\u89c6\u9891"),r.a.createElement(y.a,{title:null,visible:o,onCancel:this.videoHandleCancel,footer:null},r.a.createElement("div",{style:{width:200,height:200}},"video")))}}]),n}(r.a.Component)),A=I,B=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.iframeEl.onload=function(){e.setState({isLoading:!1})}}},{key:"render",value:function(){var e=this,t=this.state.isLoading,n=this.props.location.query||{};return r.a.createElement("div",{className:"iframe-container",style:{paddingLeft:10,width:1024,height:798,WebkitOverflowScrolling:"touch",background:"rgb(245, 247, 250)"}},t?r.a.createElement("div",{style:{position:"absolute",zIndex:1e3,left:0,top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgb(245, 247, 250)"}},r.a.createElement(g.a,null)):null,r.a.createElement("iframe",{title:"\u5916\u94fe",ref:function(t){return e.iframeEl=t},allowtransparency:"no",src:n.url,frameBorder:"0",width:"100%",height:"100%",scrolling:"yes"}))}}]),n}(a.Component),P=B,D=n(434),R=n(159),q=function(e){var t=e.location.pathname.split("/")[1]||"home";return r.a.createElement(R.a,{mode:"horizontal",selectedKeys:[t]},r.a.createElement(R.a.Item,{key:"home"},r.a.createElement(d.c,{to:"/",exact:!0,activeClassName:"active"},"Home")),r.a.createElement(R.a.Item,{key:"order"},r.a.createElement(d.c,{to:"/",activeClassName:"active"},"Order")))},H=Object(f.f)(q),M=function(e){e.user;return r.a.createElement(D.a,{className:"site-page-header",backIcon:!1,title:"Books View",extra:r.a.createElement(H,null)})},V=Object(m.b)((function(e){var t=e.authUser;return{user:e.users[t]}}))(M),F=n(430),J=n(436),z=n(437),W=n(433),_=n(435),G=n(85),K="SET_AUTHED_USER";function X(e){return{type:K,id:e}}var Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleSubmit=function(t){var n=e.props.setAuthUser,a=t.username,r=t.password;"admin"===a&&"123"===r?new Promise((function(e,t){b.a.success("\u767b\u9646\u6210\u529f"),setTimeout((function(){return e()}),500)})).then((function(){return n(a)})):b.a.error("\u8d26\u53f7\u5bc6\u7801\u9519\u8bef")},e.generateDropdownData=function(){return e.props.users.map((function(e){return{key:e.id,text:e.name,value:e.id,image:{avatar:!0,src:e.avatarURL}}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(W.a,{style:{width:"100%"},onFinish:this.handleSubmit,className:"login-form"},r.a.createElement(W.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(_.a,{prefix:r.a.createElement(J.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(W.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(_.a,{prefix:r.a.createElement(z.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(W.a.Item,null,r.a.createElement(G.a,{justify:"center"},r.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Login"))))}}]),n}(a.Component),Y=Object(m.b)((function(e){var t=e.users;return{users:Object.values(t)}}),{setAuthUser:X})(Q),Z=(n(415),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1},e.handleLoading=function(){e.setState({loading:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){this.state.loading;return r.a.createElement("div",{className:"login-box flex-wrap flex-center flex-middle flex-direction-column"},r.a.createElement(F.a,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{align:"center"},"Welcome to the App!")),style:{width:"100%"}},r.a.createElement(Y,{onLoading:this.handleLoading})))}}]),n}(a.Component)),$=Z,ee=n(432),te=(n(429),n(438),n(439),n(440),ee.a.Title,ee.a.Paragraph,function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.authUser;e.loading;return r.a.createElement(d.a,null,r.a.createElement(a.Fragment,null,t&&r.a.createElement(V,null),r.a.createElement("div",{className:"container flex-wrap flex-center flex-middle flex-direction-column"},t?r.a.createElement(a.Fragment,null,r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:A}),r.a.createElement(f.a,{path:"/iframe",component:P}))):r.a.createElement(f.a,{render:function(){return r.a.createElement($,null)}}))))}}]),n}(a.Component)),ne=Object(m.b)((function(e){return{authUser:e.authUser,loading:e.LoadingBar}}))(te),ae=n(50);function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return t.id;default:return e}}var oe="RECEIVE_USERS";function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(k.a)(Object(k.a)({},e),t.users);default:return e}}var ie=Object(ae.combineReducers)({authUser:re,users:ce}),se=n(214),le=Object(ae.applyMiddleware)(se.a),ue=n(215),me=Object(ae.createStore)(ie,Object(ue.composeWithDevTools)(le));c.a.render(r.a.createElement(m.a,{store:me},r.a.createElement(ne,null)),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=index.c027bcf2.chunk.js.map