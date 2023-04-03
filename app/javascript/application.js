// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import {StreamActions} from "@hotwired/turbo"

StreamActions.console_log = function() {
  console.log(this.getAttribute("message"), this.templateContent, this.targetElements)
}

StreamActions.notification = function() {
  let title = this.getAttribute("title")
  Notification.requestPermission(function(status) {
    console.log(status)
    if (status == "granted") {
      new Notification(title)
    }
  })
}
