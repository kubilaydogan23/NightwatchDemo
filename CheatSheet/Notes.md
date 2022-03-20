
**nightwatch.conf.js**
```
    "test_settings" : {
        "default" : {
            launch_url: "https://dogan2web.mia.ucloud.int",
```

**test.js**
```
module.exports = {
    'Valid login' : function(browser) {
        //Visit url from launch_url on nightwatch.conf.js
        browser.url(browser.launch_url)
        browser.url(browser.launch_url + '/recruiter/candidate_infos');
        ...
```