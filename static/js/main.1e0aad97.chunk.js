(this["webpackJsonpyt-react-hooks"]=this["webpackJsonpyt-react-hooks"]||[]).push([[0],{27:function(e,t,n){e.exports=n(40)},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(20),r=n.n(o),l=(n(32),n(25)),s=n(3),c=n(4),u=n(1),p=n(2);function d(){var e=Object(u.a)(["\n    background-color: #FFF;\n    padding: 1.5rem;\n    margin-right: 0;\n    margin-left: 0;\n    width: ","px;\n    margin: 10px 0px;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n"]);return d=function(){return e},e}var m=p.b.div(d(),(function(e){var t=e.width;return void 0===t?300:t}));function f(){var e=Object(u.a)(["\n  color: #dc3545;\n  font-weight: 500;\n"]);return f=function(){return e},e}function g(){var e=Object(u.a)(["\n  width: 100%;\n  font-size: 1.2rem;\n  line-height: 2;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n\n  ::placeholder {\n    font-size: 15px;\n    font-family: Roboto;\n    padding: 10px;\n    font-weight: 300;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(u.a)(["\n  margin-bottom: 0.5rem;\n"]);return h=function(){return e},e}function b(){var e=Object(u.a)(["\n  margin-bottom: 1rem;\n"]);return b=function(){return e},e}var w=p.b.div(b()),v=p.b.label(h()),y=p.b.input(g()),x=p.b.small(f()),E=function(e){var t=e.type,n=void 0===t?"text":t,i=e.value,o=void 0===i?"":i,r=e.handleChange,l=e.label,s=e.error,c=e.placeholder;return a.a.createElement(w,null,a.a.createElement(v,null,l),a.a.createElement(y,{value:o,type:n,onChange:r,placeholder:c}),a.a.createElement(x,null,s&&s))};function C(){var e=Object(u.a)(["\n    background-color: #28a745;\n    border: none;\n    padding: 10px 15px;\n    font-size: 15px;\n    border-radius: 5px;\n    color: #FFF;\n"]);return C=function(){return e},e}var k=p.b.button(C());function j(){var e=Object(u.a)(["\n  max-width: 400px;\n"]);return j=function(){return e},e}function I(){var e=Object(u.a)(["\n  width: 50px;\n  height: 50px;\n"]);return I=function(){return e},e}function S(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  align-items: center;\n"]);return S=function(){return e},e}var O=Object(p.b)(m)(S()),A=p.b.img(I()),R=p.b.a(j()),T=function(e){var t=e.item,n=e.handleClick,i=t.type,o=t.title,r=t.company_logo,l=t.company;return a.a.createElement(O,{width:600},a.a.createElement(A,{src:r}),a.a.createElement(R,null,a.a.createElement("strong",null,o),a.a.createElement("br",null),a.a.createElement("small",null,i),a.a.createElement("br",null),a.a.createElement("small",null,l)),a.a.createElement("div",null,a.a.createElement(k,{onClick:n},"Select")))},F=function(e){return JSON.stringify(e,null,1)},L=function(){var e=Object(i.useState)(),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(i.useState)(),l=Object(c.a)(r,2),s=l[0],u=l[1],p=Object(i.useState)({}),d=Object(c.a)(p,2),f=d[0],g=d[1],h={user:n,password:s};return a.a.createElement(a.a.Fragment,null,"Ejemplo del hook useState().",a.a.createElement(m,null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t,n=function(e){var t={};return e.user||(t.user="Ingrese usuario."),e.password?e.password.length<8&&(t.password="Contrase\xf1a muy corta."):t.password="Ingrese contrase\xf1a.",t}(h);(t=n,0===Object.keys(t).length)?alert("Sent to api"):g(n)}},a.a.createElement(E,{label:"Usuario",handleChange:function(e){return o(e.target.value)},value:n,error:f.user}),a.a.createElement(E,{type:"password",label:"Contrase\xf1a",value:s,handleChange:function(e){return u(e.target.value)},error:f.password}),a.a.createElement(k,null,"Ingresar"))),a.a.createElement("pre",null,F(h)))},M=n(14),P=n.n(M),J=n(24),D=[{id:"421871bb-05d3-4fbe-b00c-3f372fa35584",type:"Full Time",url:"https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584",created_at:"Tue Aug 04 17:23:12 UTC 2020",company:"Sticker Mule",company_url:"https://www.stickermule.com/careers",location:"Anywhere",title:"Javascript Engineer",description:"<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internet's fastest-growing printing company. We are privately-owned, profitable, and powered by an outstanding, globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software engineering team operates from 17 different countries, and we're always looking for more exceptional engineers to join us.</p>\n<p>The Software team is responsible for building and maintaining our front-end and back-end services, developing new features and products, and troubleshooting issues in collaboration with the Support team.</p>\n<p><strong><a href=\"https://www.stickermule.com/about\">See more about our teams here</a></strong></p>\n<p><strong>What we offer</strong></p>\n<ol>\n<li>Remote working with flexible schedule.</li>\n<li>Opportunity to make a large impact as part of a small, highly motivated team.</li>\n<li>Varied, interesting technical challenges to work on.</li>\n</ol>\n<p><strong>Requirements</strong></p>\n<ol>\n<li>Docker</li>\n<li>NextJS</li>\n<li>React</li>\n<li>NodeJS</li>\n<li>GraphQL</li>\n<li>Postgres</li>\n<li>Redis</li>\n<li>Familiarity with Ruby</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>The process</strong></p>\n<ol>\n<li>Selected candidates are invited for an introductory interview</li>\n<li>A technical interview discussing your background and work samples provided</li>\n<li>A final meeting with our VP of HR.</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$90,000-$115,000+</li>\n<li>Signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n",how_to_apply:'<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29">https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29</a></p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmlIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--16cf20c989aa63b40869fa6efa450a4e1a79538d/01-sticker-mule-logo-dark-stacked.png"},{id:"12002611-44b5-42f0-b75c-1cc3c2b6eee7",type:"Full Time",url:"https://jobs.github.com/positions/12002611-44b5-42f0-b75c-1cc3c2b6eee7",created_at:"Tue Aug 04 17:05:59 UTC 2020",company:"Thought Industries",company_url:"https://www.thoughtindustries.com/",location:"Remote (USA)",title:"JavaScript Application Engineer (Remote)",description:"<p>We're looking for a JavaScript Application Engineer to help us build out our SaaS Learning Business Platform. Your day to day would be split between improving existing functionality, building &amp; shipping new functionality &amp; integrations, and improving the platform as a whole, such as introducing bundle splitting, working on performance, and upgrading our dependencies.</p>\n<p>You would be a good fit if:</p>\n<ul>\n<li>You are excited about new JavaScript technologies like Prettier and GraphQL, but also comfortable mixing them with older technology.</li>\n<li>You sweat the small stuff, but know when to ship it.</li>\n<li>You are passionate about listening to users &amp; building elegant web products.</li>\n<li>You are comfortable navigating a large existing codebase and learning new technologies and techniques along the way.</li>\n<li>You have 2+ years of experience working in a team production environment shipping code.</li>\n</ul>\n<p>We are looking to add multiple team members across frontend and backend roles, so we are open to your experience across the stack.</p>\n<p>Our stack consists primarily of Node.js with Koa, GraphQL, and Ember.js. Although we are an Ember shop, we are open to any framework experience you might have as the concepts will likely be familiar.</p>\n<p>Throughout the day, we rely on Slack and GitHub pull requests. The development team is completely distributed across the US, and has been since the inception of Thought Industries \u2014 we haven't bolted on remote processes due to COVID-19, we've always done it this way, so you'll feel right at home.</p>\n<p><strong>About Thought Industries</strong></p>\n<p>Thought Industries is a startup in the Online Learning space. We enable training and software companies to launch and monetize external learning programs \u2014 think Shopify meets Udemy/Coursera.</p>\n<p>This is a full-time position that is based at your remote U.S. based office. No Recruiters, please.</p>\n<p>Headquartered in Boston, Massachusetts, Thought Industries is one of the world\u2019s fastest-growing online learning companies in the U.S. We are helping consumer brands and for-profit learning organizations change how they build, deploy and grow online learning businesses. Today, hundreds of customers and brands are using the Thought Industries\u2019 Learning Business Platform to transform the way they reach, teach, and engage audiences.</p>\n<p>We are a growing, well-funded technology company, with a talented team and a clear vision. This is a unique opportunity to take a lead role at an exciting SaaS software company with a robust cloud-based platform. We hire talented people who are self-motivated and team orientated. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability or veteran status.</p>\n",how_to_apply:'<p>Please submit a cover letter explaining what kind of role you are looking for and why Thought Industries specifically interests you along with your resume to <a href="mailto:devjob@thoughtindustries.com">devjob@thoughtindustries.com</a>.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbk9IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf8ef4a52a69fc2375b11d224b655c662fecd537/logo.png"},{id:"df4c0214-e31f-4bed-9d8c-3222c35ac914",type:"Full Time",url:"https://jobs.github.com/positions/df4c0214-e31f-4bed-9d8c-3222c35ac914",created_at:"Tue Aug 04 00:28:28 UTC 2020",company:"Car Registration, inc. ",company_url:"http://www.carregistration.com",location:"Elk Grove, CA",title:"Software Engineer",description:'<p>Car Registration, Inc.</p>\n<p>Car Registration, Inc. (CRI) provides comprehensive, on-line vehicle registration and titling services for consumers who desire or need a DMV alternative.  Currently licensed and bonded under the California DMV\u2019s Business Partner Automation program, CRI successfully processes over 250,000 transactions per year while reducing wait times and allowing the CA DMV to reallocate its resources to other services and administrative tasks.  With CRI, customers can get same-day processing, next day delivery and comprehensive telephone and email support.  Through its website, CRI collects fees from vehicle owners, transmits fees to the DMV in real time and issues registration cards and stickers to the customer via USPS or express courier.</p>\n<p>Job Description\nCRI, is a leader in providing consumers direct access to DMV services through our online technology. We provide customers the ability to skip the line at the DMV by using our online platform to renew, replace, or transfer their vehicle registration and title. You will join a small but profitable start-up with the ability to shape and grow our software. We are looking for a self-motivated developer that is comfortable working on a cloud-based full stack built with Go, PHP, and JavaScript for both customer-facing and internal applications. In your role, you will join a small team of software developers to build new software, new features, and maintain existing functionality.</p>\n<p>This is a full-time remote position with competitive salary and benefits including medical, dental, vision, 401K plan and more. We are based in Elk Grove, CA. Though you won\u2019t work in the office, we regularly communicate via Slack and Google Meets. Our annual holiday party is fun and inclusive and offers a great opportunity to catch-up with the team in person.</p>\n<p>Skills &amp; Requirements\n1+ year professional coding with Golang\n3+ years professional coding with PHP, Python, Ruby, or another server-side scripting language\n2+ years professional coding with JavaScript\n3+ years professional experience using a SQL database such as PostgreSQL, MySQL, Oracle, or MSSQL\nExperience integrating RESTful and/or gRPC APIs\nAbility to design and implement solutions to both frontend and backend problems from a non-technical specification into a finished feature\nExposure to DevOps practices including infrastructure as code, continuous integration, monitoring, and logging\nComfortable developing in a Mac or Linux environment\nFamiliarity with event-based functional architectures\nFamiliarity with MVC or MVVM architectures\nSecurity-conscious practices in any software built</p>\n<p>Desirable Qualifications\nExperience with cloud-based distributed systems on providers such as AWS\nExperience with docker or container technologies\nExperience with CDNs\nExperience developing web-based business applications with complex workflows\nDatabase administration experience including setting up and maintaining replication servers\nBachelor\u2019s degree, preferably in Computer Science or related discipline</p>\n<p>If you are interested, please send your resume to <a href="mailto:Jobs@carregistration.com">Jobs@carregistration.com</a>.</p>\n<p>CANDIDATES only please.</p>\n<p>Equal Opportunity Employer\nCRI is an equal opportunity employer to all, regardless of age, ancestry, color, disability (mental and physical), exercising the right to family care and medical leave, gender, gender expression, gender identity, genetic information, marital status, medical condition, military or veteran status, national origin, political affiliation, race, religious creed, sex (includes pregnancy, childbirth, breastfeeding and related medical conditions), and sexual orientation.</p>\n<p>It is an objective of CRI to achieve a drug-free workplace. Any applicant for  employment will be expected to behave in accordance with this objective.</p>\n',how_to_apply:'<p>If you are interested, please send your resume to <a href="mailto:Jobs@carregistration.com">Jobs@carregistration.com</a>.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbG1IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--72882d4c37d2fd5cf977485d033eeaafee596f34/CarRegistration_Logo-02.png"},{id:"534af056-a770-421a-afd0-4734c464fb5e",type:"Full Time",url:"https://jobs.github.com/positions/534af056-a770-421a-afd0-4734c464fb5e",created_at:"Mon Aug 03 20:26:45 UTC 2020",company:"Agiloft",company_url:"http://agiloft.com",location:"Russia",title:"Sr. Front End Developer (Remote)",description:'<p><strong>THRIVE WITH AGILOFT</strong></p>\n<p>Are you an experienced Sr. Front End Developer who is successful, motivated, smart, energetic, and looking for a rewarding position in a growing, profitable and dynamic company?</p>\n<p>Agiloft is expanding our developer team, looking for Sr. Front End Developers that thrive working with enterprises in multiple industries, with unique business challenges requiring sophisticated solution design.</p>\n<p><strong>WHY JOIN AGILOFT?</strong></p>\n<ul>\n<li>\n<p>Agiloft was named the market leader in every category in the <a href="https://www.agiloft.com/flash/Gartner_critical_capabilities_for_CLM.pdf">Gartner Critical Capabilities for CLM report</a>, and a market leader in the Gartner Magic Quadrant.</p>\n</li>\n<li>\n<p>Contract Lifecycle Management (CLM) is one of the fastest growing areas of enterprise sales, with a TAM projected to climb from $2B to $7B in the next 5 years.</p>\n</li>\n<li>\n<p>The Agiloft Contract and Commerce Lifecycle Platform has won over <a href="https://www.agiloft.com/awards.htm">a dozen awards, including the Editor\'s Choice award from PC Mag</a>, for the past five years in a row.</p>\n</li>\n</ul>\n<ul>\n<li>\n<p>Agiloft has a highly differentiated value proposition which is uniquely appealing to enterprises: pre-built applications with a deeply configurable, no-code platform for integrated Business Process Management throughout an organization.</p>\n</li>\n<li>\n<p>Agiloft is pioneering the applied use of Artificial Intelligence to enable next-generation business commerce at organizations ranging from small enterprises to U.S. government agencies and Fortune 100 companies.</p>\n</li>\n<li>\n<p>Agiloft is the only company in the industry with the confidence to provide an unconditional satisfaction guarantee, and you too will be successful with Agiloft.</p>\n</li>\n</ul>\n<p>As the leader in the CCLM market, Agiloft is winning many Enterprise deals and looking to hire the best talent to meet this demand with a competitive compensation plan that rewards overachievement.</p>\n<p><strong>POSITION OVERVIEW</strong></p>\n<p>The Senior Front-End Developer will join the development team responsible for implementation, improvement and maintenance of the Agiloft frontend architecture. The ideal candidate will have demonstrated experience with the development and maintenance of Enterprise-grade applications as well as the application of modern frontend frameworks.</p>\n<p>This is a remote-only position. You must be comfortable with setting your own schedule and proactively collaborating in a globally dispersed team using a variety of communication channels.</p>\n<p><strong>JOB RESPONSIBILITIES</strong></p>\n<ul>\n<li>Design, build, and maintain efficient, reusable, and reliable front-end code.</li>\n<li>Build cross-browser solutions optimized for a wide range of devices.</li>\n<li>Identify UI problems and bugs and devise elegant solutions.</li>\n<li>Make strategic technical decisions related to new products and functionalities.</li>\n<li>Help maintain code quality.</li>\n<li>Onboard and mentor new team members.</li>\n</ul>\n<p><strong>REQUIRED QUALIFICATIONS</strong></p>\n<ul>\n<li>\n<p>A minimum of three years of experience in working on large projects/Enterprise applications including, but not limited to version control tools, automated software testing, automating software build tools</p>\n</li>\n<li>\n<p>Strong knowledge of HTML5, CSS3, JavaScript and modern frontend development frameworks</p>\n</li>\n<li>\n<p>Knowledgeable about UI development concepts like Responsive Design, SPA, Modular Design</p>\n</li>\n<li>\n<p>Working knowledge of Java</p>\n</li>\n</ul>\n<p>Experience with:</p>\n<ul>\n<li>Struts 2, JSP</li>\n<li>Popular JS frameworks like Vue, React, Angular</li>\n<li>Relational databases such as MySQL, MSSQL, Oracle</li>\n<li>Rest API implementation</li>\n</ul>\n<p><strong>BENEFITS AND PERKS</strong></p>\n<ul>\n<li>Competitive salary ($30 USD hourly)</li>\n<li>Referral bonuses</li>\n<li>Flexible work schedules</li>\n<li>Professional development and career growth opportunities</li>\n<li>Awesome team members</li>\n</ul>\n<p><strong>INTERESTED? APPLY NOW!</strong></p>\n<p>For a full list of open positions and to submit your application, go to our website <a href="http://www.agiloft.com/jobs.htm">http://www.agiloft.com/jobs.htm</a></p>\n',how_to_apply:'<p>For immediate consideration, go to <a href="https://www.agiloft.com/jobs.htm">https://www.agiloft.com/jobs.htm</a>, click the Apply button, fill out the online form and attach your resume.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa3FIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--405c1ff0ada5560604737daa783da21f32fd1349/Agiloft%20Logo%20plain%20(Indeed).png"},{id:"467c9673-9f0f-4ecf-af99-1a91a790f8b2",type:"Full Time",url:"https://jobs.github.com/positions/467c9673-9f0f-4ecf-af99-1a91a790f8b2",created_at:"Fri Jul 31 21:36:32 UTC 2020",company:"Agiloft ",company_url:"http://www.agiloft.com",location:"India",title:" Sr. Front End Developer (Remote)",description:'<p><strong>THRIVE WITH AGILOFT</strong></p>\n<p>Are you an experienced Sr. Front End Developer who is successful, motivated, smart, energetic, and looking for a rewarding position in a growing, profitable and dynamic company?</p>\n<p>Agiloft is expanding our developer team, looking for Sr. Front End Developers that thrive working with enterprises in multiple industries, with unique business challenges requiring sophisticated solution design.</p>\n<p><strong>WHY JOIN AGILOFT?</strong></p>\n<ul>\n<li>\n<p>Agiloft was named the market leader in every category in the <a href="https://www.agiloft.com/flash/Gartner_critical_capabilities_for_CLM.pdf">Gartner Critical Capabilities for CLM report</a>, and a market leader in the Gartner Magic Quadrant.</p>\n</li>\n<li>\n<p>Contract Lifecycle Management (CLM) is one of the fastest growing areas of enterprise sales, with a TAM projected to climb from $2B to $7B in the next 5 years.</p>\n</li>\n<li>\n<p>The Agiloft Contract and Commerce Lifecycle Platform has won over <a href="https://www.agiloft.com/awards.htm">a dozen awards, including the Editor\'s Choice award from PC Mag</a>, for the past five years in a row.</p>\n</li>\n</ul>\n<ul>\n<li>\n<p>Agiloft has a highly differentiated value proposition which is uniquely appealing to enterprises: pre-built applications with a deeply configurable, no-code platform for integrated Business Process Management throughout an organization.</p>\n</li>\n<li>\n<p>Agiloft is pioneering the applied use of Artificial Intelligence to enable next-generation business commerce at organizations ranging from small enterprises to U.S. government agencies and Fortune 100 companies.</p>\n</li>\n<li>\n<p>Agiloft is the only company in the industry with the confidence to provide an unconditional satisfaction guarantee, and you too will be successful with Agiloft.</p>\n</li>\n</ul>\n<p>As the leader in the CCLM market, Agiloft is winning many Enterprise deals and looking to hire the best talent to meet this demand with a competitive compensation plan that rewards overachievement.</p>\n<p><strong>POSITION OVERVIEW</strong></p>\n<p>The Senior Front-End Developer will join the development team responsible for implementation, improvement and maintenance of the Agiloft frontend architecture. The ideal candidate will have demonstrated experience with the development and maintenance of Enterprise-grade applications as well as the application of modern frontend frameworks.</p>\n<p>This is a remote-only position. You must be comfortable with setting your own schedule and proactively collaborating in a globally dispersed team using a variety of communication channels.</p>\n<p><strong>JOB RESPONSIBILITIES</strong></p>\n<ul>\n<li>Design, build, and maintain efficient, reusable, and reliable front-end code.</li>\n<li>Build cross-browser solutions optimized for a wide range of devices.</li>\n<li>Identify UI problems and bugs and devise elegant solutions.</li>\n<li>Make strategic technical decisions related to new products and functionalities.</li>\n<li>Help maintain code quality.</li>\n<li>Onboard and mentor new team members.</li>\n</ul>\n<p><strong>REQUIRED QUALIFICATIONS</strong></p>\n<ul>\n<li>\n<p>A minimum of three years of experience in working on large projects/Enterprise applications including, but not limited to version control tools, automated software testing, automating software build tools</p>\n</li>\n<li>\n<p>Strong knowledge of HTML5, CSS3, JavaScript and modern frontend development frameworks</p>\n</li>\n<li>\n<p>Knowledgeable about UI development concepts like Responsive Design, SPA, Modular Design</p>\n</li>\n<li>\n<p>Working knowledge of Java</p>\n</li>\n</ul>\n<p>Experience with:</p>\n<ul>\n<li>Struts 2, JSP</li>\n<li>Popular JS frameworks like Vue, React, Angular</li>\n<li>Relational databases such as MySQL, MSSQL, Oracle</li>\n<li>Rest API implementation</li>\n</ul>\n<p><strong>BENEFITS AND PERKS</strong></p>\n<ul>\n<li>Competitive salary ($30 USD hourly)</li>\n<li>Referral bonuses</li>\n<li>Flexible work schedules</li>\n<li>Professional development and career growth opportunities</li>\n<li>Awesome team members</li>\n</ul>\n<p><strong>INTERESTED? APPLY NOW!</strong></p>\n<p>For a full list of open positions and to submit your application, go to our website <a href="http://www.agiloft.com/jobs.htm">http://www.agiloft.com/jobs.htm</a></p>\n',how_to_apply:'<p>For immediate consideration, go to <a href="https://www.agiloft.com/jobs.htm">https://www.agiloft.com/jobs.htm</a>, click the Apply button, fill out the online form and attach your resume.</p>\n',company_logo:"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaTJIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d382a9619048c4335f6a0c9d5e7a003d4daf4ae4/Agiloft%20Logo%20plain%20(Indeed).png"}],_=function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(i.useState)([]),l=Object(c.a)(r,2),s=l[0],u=l[1],p=Object(i.useState)(),d=Object(c.a)(p,2),m=d[0],f=d[1];Object(i.useEffect)((function(){(function(){var e=Object(J.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react.js&page=1");case 3:if(200!==(t=e.sent).status&&f(t.statusText),e.t0=u,200!==t.status){e.next=12;break}return e.next=9,t.json();case 9:e.t1=e.sent,e.next=13;break;case 12:e.t1=D;case 13:e.t2=e.t1,(0,e.t0)(e.t2),o(!1);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=Object(i.useState)("Select Job"),h=Object(c.a)(g,2),b=h[0],w=h[1];return Object(i.useEffect)((function(){document.title=b}),[b]),Object(i.useEffect)((function(){var e=document.body;return e.addEventListener("mouseout",(function(e){return e.clientY<10&&alert("Hey don't leave please.")})),function(){return e.removeEventListener("mouseout",(function(){return"See you.."}))}}),[]),a.a.createElement("div",null,"Ejemplo del hook useEffect(). ",a.a.createElement("br",null),n?"Loading...":a.a.createElement("div",null,a.a.createElement("small",null,m&&m),s.map((function(e,t){return a.a.createElement(T,{key:t,item:e,handleClick:function(){return w(e.title)}})}))))},B=a.a.createContext({language:"ES",setLanguage:function(){}}),W=B.Provider;function q(){var e=Object(u.a)(["\n  color: ",";\n  margin-left: 5px;\n  cursor: pointer;\n"]);return q=function(){return e},e}var z=p.b.span(q(),(function(e){var t=e.isActive;return void 0!==t&&t?"#61dafb":"#FFF"})),H=function(e){var t=e.text,n=Object(i.useContext)(B),o=t===n.language;return a.a.createElement(z,{onClick:function(){return n.setLanguage(t)},isActive:o},t)};function N(){var e=Object(u.a)(["\n  font-size: 12px;\n  font-weight: 600;\n"]);return N=function(){return e},e}var U=p.b.div(N()),V=function(){return a.a.createElement(U,null,a.a.createElement(H,{text:"ES"})," |",a.a.createElement(H,{text:"EN"})," |",a.a.createElement(H,{text:"FR"}))},G={ES:{welcome:"Bienvenido a mogueloDev",title1:"\xbfCu\xe1ndo usar Context?",description1:"Context est\xe1 dise\xf1ado para compartir datos que pueden considerarse globales para un \xe1rbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.",title2:"Antes de usar Context",description2:"Context se usa principalmente cuando algunos datos tienen que se accesibles por muchos componentes en diferentes niveles de anidamiento. Apl\xedcalo con moderaci\xf3n porque hace que la reutilizaci\xf3n de componentes sea m\xe1s dif\xedcil.",title3:"React.createContext",description3:"Crea un objeto Context. Cuando React renderiza un componente que se suscribe a este objeto Context, este leer\xe1 el valor de contexto actual del Provider m\xe1s cercano en el \xe1rbol.",title4:"Context.Provider",description4:"Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.",title5:"Context.Consumer",description5:" Un componente de React que se suscribe a cambios de contexto. Esto le permite suscribirse a un contexto dentro de un componente de funci\xf3n.",title6:"Class.contextType",description6:"A la propiedad contextType en una clase se le puede asignar un objeto Context creado por React.createContext(). Esto te permite consumir el valor actual m\xe1s cercano de ese Context utilizando this.context. Puedes hacer referencia a esto en cualquiera de los m\xe9todos del ciclo de vida, incluida la funci\xf3n de renderizado."},EN:{welcome:"Welcome to mogueloDev",title1:"When to use Context?",description1:"Context is designed to share data that can be considered global for a component tree in React, such as the current authenticated user, the theme or the preferred language.",title2:"Before using Context",description2:"Context is mainly used when some data has to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.",title3:"React.createContext",description3:"Create a Context object. When React renders a component that subscribes to this Context object, it will read the current context value of the closest Provider in the tree.",title4:"Context.Provider",description4:"Each Context object comes with a React Provider component that allows the components that consume it to subscribe to the context changes.",title5:"Context.Consumer",description5:"A component of React that subscribes to context changes. This allows you to subscribe to a context within a function component.",title6:"Class.contextType",description6:"The contextType property in a class can be assigned a Context object created by React.createContext(). This allows you to consume the closest current value of that Context using this.context. You can reference this in any of the lifecycle methods, including the rendering function."},FR:{welcome:"Bienvenue \xe0 mogueloDev",title1:"Quand utiliser Contexte ?",description1:"Le contexte est con\xe7u pour partager des donn\xe9es qui peuvent \xeatre consid\xe9r\xe9es comme globales pour un arbre de composants dans React, comme l'utilisateur authentifi\xe9 actuel, le th\xe8me ou la langue pr\xe9f\xe9r\xe9e.",title2:"Avant d'utiliser le contexte",description2:"Le contexte est principalement utilis\xe9 lorsque certaines donn\xe9es doivent \xeatre accessibles par de nombreuses composantes \xe0 diff\xe9rents niveaux d'embo\xeetement. Appliquez-le avec parcimonie car il rend la r\xe9utilisation des composants plus difficile.",title3:"React.createContext",description3:"Cr\xe9er un objet Contexte. Lorsque React rend un composant qui souscrit \xe0 cet objet Contexte, il lira la valeur de contexte actuelle du fournisseur le plus proche dans l'arbre.",title4:"Context.Provider",description4:"Chaque objet de contexte est livr\xe9 avec un composant React Provider qui permet aux composants qui le consomment de s'abonner aux changements de contexte.",title5:"Context.Consumer",description5:"Une composante de React qui souscrit aux changements de contexte. Cela vous permet de vous abonner \xe0 un contexte au sein d'un composant de fonction.",title6:"Class.contextType",description6:"La propri\xe9t\xe9 contextType d'une classe peut se voir attribuer un objet Context cr\xe9\xe9 par React.createContext(). Cela vous permet de consommer la valeur actuelle la plus proche de ce contexte en utilisant ce .context. Vous pouvez y faire r\xe9f\xe9rence dans toutes les m\xe9thodes du cycle de vie, y compris la fonction de rendu."}};function Q(){var e=Object(u.a)(["\n    font-size: 25px;\n"]);return Q=function(){return e},e}var Y=p.b.span(Q()),X=function(){var e=Object(i.useContext)(B);return a.a.createElement(Y,null,G[e.language].welcome)};function Z(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 20px;\n"]);return Z=function(){return e},e}var $=p.b.div(Z()),K=function(){return a.a.createElement($,null,a.a.createElement(X,null),a.a.createElement(V,null))};function ee(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #20232a;\n  width: 100%;\n  height: 50px;\n  position: fixed;\n  color: #fff;\n  top: 0;\n"]);return ee=function(){return e},e}var te=p.b.div(ee()),ne=function(){return a.a.createElement(te,null,a.a.createElement(K,null))};function ie(){var e=Object(u.a)(["\n  line-height: 1.5;\n"]);return ie=function(){return e},e}function ae(){var e=Object(u.a)(["\n  width: 400px;\n  padding: 5px 15px 15px;\n  margin: 15px;\n"]);return ae=function(){return e},e}var oe=Object(p.b)(m)(ae()),re=p.b.div(ie()),le=function(e){var t=e.text,n=e.description;return a.a.createElement(oe,null,a.a.createElement("h1",null,t),a.a.createElement(re,null,n))};function se(){var e=Object(u.a)(["\n  flex-direction: row;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 60px 20px;\n"]);return se=function(){return e},e}var ce=p.b.div(se()),ue=function(){var e=Object(i.useContext)(B).language;return a.a.createElement(ce,null,a.a.createElement(le,{text:G[e].title1,description:G[e].description1}),a.a.createElement(le,{text:G[e].title2,description:G[e].description2}),a.a.createElement(le,{text:G[e].title3,description:G[e].description3}),a.a.createElement(le,{text:G[e].title4,description:G[e].description4}),a.a.createElement(le,{text:G[e].title5,description:G[e].description5}),a.a.createElement(le,{text:G[e].title6,description:G[e].description6}))};function pe(){var e=Object(u.a)(["\n    body { \n        display: block;\n        padding: 0px;\n        width: 100%;\n        margin: 0;\n    }\n"]);return pe=function(){return e},e}var de=Object(p.a)(pe()),me=function(){var e=Object(i.useState)("ES"),t=Object(c.a)(e,2),n={language:t[0],setLanguage:t[1]};return a.a.createElement(a.a.Fragment,null,a.a.createElement(de,null),a.a.createElement(W,{value:n},a.a.createElement(ne,null),a.a.createElement(ue,null)))};function fe(){var e=Object(u.a)(["\n  padding: 16px;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.1s linear;\n\n  ","\n"]);return fe=function(){return e},e}var ge=p.b.div(fe(),(function(e){var t=e.isActive;return!(void 0!==t&&t)&&"text-decoration: line-through; color: #c8cacc;"})),he=function(e){var t=e.text,n=e.isActive,i=e.handleClickItem;return a.a.createElement(ge,{onClick:i,isActive:n},t)};function be(){var e=Object(u.a)(["\n  background: none;\n  border: none;\n  font-size: 12px;\n  margin: 5px;\n  border: ",";\n  border-radius: 2px;\n  padding: 3px 5px;\n  cursor: pointer;\n  text-align: center;\n"]);return be=function(){return e},e}function we(){var e=Object(u.a)(["\n  padding: 8px 16px;\n  font-size: 12px;\n  color: #777;\n"]);return we=function(){return e},e}function ve(){var e=Object(u.a)([""]);return ve=function(){return e},e}function ye(){var e=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return ye=function(){return e},e}var xe=p.b.div(ye()),Ee=Object(p.b)(xe)(ve()),Ce=Object(p.b)(xe)(we()),ke=p.b.div(be(),(function(e){var t=e.isActive;return void 0!==t&&t?"1px solid #777":"none"})),je=function(e){var t=e.totalItems,n=e.active,i=e.handleClickFilter,o=e.handleClickClear,r=e.handleClickReset;return a.a.createElement(Ce,null,a.a.createElement("div",null,t," items left"),a.a.createElement(Ee,null,a.a.createElement(ke,{isActive:"all"===n,onClick:function(){return i("all")}},"All"),a.a.createElement(ke,{isActive:"active"===n,onClick:function(){return i("active")}},"Active"),a.a.createElement(ke,{isActive:"complete"===n,onClick:function(){return i("complete")}},"Complete")),a.a.createElement(Ee,null,a.a.createElement(ke,{onClick:o},"Clear"),a.a.createElement(ke,{onClick:r},"Reset")))};function Ie(){var e=Object(u.a)(["\n  padding: 0px;\n  border-radius: 5px;\n"]);return Ie=function(){return e},e}var Se=Object(p.b)(m)(Ie());function Oe(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 20px;\n  padding: 16px;\n  border: none;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  outline: none;\n  font-family: roboto;\n  font-weight: 100;\n\n  ::placeholder\xa0 {\n    font-weight: 300;\n    font-style: italic;\n    color: #c8cacc;\n  }\n"]);return Oe=function(){return e},e}var Ae=p.b.input(Oe());function Re(){var e=Object(u.a)(["\n  font-size: 80px;\n  font-weight: 300;\n  color: #af2f2f26;\n  margin-bottom: 10px;\n  width: 100%;\n  text-align: center;\n"]);return Re=function(){return e},e}var Te=p.b.div(Re()),Fe=n(26),Le=n(7),Me={text:"",activeFilter:"all",items:[{id:1,text:"Learn hook useState",active:!0},{id:2,text:"Learn hook useEffect",active:!0},{id:3,text:"Learn hook useContext",active:!0},{id:4,text:"Learn hook useReducer",active:!0}]},Pe=function(){return Me},Je=function(e,t){switch(t.type){case"useReducer/handleChangeInput":return Object(Le.a)({},e,{text:t.payload});case"useReducer/addItem":return Object(Le.a)({},e,{items:[{id:(new Date).valueOf(),text:e.text,active:!0}].concat(Object(Fe.a)(e.items)),text:t.payload});case"useReducer/resetInput":return Object(Le.a)({},e,{text:""});case"useReducer/toggleItem":return Object(Le.a)({},e,{items:e.items.map((function(e){return e.id!==t.payload?e:Object(Le.a)({},e,{active:!e.active})}))});case"useReducer/activeFilter":return Object(Le.a)({},e,{activeFilter:t.payload});case"useReducer/clearCompleted":return Object(Le.a)({},e,{items:e.items.filter((function(e){return e.active}))});case"useReducer/resetState":return Pe();default:return e}},De=function(){var e=Object(i.useReducer)(Je,Me,Pe),t=Object(c.a)(e,2),n=t[0],o=t[1],r=n.text,l=n.activeFilter,s=n.items;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Te,null,"todos"),a.a.createElement(Se,{width:400},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o({type:"useReducer/addItem"}),o({type:"useReducer/resetInput"})}},a.a.createElement(Ae,{placeholder:"What are you thinking to do?",onChange:function(e){return o({type:"useReducer/handleChangeInput",payload:e.target.value})},value:r})),function(){var e=s.filter((function(e){return"all"===n.activeFilter||("active"===n.activeFilter?e.active:!e.active)}));return r?e.filter((function(e){return e.text.indexOf(r)>-1})):e}().map((function(e){return a.a.createElement(he,{text:e.text,isActive:e.active,handleClickItem:function(){return o({type:"useReducer/toggleItem",payload:e.id})}})})),a.a.createElement(je,{totalItems:s.filter((function(e){return e.active})).length,handleClickFilter:function(e){return o(function(e){return{type:"useReducer/activeFilter",payload:e}}(e))},active:l,handleClickClear:function(){return o({type:"useReducer/clearCompleted"})},handleClickReset:function(){return o({type:"useReducer/resetState"})}})),a.a.createElement("pre",null,F(n)))};var _e=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(l.a,{basename:"".concat("/yt-react-hooks")},a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/"},a.a.createElement(L,null)),a.a.createElement(s.a,{path:"/useState"},a.a.createElement(L,null)),a.a.createElement(s.a,{path:"/useEffect"},a.a.createElement(_,null)),a.a.createElement(s.a,{path:"/useContext"},a.a.createElement(me,null)),a.a.createElement(s.a,{path:"/useReducer"},a.a.createElement(De,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.1e0aad97.chunk.js.map