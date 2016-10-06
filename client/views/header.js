Template.header.helpers({
    isConnected: function() {
        if(Session.get("user") != null)
            return true;
        else
            return false;
    },
    getUser: () => Session.get("user")
});