module.exports = {
  "id": "Learn Backstop Test Run",
  "viewports": [
    {
      "name": "desktop",
      "width": 1440,
      "height": 900
    },
    {
      "name": "tablet",
      "width": 768,
      "height": 1024
    },
    {
      "name": "mobile",
      "width": 375,
      "height": 667
    }
  ],
  "scenarios": [
    {
      "label": "2016 Login",
      "url": "https://jeggertmbp.local:8443/",
      "hideSelectors": [],
      "removeSelectors": [],
      "selectorExpansion": true,
      "selectors": [
      ],
      "readyEvent": null,
      "delay": 1600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"

    },
    {
      "label": "2016 homepage",
      "url": "https://jeggertmbp.local:8443/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1",
      "hideSelectors": [".containerPortal"],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "login.js"   
    },
    {
      "label": "2016 Course List",
      "url": "https://jeggertmbp.local:8443/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Homepage",
      "url": "https://jeggertmbp.local:8443/webapps/blackboard/execute/modulepage/view?course_id=_3_1&cmp_tab_id=_12_1&editMode=true&mode=cpview",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
       
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Conetent Page",
      "url": "https://jeggertmbp.local:8443/webapps/blackboard/content/listContentEditable.jsp?content_id=_17_1&course_id=_3_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Full Grade Center",
      "url": "https://jeggertmbp.local:8443/webapps/gradebook/do/instructor/enterGradeCenter?course_id=_3_1&cvid=fullGC",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
       
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Needs Grading",
      "url": "https://jeggertmbp.local:8443/webapps/gradebook/do/instructor/viewNeedsGrading?course_id=_3_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
     
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Grade Assignment",
      "url" : "https://jeggertmbp.local:8443/webapps/gradebook/do/instructor/viewNeedsGrading?course_id=_3_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
    
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Retention Center",
      "url": "https://jeggertmbp.local:8443/webapps/retention/dashboard?course_id=_3_1&cmp",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Create Assignment",
      "url": "https://jeggertmbp.local:8443/webapps/assignment/execute/manageAssignment?method=showadd&content_id=_20_1&course_id=_3_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Create Test",
      "url": "https://jeggertmbp.local:8443/webapps/assessment/do/content/assessment?action=ADD&course_id=_3_1&content_id=_14_1&assessmentType=Test",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Create Blog",
      "url": "https://jeggertmbp.local:8443/webapps/blogs-journals/execute/editBlog?course_id=_3_1&type=blogs&backUrl=%2Fexecute%2FitemLinkController%3Fcontent_id%3D_14_1%26type%3Dblogs%26course_id%3D_3_1%26itemAction%3Dadd",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Create Forum",
      "url": "https://jeggertmbp.local:8443/webapps/discussionboard/do/forum?action=create&course_id=_3_1&nav=discussion_board_entry&conf_id=_3_1",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Forum List",
      "url": "https://jeggertmbp.local:8443/webapps/discussionboard/do/conference?action=list_forums&course_id=_3_1&conf_id=3&nav=discussion_board_entry",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Create Thread",
      "url": "https://jeggertmbp.local:8443/webapps/discussionboard/do/message?action=create&do=create&requestType=thread&course_id=_3_1&nav=discussion_board_entry&conf_id=_3_1&forum_id=_15_1",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Thread List",
      "url": "https://jeggertmbp.local:8443/webapps/discussionboard/do/forum?action=list_threads&course_id=_3_1&conf_id=_3_1&forum_id=_15_1&nav=discussion_board_entry",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Thread View",
      "url": "https://jeggertmbp.local:8443/webapps/discussionboard/do/message?action=list_messages&course_id=_3_1&nav=discussion_board_entry&conf_id=_3_1&forum_id=_15_1&message_id=_15_1",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - View Blog",
      "url": "https://jeggertmbp.local:8443/webapps/blogs-journals/execute/viewBlog?course_id=_3_1&blog_id=_15_1&type=blogs&group_id=",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "2016 BackStop Test Course - Create Rubric",
      "url": "https://jeggertmbp.local:8443/webapps/rubric/do/course/manageRubrics?dispatch=create&popup=true&course_id=_3_1&panelId=agn&entityId=&entityType=&mode=onsubmit&globalNavigation=false",
      "hideSelectors": [],
      "removeSelectors": [".last-login"],
      "selectorExpansion": true,
      "selectors": [
      
      ],
      "readyEvent": null,
      "delay": 2600,
      "misMatchThreshold" : 0.2,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "LRN-124842-shareportfolio-withcourse-popup",
      "url": "https://administrator:changeme@jeggertmbp.local:8443/webapps/searchwidgets/course/frameset.jsp?type=course",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
        "body"
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.4,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "System Admin",
      "url": "https://administrator:changeme@jeggertmbp.local:8443/webapps/portal/execute/tabs/tabAction?tabType=admin",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
        "body"
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.4,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "Brands and Themes",
      "url": "https://administrator:changeme@jeggertmbp.local:8443/webapps/portal/execute/brandAndThemeCaret",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
        "body"
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.4,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "True False Test",
      "url": "https://jeggertmbp.local:8443/webapps/assessment/take/launch.jsp?course_assessment_id=_7_1&course_id=_3_1&content_id=_22_1&step=null",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
        "body"
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.4,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    },
    {
      "label": "True False Test",
      "url": "https://jeggertmbp.local:8443/webapps/assessment/take/launch.jsp?course_assessment_id=_7_1&course_id=_3_1&content_id=_22_1&step=null",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter", ".last-login"],
      "selectorExpansion": true,
      "selectors": [
        "body"
      ],
      "readyEvent": null,
      "delay": 600,
      "misMatchThreshold" : 0.4,
      "requireSameDimensions" : true,
      "onBeforeScript": "onBefore.js",
      "onReadyScript": "onReady.js"
    }
    // {
    //   "label": "2016 UI Click Lock - Show Closed Lock",
    //   "url": "https://jeggertmbp.local:8443/webapps/blackboard/execute/modulepage/view?course_id=_3_1&cmp_tab_id=_12_1&editMode=true&mode=cpview",
    //   ////"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1",
    //   "hideSelectors": [],
    //   "removeSelectors": [],
    //   "selectorExpansion": true,
    //   "selectors": [

    //   ],
    //   "readyEvent": null,
    //   "delay": 600,
    //   "misMatchThreshold": 0.2,
    //   "requireSameDimensions": true,
    //   "onBeforeScript": "onBefore.js",
    //   "onReadyScript": "clickLockIcon.js"
    // },
    // {
    //   "label": "2016 BackStop Test Course - student preview on",
    //   "url": "https://jeggertmbp.local:8443/webapps/blackboard/execute/modulepage/view?course_id=_3_1&cmp_tab_id=_12_1&mode=view",
    //   ////"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/execute/modulepage/view?course_id=_658_1&cmp_tab_id=_685_1&editMode=true&mode=cpview",
    //   "hideSelectors": [],
    //   "removeSelectors": [".portletInfoFooter"],
    //   "selectorExpansion": true,
    //   "selectors": [
       
    //   ],
    //   "readyEvent": null,
    //   "delay": 2600,
    //   "misMatchThreshold" : 0.6,
    //   "requireSameDimensions" : true,
    //   "onBeforeScript": "onBefore.js",
    //   "onReadyScript": "clickStudentPreview.js"
    // },
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/2016/bitmaps_reference/",
    "bitmaps_test": "backstop_data/2016/bitmaps_test/",
    "engine_scripts": "backstop_data/2016/engine_scripts",
    "html_report": "backstop_data/2016/html_report",
    "ci_report": "backstop_data/2016/ci_report/"
  },
  "casperFlags": [
    "--ignore-ssl-errors=true",
    "--ssl-protocol=any"
    ],
  "engineFlags": ["--ignore-certificate-errors"],
  "engine": "phantomjs",
  "report": ["browser"],
  "debug": false
};
