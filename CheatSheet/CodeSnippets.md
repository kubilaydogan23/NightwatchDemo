# Window handle

## Switching to next window
```
browser.windowHandles(function (result) {
    this.switchWindow(result.value[1]);
});
```
```
browser.windowHandles(function (result) {
    this.switchWindow(result.value[2]);
});
```
```
browser.click("@startButton").api.windowHandles(function (result) {
    browser.switchWindow(result.value[1]);
});
```

## Close opened window and return back to main window
```
browser.closeWindow();

browser.windowHandles(function (result) {
    this.switchWindow(result.value[0]);
});
```
</br></br>

# click options

## Click on button once it is enabled
```
browser.click("@nextButton").expect.element("@saveButton").to.be.enabled.before(12000);
```
## Click and wait for button to disappear 
```
browser.click("@closeButton").waitForElementNotPresent('@closeButton', 10000);
```
## Click on ignore button if warning message occurs
```
let terminationPage = browser.page.myEmployees.employeeTermination()

browser.elements('css selector', '#IgnoreBtn', function(result) {
    if (result.value.length > 0) {
        terminationPage.click("@ignoreButton")
    }
});
```

</br></br>

# Checkboxes

## Assert checkbox is checked
```t
browser.click("@checkBox").verify.attributeEquals("@checkBox", "checked", "true")
```

```t
browser.expect.element('input[type=checkbox]').to.have.attribute('checked')
```

```t
browser.getAttribute('input[type=checkbox]', 'checked', function (result) {
    this.assert.equal(result.value, true);
});
```

## Assert checkbox is unchecked
```t
browser.expect.element('input[type=checkbox]').to.not.have.attribute('checked')
```

```t
browser.getAttribute('input[type=checkbox]', 'checked', function (result) {
    this.assert.equal(result.value, null);
});
```

</br>