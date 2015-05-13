hrApp.service('userService', function () {

    var contacts = [];
    this.save = function (contact) {

            contacts.push(contact);

    }

    this.list = function () {
        return contacts;
    }
});