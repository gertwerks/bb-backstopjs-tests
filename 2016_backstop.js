module.exports = {
  "id": "Learn Backstop Test Run",
  "viewports": [
    {
      "name": "desktop",
      "width": 1440,
      "height": 900
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
      "referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/",
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_1_1",
      "hideSelectors": [".containerPortal"],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1",
      "hideSelectors": [],
      "removeSelectors": [],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/execute/modulepage/view?course_id=_658_1&cmp_tab_id=_685_1&editMode=true&mode=cpview",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/content/listContentEditable.jsp?content_id=_1766_1&course_id=_658_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/gradebook/do/instructor/enterGradeCenter?course_id=_658_1&cvid=fullGC",
      "hideSelectors": [],
      "removeSelectors": [],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/gradebook/do/instructor/viewNeedsGrading?course_id=_658_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/assignment/gradeAssignmentRedirector?outcomeDefinitionId=_1640_1&currentAttemptIndex=1&numAttempts=1&anonymousMode=false&sequenceId=_658_1_0&course_id=_658_1&source=cp_gradebook_needs_grading&viewInfo=Needs+Grading&attempt_id=_186_1&courseMembershipId=_790_1&singleAttempt=true&cancelGradeUrl=%2Fwebapps%2Fgradebook%2Fdo%2Finstructor%2FviewNeedsGrading%3Fcourse_id%3D_658_1&submitGradeUrl=%2Fwebapps%2Fgradebook%2Fdo%2Finstructor%2FviewNeedsGrading%3Fcourse_id%3D_658_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/content/listContentEditable.jsp?content_id=_1766_1&course_id=_658_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/content/listContentEditable.jsp?content_id=_1766_1&course_id=_658_1",
      "hideSelectors": [],
      "removeSelectors": [".portletInfoFooter"],
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
      //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/content/listContentEditable.jsp?content_id=_1766_1&course_id=_658_1",
      "hideSelectors": [],
      "removeSelectors": [],
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
      "removeSelectors": [".portletInfoFooter"],
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
      "removeSelectors": [".portletInfoFooter"],
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
      "removeSelectors": [".portletInfoFooter"],
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
      "removeSelectors": [".portletInfoFooter"],
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
    

    // {
    //   "label": "2016 UI Click Lock - Show Closed Lock",
    //   "url": "https://jeggertmbp.local:8443/webapps/blackboard/execute/modulepage/view?course_id=_3_1&cmp_tab_id=_12_1&editMode=true&mode=cpview",
    //   //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_2_1",
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
    //   //"referenceUrl": "https://qa-original-adv-dev.int.bbpd.io/webapps/blackboard/execute/modulepage/view?course_id=_658_1&cmp_tab_id=_685_1&editMode=true&mode=cpview",
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
  "engine": "",
  "report": ["browser"],
  "debug": false
};
