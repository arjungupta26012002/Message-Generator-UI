function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Message Generator by Arjun');
}

function openLink(url) {

}

function getFirstName() {
  var email = Session.getActiveUser().getEmail();
  if (email) {
    var parts = email.split('@');
    if (parts.length > 0) {
      var namePart = parts[0];

      var firstName = namePart.replace(/[^a-zA-Z]/g, ' ').split(' ')[0];
      if (firstName) {
        return firstName.charAt(0).toUpperCase() + firstName.slice(1);
      }
    }
  }
  return 'Guest'; 
}
