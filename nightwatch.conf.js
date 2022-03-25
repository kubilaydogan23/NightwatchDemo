module.exports = {
  src_folders: ["tests"],
  page_objects_path: ['pages'],
  globals_path: "globals/globals.js",
  custom_commands_path : "./custom_commands",
  // output_folder : "reports",    

  webdriver: {
    start_process: true,        // Once we initiate a command to run our test, Nightwatch will start the ChromeDriver instance automatically.
    server_path: 'node_modules/.bin/chromedriver',
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: "https://www.ecosia.org",
      "globals" : {
        "username" : "wardenj",
        "password" : "password"
      },
      desiredCapabilities: {
        browserName: 'chrome'
      },
      screenshots : {
        enabled : true,
        on_failure : true,
        on_error : false,
        path : "screenshots"
      },
    }
  
  }
};