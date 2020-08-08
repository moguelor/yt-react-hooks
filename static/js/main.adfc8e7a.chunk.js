(this["webpackJsonpyt-react-hooks"]=this["webpackJsonpyt-react-hooks"]||[]).push([[0],{23:function(e,n,t){e.exports=t(36)},28:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),o=t(17),r=t.n(o),l=(t(28),t(22)),s=t(1),c=t(6),p=t(2),u=t(3);function d(){var e=Object(p.a)(["\n    background-color: #FFF;\n    padding: 1.5rem;\n    margin-right: 0;\n    margin-left: 0;\n    width: ","px;\n    margin: 10px 0px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return d=function(){return e},e}var m=u.a.div(d(),(function(e){var n=e.width;return void 0===n?300:n}));function g(){var e=Object(p.a)(["\n  color: #dc3545;\n  font-weight: 500;\n"]);return g=function(){return e},e}function h(){var e=Object(p.a)(["\n  width: 100%;\n  font-size: 1.2rem;\n  line-height: 2;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n"]);return h=function(){return e},e}function f(){var e=Object(p.a)(["\n  margin-bottom: 0.5rem;\n"]);return f=function(){return e},e}function b(){var e=Object(p.a)(["\n  margin-bottom: 1rem;\n"]);return b=function(){return e},e}var w=u.a.div(b()),y=u.a.label(f()),v=u.a.input(h()),k=u.a.small(g()),I=function(e){var n=e.type,t=void 0===n?"text":n,i=e.value,o=void 0===i?"":i,r=e.handleChange,l=e.label,s=e.error;return a.a.createElement(w,null,a.a.createElement(y,null,l),a.a.createElement(v,{value:o,type:t,onChange:r}),a.a.createElement(k,null,s&&s))};function S(){var e=Object(p.a)(["\n    background-color: #28a745;\n    border: none;\n    padding: 10px 15px;\n    font-size: 15px;\n    border-radius: 5px;\n    color: #FFF;\n"]);return S=function(){return e},e}var E=u.a.button(S());function x(){var e=Object(p.a)(["\n  max-width: 400px;\n"]);return x=function(){return e},e}function A(){var e=Object(p.a)(["\n  width: 50px;\n  height: 50px;\n"]);return A=function(){return e},e}function C(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n"]);return C=function(){return e},e}var j=Object(u.a)(m)(C()),O=u.a.img(A()),T=u.a.a(x()),M=function(e){var n=e.item,t=e.handleClick,i=n.type,o=n.title,r=n.company_logo,l=n.company;return a.a.createElement(j,{width:600},a.a.createElement(O,{src:r}),a.a.createElement(T,null,a.a.createElement("strong",null,o),a.a.createElement("br",null),a.a.createElement("small",null,i),a.a.createElement("br",null),a.a.createElement("small",null,l)),a.a.createElement("div",null,a.a.createElement(E,{onClick:t},"Select")))},F=function(){var e,n=Object(i.useState)(),t=Object(c.a)(n,2),o=t[0],r=t[1],l=Object(i.useState)(),s=Object(c.a)(l,2),p=s[0],u=s[1],d=Object(i.useState)({}),g=Object(c.a)(d,2),h=g[0],f=g[1],b={user:o,password:p};return a.a.createElement(a.a.Fragment,null,"Ejemplo del hook useState().",a.a.createElement(m,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n,t=function(e){var n={};return e.user||(n.user="Ingrese usuario."),e.password?e.password.length<8&&(n.password="Contrase\xf1a muy corta."):n.password="Ingrese contrase\xf1a.",n}(b);(n=t,0===Object.keys(n).length)?alert("Sent to api"):f(t)}},a.a.createElement(I,{label:"Usuario",handleChange:function(e){return r(e.target.value)},value:o,error:h.user}),a.a.createElement(I,{type:"password",label:"Contrase\xf1a",value:p,handleChange:function(e){return u(e.target.value)},error:h.password}),a.a.createElement(E,null,"Ingresar"))),a.a.createElement("pre",null,(e=b,JSON.stringify(e,null,1))))},J=t(11),R=t.n(J),L=t(21),P=[{id:"421871bb-05d3-4fbe-b00c-3f372fa35584",type:"Full Time",url:"https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584",created_at:"Tue Aug 04 17:23:12 UTC 2020",company:"Sticker Mule",company_url:"https://www.stickermule.com/careers",location:"Anywhere",title:"Javascript Engineer",description:"<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internet's fastest-growing printing company. We are privately-owned, profitable, and powered by an outstanding, globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software engineering team operates from 17 different countries, and we're always looking for more exceptional engineers to join us.</p>\n<p>The Software team is responsible for building and maintaining our front-end and back-end services, developing new features and products, and troubleshooting issues in collaboration with the Support team.</p>\n<p><strong><a href=\"https://www.stickermule.com/about\">See more about our teams here</a></strong></p>\n<p><strong>What we offer</strong></p>\n<ol>\n<li>Remote working with flexible schedule.</li>\n<li>Opportunity to make a large impact as part of a small, highly motivated team.</li>\n<li>Varied, interesting technical challenges to work on.</li>\n</ol>\n<p><strong>Requirements</strong></p>\n<ol>\n<li>Docker</li>\n<li>NextJS</li>\n<li>React</li>\n<li>NodeJS</li>\n<li>GraphQL</li>\n<li>Postgres</li>\n<li>Redis</li>\n<li>Familiarity with Ruby</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>The process</strong></p>\n<ol>\n<li>Selected candidates are invited for an introductory interview</li>\n<li>A technical interview discussing your background and work samples provided</li>\n<li>A final meeting with our VP of HR.</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$90,000-$115,000+</li>\n<li>Signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n",how_to_apply:'<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29">https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29</a></p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmlIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--16cf20c989aa63b40869fa6efa450a4e1a79538d/01-sticker-mule-logo-dark-stacked.png"},{id:"12002611-44b5-42f0-b75c-1cc3c2b6eee7",type:"Full Time",url:"https://jobs.github.com/positions/12002611-44b5-42f0-b75c-1cc3c2b6eee7",created_at:"Tue Aug 04 17:05:59 UTC 2020",company:"Thought Industries",company_url:"https://www.thoughtindustries.com/",location:"Remote (USA)",title:"JavaScript Application Engineer (Remote)",description:"<p>We're looking for a JavaScript Application Engineer to help us build out our SaaS Learning Business Platform. Your day to day would be split between improving existing functionality, building &amp; shipping new functionality &amp; integrations, and improving the platform as a whole, such as introducing bundle splitting, working on performance, and upgrading our dependencies.</p>\n<p>You would be a good fit if:</p>\n<ul>\n<li>You are excited about new JavaScript technologies like Prettier and GraphQL, but also comfortable mixing them with older technology.</li>\n<li>You sweat the small stuff, but know when to ship it.</li>\n<li>You are passionate about listening to users &amp; building elegant web products.</li>\n<li>You are comfortable navigating a large existing codebase and learning new technologies and techniques along the way.</li>\n<li>You have 2+ years of experience working in a team production environment shipping code.</li>\n</ul>\n<p>We are looking to add multiple team members across frontend and backend roles, so we are open to your experience across the stack.</p>\n<p>Our stack consists primarily of Node.js with Koa, GraphQL, and Ember.js. Although we are an Ember shop, we are open to any framework experience you might have as the concepts will likely be familiar.</p>\n<p>Throughout the day, we rely on Slack and GitHub pull requests. The development team is completely distributed across the US, and has been since the inception of Thought Industries \u2014 we haven't bolted on remote processes due to COVID-19, we've always done it this way, so you'll feel right at home.</p>\n<p><strong>About Thought Industries</strong></p>\n<p>Thought Industries is a startup in the Online Learning space. We enable training and software companies to launch and monetize external learning programs \u2014 think Shopify meets Udemy/Coursera.</p>\n<p>This is a full-time position that is based at your remote U.S. based office. No Recruiters, please.</p>\n<p>Headquartered in Boston, Massachusetts, Thought Industries is one of the world\u2019s fastest-growing online learning companies in the U.S. We are helping consumer brands and for-profit learning organizations change how they build, deploy and grow online learning businesses. Today, hundreds of customers and brands are using the Thought Industries\u2019 Learning Business Platform to transform the way they reach, teach, and engage audiences.</p>\n<p>We are a growing, well-funded technology company, with a talented team and a clear vision. This is a unique opportunity to take a lead role at an exciting SaaS software company with a robust cloud-based platform. We hire talented people who are self-motivated and team orientated. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability or veteran status.</p>\n",how_to_apply:'<p>Please submit a cover letter explaining what kind of role you are looking for and why Thought Industries specifically interests you along with your resume to <a href="mailto:devjob@thoughtindustries.com">devjob@thoughtindustries.com</a>.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbk9IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf8ef4a52a69fc2375b11d224b655c662fecd537/logo.png"},{id:"df4c0214-e31f-4bed-9d8c-3222c35ac914",type:"Full Time",url:"https://jobs.github.com/positions/df4c0214-e31f-4bed-9d8c-3222c35ac914",created_at:"Tue Aug 04 00:28:28 UTC 2020",company:"Car Registration, inc. ",company_url:"http://www.carregistration.com",location:"Elk Grove, CA",title:"Software Engineer",description:'<p>Car Registration, Inc.</p>\n<p>Car Registration, Inc. (CRI) provides comprehensive, on-line vehicle registration and titling services for consumers who desire or need a DMV alternative.  Currently licensed and bonded under the California DMV\u2019s Business Partner Automation program, CRI successfully processes over 250,000 transactions per year while reducing wait times and allowing the CA DMV to reallocate its resources to other services and administrative tasks.  With CRI, customers can get same-day processing, next day delivery and comprehensive telephone and email support.  Through its website, CRI collects fees from vehicle owners, transmits fees to the DMV in real time and issues registration cards and stickers to the customer via USPS or express courier.</p>\n<p>Job Description\nCRI, is a leader in providing consumers direct access to DMV services through our online technology. We provide customers the ability to skip the line at the DMV by using our online platform to renew, replace, or transfer their vehicle registration and title. You will join a small but profitable start-up with the ability to shape and grow our software. We are looking for a self-motivated developer that is comfortable working on a cloud-based full stack built with Go, PHP, and JavaScript for both customer-facing and internal applications. In your role, you will join a small team of software developers to build new software, new features, and maintain existing functionality.</p>\n<p>This is a full-time remote position with competitive salary and benefits including medical, dental, vision, 401K plan and more. We are based in Elk Grove, CA. Though you won\u2019t work in the office, we regularly communicate via Slack and Google Meets. Our annual holiday party is fun and inclusive and offers a great opportunity to catch-up with the team in person.</p>\n<p>Skills &amp; Requirements\n1+ year professional coding with Golang\n3+ years professional coding with PHP, Python, Ruby, or another server-side scripting language\n2+ years professional coding with JavaScript\n3+ years professional experience using a SQL database such as PostgreSQL, MySQL, Oracle, or MSSQL\nExperience integrating RESTful and/or gRPC APIs\nAbility to design and implement solutions to both frontend and backend problems from a non-technical specification into a finished feature\nExposure to DevOps practices including infrastructure as code, continuous integration, monitoring, and logging\nComfortable developing in a Mac or Linux environment\nFamiliarity with event-based functional architectures\nFamiliarity with MVC or MVVM architectures\nSecurity-conscious practices in any software built</p>\n<p>Desirable Qualifications\nExperience with cloud-based distributed systems on providers such as AWS\nExperience with docker or container technologies\nExperience with CDNs\nExperience developing web-based business applications with complex workflows\nDatabase administration experience including setting up and maintaining replication servers\nBachelor\u2019s degree, preferably in Computer Science or related discipline</p>\n<p>If you are interested, please send your resume to <a href="mailto:Jobs@carregistration.com">Jobs@carregistration.com</a>.</p>\n<p>CANDIDATES only please.</p>\n<p>Equal Opportunity Employer\nCRI is an equal opportunity employer to all, regardless of age, ancestry, color, disability (mental and physical), exercising the right to family care and medical leave, gender, gender expression, gender identity, genetic information, marital status, medical condition, military or veteran status, national origin, political affiliation, race, religious creed, sex (includes pregnancy, childbirth, breastfeeding and related medical conditions), and sexual orientation.</p>\n<p>It is an objective of CRI to achieve a drug-free workplace. Any applicant for  employment will be expected to behave in accordance with this objective.</p>\n',how_to_apply:'<p>If you are interested, please send your resume to <a href="mailto:Jobs@carregistration.com">Jobs@carregistration.com</a>.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbG1IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--72882d4c37d2fd5cf977485d033eeaafee596f34/CarRegistration_Logo-02.png"},{id:"534af056-a770-421a-afd0-4734c464fb5e",type:"Full Time",url:"https://jobs.github.com/positions/534af056-a770-421a-afd0-4734c464fb5e",created_at:"Mon Aug 03 20:26:45 UTC 2020",company:"Agiloft",company_url:"http://agiloft.com",location:"Russia",title:"Sr. Front End Developer (Remote)",description:'<p><strong>THRIVE WITH AGILOFT</strong></p>\n<p>Are you an experienced Sr. Front End Developer who is successful, motivated, smart, energetic, and looking for a rewarding position in a growing, profitable and dynamic company?</p>\n<p>Agiloft is expanding our developer team, looking for Sr. Front End Developers that thrive working with enterprises in multiple industries, with unique business challenges requiring sophisticated solution design.</p>\n<p><strong>WHY JOIN AGILOFT?</strong></p>\n<ul>\n<li>\n<p>Agiloft was named the market leader in every category in the <a href="https://www.agiloft.com/flash/Gartner_critical_capabilities_for_CLM.pdf">Gartner Critical Capabilities for CLM report</a>, and a market leader in the Gartner Magic Quadrant.</p>\n</li>\n<li>\n<p>Contract Lifecycle Management (CLM) is one of the fastest growing areas of enterprise sales, with a TAM projected to climb from $2B to $7B in the next 5 years.</p>\n</li>\n<li>\n<p>The Agiloft Contract and Commerce Lifecycle Platform has won over <a href="https://www.agiloft.com/awards.htm">a dozen awards, including the Editor\'s Choice award from PC Mag</a>, for the past five years in a row.</p>\n</li>\n</ul>\n<ul>\n<li>\n<p>Agiloft has a highly differentiated value proposition which is uniquely appealing to enterprises: pre-built applications with a deeply configurable, no-code platform for integrated Business Process Management throughout an organization.</p>\n</li>\n<li>\n<p>Agiloft is pioneering the applied use of Artificial Intelligence to enable next-generation business commerce at organizations ranging from small enterprises to U.S. government agencies and Fortune 100 companies.</p>\n</li>\n<li>\n<p>Agiloft is the only company in the industry with the confidence to provide an unconditional satisfaction guarantee, and you too will be successful with Agiloft.</p>\n</li>\n</ul>\n<p>As the leader in the CCLM market, Agiloft is winning many Enterprise deals and looking to hire the best talent to meet this demand with a competitive compensation plan that rewards overachievement.</p>\n<p><strong>POSITION OVERVIEW</strong></p>\n<p>The Senior Front-End Developer will join the development team responsible for implementation, improvement and maintenance of the Agiloft frontend architecture. The ideal candidate will have demonstrated experience with the development and maintenance of Enterprise-grade applications as well as the application of modern frontend frameworks.</p>\n<p>This is a remote-only position. You must be comfortable with setting your own schedule and proactively collaborating in a globally dispersed team using a variety of communication channels.</p>\n<p><strong>JOB RESPONSIBILITIES</strong></p>\n<ul>\n<li>Design, build, and maintain efficient, reusable, and reliable front-end code.</li>\n<li>Build cross-browser solutions optimized for a wide range of devices.</li>\n<li>Identify UI problems and bugs and devise elegant solutions.</li>\n<li>Make strategic technical decisions related to new products and functionalities.</li>\n<li>Help maintain code quality.</li>\n<li>Onboard and mentor new team members.</li>\n</ul>\n<p><strong>REQUIRED QUALIFICATIONS</strong></p>\n<ul>\n<li>\n<p>A minimum of three years of experience in working on large projects/Enterprise applications including, but not limited to version control tools, automated software testing, automating software build tools</p>\n</li>\n<li>\n<p>Strong knowledge of HTML5, CSS3, JavaScript and modern frontend development frameworks</p>\n</li>\n<li>\n<p>Knowledgeable about UI development concepts like Responsive Design, SPA, Modular Design</p>\n</li>\n<li>\n<p>Working knowledge of Java</p>\n</li>\n</ul>\n<p>Experience with:</p>\n<ul>\n<li>Struts 2, JSP</li>\n<li>Popular JS frameworks like Vue, React, Angular</li>\n<li>Relational databases such as MySQL, MSSQL, Oracle</li>\n<li>Rest API implementation</li>\n</ul>\n<p><strong>BENEFITS AND PERKS</strong></p>\n<ul>\n<li>Competitive salary ($30 USD hourly)</li>\n<li>Referral bonuses</li>\n<li>Flexible work schedules</li>\n<li>Professional development and career growth opportunities</li>\n<li>Awesome team members</li>\n</ul>\n<p><strong>INTERESTED? APPLY NOW!</strong></p>\n<p>For a full list of open positions and to submit your application, go to our website <a href="http://www.agiloft.com/jobs.htm">http://www.agiloft.com/jobs.htm</a></p>\n',how_to_apply:'<p>For immediate consideration, go to <a href="https://www.agiloft.com/jobs.htm">https://www.agiloft.com/jobs.htm</a>, click the Apply button, fill out the online form and attach your resume.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3FIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--405c1ff0ada5560604737daa783da21f32fd1349/Agiloft%20Logo%20plain%20(Indeed).png"},{id:"467c9673-9f0f-4ecf-af99-1a91a790f8b2",type:"Full Time",url:"https://jobs.github.com/positions/467c9673-9f0f-4ecf-af99-1a91a790f8b2",created_at:"Fri Jul 31 21:36:32 UTC 2020",company:"Agiloft ",company_url:"http://www.agiloft.com",location:"India",title:" Sr. Front End Developer (Remote)",description:'<p><strong>THRIVE WITH AGILOFT</strong></p>\n<p>Are you an experienced Sr. Front End Developer who is successful, motivated, smart, energetic, and looking for a rewarding position in a growing, profitable and dynamic company?</p>\n<p>Agiloft is expanding our developer team, looking for Sr. Front End Developers that thrive working with enterprises in multiple industries, with unique business challenges requiring sophisticated solution design.</p>\n<p><strong>WHY JOIN AGILOFT?</strong></p>\n<ul>\n<li>\n<p>Agiloft was named the market leader in every category in the <a href="https://www.agiloft.com/flash/Gartner_critical_capabilities_for_CLM.pdf">Gartner Critical Capabilities for CLM report</a>, and a market leader in the Gartner Magic Quadrant.</p>\n</li>\n<li>\n<p>Contract Lifecycle Management (CLM) is one of the fastest growing areas of enterprise sales, with a TAM projected to climb from $2B to $7B in the next 5 years.</p>\n</li>\n<li>\n<p>The Agiloft Contract and Commerce Lifecycle Platform has won over <a href="https://www.agiloft.com/awards.htm">a dozen awards, including the Editor\'s Choice award from PC Mag</a>, for the past five years in a row.</p>\n</li>\n</ul>\n<ul>\n<li>\n<p>Agiloft has a highly differentiated value proposition which is uniquely appealing to enterprises: pre-built applications with a deeply configurable, no-code platform for integrated Business Process Management throughout an organization.</p>\n</li>\n<li>\n<p>Agiloft is pioneering the applied use of Artificial Intelligence to enable next-generation business commerce at organizations ranging from small enterprises to U.S. government agencies and Fortune 100 companies.</p>\n</li>\n<li>\n<p>Agiloft is the only company in the industry with the confidence to provide an unconditional satisfaction guarantee, and you too will be successful with Agiloft.</p>\n</li>\n</ul>\n<p>As the leader in the CCLM market, Agiloft is winning many Enterprise deals and looking to hire the best talent to meet this demand with a competitive compensation plan that rewards overachievement.</p>\n<p><strong>POSITION OVERVIEW</strong></p>\n<p>The Senior Front-End Developer will join the development team responsible for implementation, improvement and maintenance of the Agiloft frontend architecture. The ideal candidate will have demonstrated experience with the development and maintenance of Enterprise-grade applications as well as the application of modern frontend frameworks.</p>\n<p>This is a remote-only position. You must be comfortable with setting your own schedule and proactively collaborating in a globally dispersed team using a variety of communication channels.</p>\n<p><strong>JOB RESPONSIBILITIES</strong></p>\n<ul>\n<li>Design, build, and maintain efficient, reusable, and reliable front-end code.</li>\n<li>Build cross-browser solutions optimized for a wide range of devices.</li>\n<li>Identify UI problems and bugs and devise elegant solutions.</li>\n<li>Make strategic technical decisions related to new products and functionalities.</li>\n<li>Help maintain code quality.</li>\n<li>Onboard and mentor new team members.</li>\n</ul>\n<p><strong>REQUIRED QUALIFICATIONS</strong></p>\n<ul>\n<li>\n<p>A minimum of three years of experience in working on large projects/Enterprise applications including, but not limited to version control tools, automated software testing, automating software build tools</p>\n</li>\n<li>\n<p>Strong knowledge of HTML5, CSS3, JavaScript and modern frontend development frameworks</p>\n</li>\n<li>\n<p>Knowledgeable about UI development concepts like Responsive Design, SPA, Modular Design</p>\n</li>\n<li>\n<p>Working knowledge of Java</p>\n</li>\n</ul>\n<p>Experience with:</p>\n<ul>\n<li>Struts 2, JSP</li>\n<li>Popular JS frameworks like Vue, React, Angular</li>\n<li>Relational databases such as MySQL, MSSQL, Oracle</li>\n<li>Rest API implementation</li>\n</ul>\n<p><strong>BENEFITS AND PERKS</strong></p>\n<ul>\n<li>Competitive salary ($30 USD hourly)</li>\n<li>Referral bonuses</li>\n<li>Flexible work schedules</li>\n<li>Professional development and career growth opportunities</li>\n<li>Awesome team members</li>\n</ul>\n<p><strong>INTERESTED? APPLY NOW!</strong></p>\n<p>For a full list of open positions and to submit your application, go to our website <a href="http://www.agiloft.com/jobs.htm">http://www.agiloft.com/jobs.htm</a></p>\n',how_to_apply:'<p>For immediate consideration, go to <a href="https://www.agiloft.com/jobs.htm">https://www.agiloft.com/jobs.htm</a>, click the Apply button, fill out the online form and attach your resume.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTJIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d382a9619048c4335f6a0c9d5e7a003d4daf4ae4/Agiloft%20Logo%20plain%20(Indeed).png"}],_=function(){var e=Object(i.useState)(!1),n=Object(c.a)(e,2),t=n[0],o=n[1],r=Object(i.useState)([]),l=Object(c.a)(r,2),s=l[0],p=l[1],u=Object(i.useState)(),d=Object(c.a)(u,2),m=d[0],g=d[1];Object(i.useEffect)((function(){(function(){var e=Object(L.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react.js&page=1");case 3:if(200!==(n=e.sent).status&&g(n.statusText),e.t0=p,200!==n.status){e.next=12;break}return e.next=9,n.json();case 9:e.t1=e.sent,e.next=13;break;case 12:e.t1=P;case 13:e.t2=e.t1,(0,e.t0)(e.t2),o(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=Object(i.useState)("Select Job"),f=Object(c.a)(h,2),b=f[0],w=f[1];return Object(i.useEffect)((function(){document.title=b}),[b]),Object(i.useEffect)((function(){var e=document.body;return e.addEventListener("mouseout",(function(e){return e.clientY<10&&alert("Hey don't leave please.")})),function(){return e.removeEventListener("mouseout",(function(){return"See you.."}))}}),[]),a.a.createElement("div",null,"Ejemplo del hook useEffect(). ",a.a.createElement("br",null),t?"Loading...":a.a.createElement("div",null,a.a.createElement("small",null,m&&m),s.map((function(e,n){return a.a.createElement(M,{key:n,item:e,handleClick:function(){return w(e.title)}})}))))};var D=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/yt-react-hooks"},a.a.createElement(F,null)),a.a.createElement(s.a,{path:"/yt-react-hooks/useState"},a.a.createElement(F,null)),a.a.createElement(s.a,{path:"/yt-react-hooks/useEffect"},a.a.createElement(_,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.adfc8e7a.chunk.js.map