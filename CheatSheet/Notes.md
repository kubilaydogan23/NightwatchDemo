
**nightwatch.conf.js**
```
    "test_settings" : {
        "default" : {
            launch_url: "https://sample.com",
```

**test.js**
```
module.exports = {
    'Valid login' : function(browser) {
        //Visit url from launch_url on nightwatch.conf.js
        browser.url(browser.launch_url)
        browser.url(browser.launch_url + '/contact/candidate_infos');
        ...
```



# SauceLabs Configuration

In your Nightwatch test project

> npm install nightwatch-saucelabs-endsauce --save

In your Nightwatch nightwatch.json configuration file add or append this entry

> "custom_commands_path": ["./node_modules/nightwatch-saucelabs-endsauce/commands"]