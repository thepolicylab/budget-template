(function(e){function t(t){for(var o,r,s=t[0],l=t[1],c=t[2],p=0,h=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,s=1;s<i.length;s++){var l=i[s];0!==a[l]&&(o=!1)}o&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var o={},a={app:0},n=[];function r(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=o,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(i,o,function(t){return e[t]}.bind(null,o));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"13b3":function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_11.bb0c55de.png"},"2c14":function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_07.63d3e10c.png"},"42a0":function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_03.f6d6e75c.png"},"4b53":function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_09.665971f1.png"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("BudgetExplainer")],1)},n=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"grid-container"},[i("div",{staticClass:"grid-row paginator padding-x-5 text-middle text-center text-bold"},e._l(e.pages,(function(t){return i("a",{key:t,staticClass:"grid-col page-link margin-1",class:{"border-05":t===e.activePage},attrs:{tabindex:"0"},on:{click:function(i){return e.setPage(t)},keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.setPage(t)}}},[i("p",[e._v(" "+e._s(t)+" ")])])})),0),i("Explainer",{attrs:{imageSrc:e.getImgUrl(e.activePage),areas:e.activeAreas}})],1)},s=[],l=(i("4de4"),i("d81d"),i("cb1e")),c=i("b092"),u=i("2ef0"),p={name:"BudgetExplainer",components:{Explainer:l["Explainer"]},data:function(){return{areas:c["a"],activePage:1}},methods:{setPage:function(e){this.activePage=e},getImgUrl:function(e){var t;return t=e<10?"0".concat(e):"".concat(e),i("fe09")("./Decision_Package_Template_20200717_Page_"+t+".png")}},computed:{pages:function(){return u["uniqBy"](this.areas,"page").map((function(e){return e.page}))},activeAreas:function(){var e=this;return this.areas.filter((function(t){return e.activePage===t.page}))}}},h=p,d=(i("8b70"),i("2877")),g=Object(d["a"])(h,r,s,!1,null,"e2ebfc32",null),f=g.exports,m={name:"App",components:{BudgetExplainer:f}},v=m,y=Object(d["a"])(v,a,n,!1,null,null,null),b=y.exports;i("4e75"),i("24b5");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(b)}}).$mount("#app")},6640:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_04.8f504bad.png"},"784d":function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_10.26478cf5.png"},"8b70":function(e,t,i){"use strict";var o=i("eb52"),a=i.n(o);a.a},a7f0:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_06.95de0266.png"},af56:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_05.d6518581.png"},afb6:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_12.29e15069.png"},b092:function(e){e.exports=JSON.parse('{"a":[{"id":"proposal-background","page":1,"title":"Proposal Background","description":"This selection will help dictate how the PDF template responds to your particular proposal. This PDF uses conditional/guided logic, and if certain questions or options are grayed out, it means they are not required for your submission.","top":"40%","bottom":"55%","left":"9%","right":"63%"},{"id":"overview","page":1,"title":"Overview","description":"Provide a concise “elevator pitch” about your initiative. Think about what you’d say to the Governor if you had 30 seconds to describe the initiative to her - how much money are you requesting (by fund source) and what are the top three most important things to know about the initiative and the problem to which it is responsive?","top":"56%","right":"7%","left":"9%","bottom":"37%"},{"id":"opportunity-statement","page":2,"title":"Opportunity Statement","description":"Describe the opportunity that your request presents to capitalize on (the problem that your agency is facing). Make sure your narrative is as detailed as possible and quantifies key variables.","top":"8%","right":"8%","left":"10%","bottom":"88%"},{"id":"proposed-intervention","page":2,"title":"Proposed Intervention","description":"If you had five minutes to present this proposal to the Governor, what would you say about it? This section is your chance to provide a detailed description of the initiative you’re proposing and make your case for its inclusion in the budget. You should include as much detail as possible, including quantitative data where relevant, and to craft a narrative that preemptively responds to all follow-up questions that you envision you might receive from the Governor’s Office or legislative staff.","top":"47%","right":"8%","left":"10%","bottom":"49%"},{"id":"fte-staffing-requirements","page":3,"title":"FTE / Staffing Requirements","description":"This section should mirror the FTE data that you input into BFM using the standard personnel wizard. Make sure you include all relevant position titles and salary & benefits costs here while filling out the Decision Package narrative.","top":"9%","right":"8%","left":"10%","bottom":"87%"},{"id":"evidence-scale-ranking","page":3,"title":"Evidence Scale Ranking","description":"The newly-developed RI Evidence Scale is the tool that will help you to respond to this section, which asks you to select the evidence tier into which your request falls. Please note—we want to know about the evidence supporting your specific request, not the larger program into which it falls or your agency generally. OMB is aware that most budget initiatives will likely not have robust evidentiary support at the point of submission—and that’s fine! The goal of this section is to get a sense of the baseline level support for your proposal, whether that’s made up of a strong theory of change developed by your agency director or multiple randomized controlled trials conducted in a variety of jurisdictions; you’ll have the chance to explain how you plan to move up the evidence scale in the future in the next section. <br><br> A summary of the scale is available in appendix five of the budget instructions: <a href=\'http://omb.ri.gov/documents/instructions/0_FY%202022%20Budget%20Instructions.pdf\'> Budget Instructions </a><br> The following two links are external resources for more information on measuring the evidence you have available: <a href=\'https://education.ky.gov/school/evidence/Documents/Elevating%20Evidence%20Glossary%20of%20Terms.pdf\'>Evidence Terms Glossary</a> and <a href=\'https://www.nationalservice.gov/resources/evaluation/evidence-continuum\'>The Evidence Continuum - Video</a> ","top":"53%","right":"8%","left":"10%","bottom":"43%"},{"id":"description-evidence-base","page":4,"title":"Description of Evidence Base","description":"What evidence exists that led you to select the evidence tier you chose in the above question? To clear up any potential questions that OMB, the Governor\'s Office, or the Legislature might have about the evidence tier you\'ve chosen, please include as many citations, links, or attachments of relevant evidence sources as possible here to justify your selection. You should use evidence clearinghouses and other database sources to find supporting evidence from other jurisdictions. <br><br>  A walk through of how to use an evidence clearinghouse is available here: <a href=\'https://www.youtube.com/watch?v=F0JUKJlVjes&feature=youtu.be\'>Video Explanation </a>  <br><br> You can learn more about clearinghouses from the following sources: <ul> <li>The Pew Charitable Trusts Clearinghouse: <a href=\'https://www.pewtrusts.org/en/research-and-analysis/data-visualizations/2015/results-first-clearinghouse-database\'>Results First Clearinghouse</a></li><li> The Pew Charitable Trusts Evidence Programs: <a href=\'https://www.pewtrusts.org/-/media/assets/2020/04/evidenceresources_resultsfirst_fs.pdf\'>Where to Search for Evidence of Effective Programs</a></li><li> The Pew Charitable Trusts Technical Appendix: <a href=\'https://www.pewtrusts.org/en/research-and-analysis/articles/2018/06/27/key-uses-for-the-results-first-clearinghouse-database\'>Results First Technical Appendix</a></li><li> Kentucky Department of Education: <a href=\'https://education.ky.gov/school/evidence/Documents/What%20Works%20Clearinghouse%20User%20Manual.pdf\'>Education-specific Guidance to Using Clearinghouses </a></li><li> Kentucky Department of Education: <a href=\'https://education.ky.gov/school/evidence/Documents/Elevating%20Evidence%20Resources%20Clearinghouses%20and%20Databases.pdf\'>Clearinghouse and Databases Guide - Education Program Lens</a></li><li> Corporation for National & Community Service: <a href=\'https://www.nationalservice.gov/sites/default/files/documents/Clearinghouses%20and%20Evidence%20Reviews.pdf\'>CNCS List of Clearinghouses</a></li></ul>","top":"8%","right":"8%","left":"10%","bottom":"88%"},{"id":"does-agency-collect-performance-data","page":4,"title":"Performance Data","description":"The new template form is going to use conditional logic to prompt you to answer only those questions that pertain to the type of initiative you’re proposing— leading to less work for you! If you indicated earlier in the form that you’re submitting an expansion or contraction of an existing initiative, you’ll be asked to respond to this question about whether or not you’re currently tracking performance data for this initiative, but if you’re submitting a new initiative, you won’t. Don’t panic if you can’t fill it in on your form—it’s all part of the logic of the new template!","top":"48%","right":"8%","left":"10%","bottom":"48%"},{"id":"methodologies-for-program-evaluation","page":4,"title":"Evaluation Methodologies","description":"For programs in which you’re already collecting performance data, indicate what methodologies you use for evaluation. You might select more than one methodology in this section, especially if you’re actively tracking both outputs and outcomes.<br><br>  The UNICEF video series is also helpful: <a href= <\'https://www.youtube.com/watch?v=Wy7qpJeozec\'>Random Control Trials </a>, <a href= \'https://www.youtube.com/watch?v=hAvvCOrfgBI\'> Building Blocks of Impact Evaluation, </a> and   <a href= \'https://www.youtube.com/watch?v=4lv3DJFBLqI\'> Causal Attribution </a> <br><br> A few other examples: <a href= \'https://www.youtube.com/watch?v=3TwgVQIZPsw\'>How Do Focus Groups Work?</a>  , <a href= \'https://medium.com/proofofimpact/inputs-vs-outputs-vs-outcomes-in-impact-monitoring-and-evaluation-62be6cfd5f7e\'> Inputs vs. Outputs vs. Outcomes in Impact Monitoring,</a> and, </a><a href= \'https://hbr.org/2012/11/its-not-just-semantics-managing-outcomes\'> It\'s not Just Semantics: Measuring Outcomes vs. Outputs</a>  ","top":"56%","right":"8%","left":"10%","bottom":"39%"},{"id":"specific-metrics","page":5,"title":"Specific Metrics","description":"We’d like to see the specific metrics that map to this initiative and what they’ve shown about performance over the past several years. It would be great to see at least three years of data, but if you don’t have that, you should just provide as much information as you have available—and if you have more data that you want to share, feel free to provide that as well. If the link between the initiative and the metrics you’re tracking is not explicit, make sure you explain it here. You can also link to or attach in BFM your annual report or performance report, rather than reproducing performance data in this field, if the metrics are included in those documents; if you’re attaching anything, be sure to note the file name in this narrative.<br><br> The following source provides more information:<a href= \'https://centerforgov.gitbooks.io/setting-performance-targets-getting-started-guide/content/\'> Setting Performance Targets </a> ","top":"8%","right":"8%","left":"10%","bottom":"85%"},{"id":"data-currently-used","page":5,"title":"Current Data Used","description":"In this section, it is likely that you’ll select more than one option—for example, many initiatives track individual-level quantitative data. Make sure you select all types of data that you track for the initiative.<br><br> External video on comparing data types: <a href= \'https://learn.g2.com/qualitative-vs-quantitative-data\'> Qualitative vs. Quantitative Data</a>","top":"42%","right":"8%","left":"10%","bottom":"52%"},{"id":"sources-currently-used","page":5,"title":"Current Data Sources","description":"For some initiatives, you might use publicly-available data, or a third party vendor, to track outcomes, rather than collecting your own initiative-specific data. Or, you might use a combination of both—indicate all of the sources that you analyze here.<br><br> ","top":"64%","right":"8%","left":"10%","bottom":"31%"},{"id":"performance-change","page":6,"title":"Current Performance Data","description":"If your performance data shows change over time, describe how you’ve used the trends you’ve seen to inform your management of the initiative. This section is an opportunity for you to make the case for your agency’s ability to thoughtfully utilize performance data to drive budget and, policy decisions - making your overall commitment to performance management and evidence more clear and explicit.<br><br> A helpful description from John Hopkins University Center for Government Excellence is available here:<a href= \'https://www.youtube.com/watch?v=Qa3gtv7TRxk&feature=youtu.be\'> Talking about Performance (Without Complicating It) </a> ","top":"8%","right":"8%","left":"10%","bottom":"82%"},{"id":"future-evaluation-methods","page":6,"title":"Future Evaluation Methods","description":"You\'ll see the same questions in this section as in the above section, but these questions are future-oriented rather than present-oriented. This section is your opportunity to make a compelling case for your agency’s ability to move this initiative up the evidence scale and make performance-based decisions; your responses here will be particularly important for those initiatives that currently fall on the lower end of the evidence scale.<br><br>  The following resources are helpful resources in developing your evidence base.<br> Kentucky Department of Education: <a href= \'https://www.youtube.com/watch?v=EbOXtuqSIPk&feature=youtu.be\'> Education-Specific Guidance to Evaluating Impact </a><br> Corporation for National & Community Service: <a href= \'https://www.nationalservice.gov/resources/evaluation/all-evaluation-resources\'> General Evaluation Life Cycle</a><br> Corporation for National & Community Service: <a href= \'https://www.nationalservice.gov/sites/default/files/documents/SIF%20Assessing%20Levels%20of%20Evidence%20Quick%20Guide.pdf\'> SIF Evidence Matrix </a><br>  ","top":"54%","right":"8%","left":"10%","bottom":"42%"},{"id":"specific-metrics-future","page":7,"title":"Planned Metrics","description":"We\'d like to see the specific metrics that you plan to map to this initiative and what they may explain about performance over the next several years. Think about how the initiative and the metrics you\'re tracking are explicitly linked to each other and make sure you explain it here. In the future, think of metrics you can link to or attach in BFM, or your annual report or performance report.","top":"8%","right":"8%","left":"10%","bottom":"88%"},{"id":"data-types-future","page":7,"title":"Planned Data Types","description":"In this section, it\'s likely that you\'ll select more than option. For example, many initiatives track individual-level quantitative data. Make sure you select all types of data that you will track for the initiative.","top":"45%","right":"8%","left":"10%","bottom":"50%"},{"id":"data-sources-future","page":7,"title":"Planned Data Types","description":"For some initiatives, you might use publicly-available data, or a third party vendor, to track outcomes, rather than collecting your own initiative-specific data. Or, you might use a combination of both. Indicate all of the sources that you hope to analyze here.","top":"65%","right":"8%","left":"10%","bottom":"29.3%"},{"id":"research-partners","page":8,"title":"Research Partners","description":"While not all initiatives will be ripe for causal evaluation, one of our goals is to continue to make strides in evaluating our government programs, so if you think that a particular initiative is one that could benefit from additional study, you should note that here. If you’d like to evaluate this initiative but aren’t sure where to start as far as research partnerships are concerned, reach out to <a href= \'mailto:christopher_calley@brown.edu\'>  The Policy Lab </a>  to set up a quick consult call to discuss what type of research partnership might be helpful.","top":"8%","right":"8%","left":"10%","bottom":"84%"},{"id":"methods-expert","page":8,"title":"Methods Consultations","description":"If this is an initiative that you don’t think is right for a research partnership, but that you’re interested in evaluating internally, it might be helpful to engage with a methods expert before developing your evaluation plan. If this is something you’re interested in, we’re happy to help connect you.<br><br> To schedule a 1:1 consultation with The Policy Lab to discuss your proposal, please use the following link:<a href= \'https://calendar.google.com/calendar/selfsched?sstoken=UVBTdXNnSjJEa241fGRlZmF1bHR8NjA0OWZmMjg2YmMzM2EzMDQzNDg4MTBiY2M3MmY5YzQ\'> Appointment Scheduler </a><br> ","top":"39%","right":"8%","left":"10%","bottom":"53%"},{"id":"implementation-timeline","page":8,"title":"Timeline for Implementation","description":"In this section, we want to know how long it’s going to take you to fully implement your initiative, and it’s helpful for us to be able to understand the steps within the timeline, for example, if you’re going to be able to hire people by July 15th, 2021, but the program won’t begin to run until October 1st, 2021, you should explain that here.","top":"59%","right":"8%","left":"10%","bottom":"33%"},{"id":"outcomes-timeline","page":9,"title":"Timeline for Outcomes","description":"Think carefully about the outcomes you’re expecting from this initiative, is it a decrease in the recidivism rate, a decrease in the unemployment rate, an increase in minority representation in your agency, a return on your investment, or more than one of the above? Explain the outcomes that you’ll be tracking for the initiative (hint: they should link to the metrics you laid out in the performance management section above) and provide your estimate for when you expect to begin to see meaningful change. If you expect to see long-term savings from the initiative, quantify the savings and indicate when you expect to see those returns.<br><br> Rhode Island OMB official guidance can be found here:<a href=\'http://omb.ri.gov/documents/reform/regulatory-review/ORR-Review-Analyzing-Regulatory-Benefits-and-Costs.pdf\'> ORR Cost Benefit Guidance</a> <br><br> A high-level walkthrough of calculating return on investment using a cost-benefit analysis is viewable here:<a href=\'https://www.youtube.com/watch?v=CapTUmQoZpQ&feature=youtu.be\'> High-level Return on Investment </a><br><br> A few other helpful links are: <a href=\'https://www.calhr.ca.gov/Documents/measuring-roi-in-the-public-sector-course-materials.pdf\'>Measuring Return on Investment in the Public Sector </a>, <a href=\'https://www.vueworks.com/calculating-non-traditional-return-on-investments/\'> Calculating Non-traditional Return on Investments</a>, <a href=\'https://scholarworks.gvsu.edu/cgi/viewcontent.cgi?article=1104&context=tfr\'>and Return on Investment for Social Service Programs </a>","top":"8%","right":"8%","left":"10%","bottom":"86%"},{"id":"strategic-priorities","page":9,"title":"Strategic Priorities","description":"In this section, you should provide an overview of any overlap that exists between your initiative and the Governor’s Term Two Strategic Priorities, whether that overlap is positive or adverse. Given the Governor’s-level focus of the Strategic Priorities, we expect that the majority of the work that your agency is doing will not fit into this framework. That does not mean that agency-level work is not critical or that requests for expansion of it will not receive the Governor’s support or will be deprioritized; rather, it means that it is incumbent upon your agency to provide a robust explanation for the need for increased investment in work that is agency-priority-aligned rather than Governor-priority-aligned.<br><br>","top":"40%","right":"8%","left":"10%","bottom":"56%"},{"id":"budget-article","page":10,"title":"Budget Article Required","description":"If your initiative will require a statutory change, note that here and identify the statute that will be impacted. You should also attach proposed new article language to your Decision Package for any statute-related initiatives, while article language has typically been generated in late December/early January, we’re rolling out a process change this year to hopefully lessen the drain on staff time in later months of the budget cycle.","top":"41.4%","right":"8%","left":"10%","bottom":"54.5%"},{"id":"impact-other-agencies","page":10,"title":"Impact on Other Agencies","description":"If your initiative will impact another agency, even indirectly, note that here and indicate whether or not you’ve gotten in touch with the impacted agency(ies). This information will help OMB facilitate conversations about complex initiatives that will impact multiple agencies.","top":"77.5%","right":"8%","left":"10%","bottom":"18.5%"},{"id":"impact-revenue","page":11,"title":"Impact on Revenue","description":"Pretty straightforward, in this section, indicate whether or not your initiative will impact revenue and describe the positive/negative impact that you anticipate seeing. If your initiative is a proposal to shift departmental revenue away from the general fund, you should expand on that proposal here—but please note that this type of proposal will not be sufficient for meeting your agency’s target cut this year.","top":"37%","right":"8%","left":"10%","bottom":"59%"},{"id":"impact-federal-funds","page":11,"title":"Impact on Federal Funds","description":"As above, pretty straightforward, you simply indicate whether or not your initiative will impact federal funds.","top":"75%","right":"8%","left":"10%","bottom":"21%"},{"id":"technology-needs","page":12,"title":"Technology Needs","description":"And another easy one is to simply indicate whether your initiative involves any IT needs (hardware, software, or personnel) so that its impact on the DoIT ISF can be calculated.","top":"26.5%","right":"8%","left":"10%","bottom":"69.5%"},{"id":"ranking-unconstrained","page":12,"title":"Unconstrained Ranking","description":"Your final Decision Package report will be structured in priority order. You’ll be asked to provide two separate rankings—one for unconstrained proposals and one for constrained, each in order from most desirable to least desirable.","top":"56%","right":"8%","left":"10%","bottom":"39%"},{"id":"ranking-constrained","page":12,"title":"Constrained Ranking","description":"Your final Decision Package report will be structured in priority order. You’ll be asked to provide two separate rankings, one for unconstrained proposals and one for constrained, each in order from most desirable to least desirable.","top":"69%","right":"8%","left":"10%","bottom":"25%"}]}')},befe:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_02.b7ae92bc.png"},dae8:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_08.757789e2.png"},eb52:function(e,t,i){},f697:function(e,t,i){e.exports=i.p+"img/Decision_Package_Template_20200717_Page_01.c4503a3b.png"},fe09:function(e,t,i){var o={"./Decision_Package_Template_20200717_Page_01.png":"f697","./Decision_Package_Template_20200717_Page_02.png":"befe","./Decision_Package_Template_20200717_Page_03.png":"42a0","./Decision_Package_Template_20200717_Page_04.png":"6640","./Decision_Package_Template_20200717_Page_05.png":"af56","./Decision_Package_Template_20200717_Page_06.png":"a7f0","./Decision_Package_Template_20200717_Page_07.png":"2c14","./Decision_Package_Template_20200717_Page_08.png":"dae8","./Decision_Package_Template_20200717_Page_09.png":"4b53","./Decision_Package_Template_20200717_Page_10.png":"784d","./Decision_Package_Template_20200717_Page_11.png":"13b3","./Decision_Package_Template_20200717_Page_12.png":"afb6"};function a(e){var t=n(e);return i(t)}function n(e){if(!i.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id="fe09"}});
//# sourceMappingURL=app.cc4c4dae.js.map