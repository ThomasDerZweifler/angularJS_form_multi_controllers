function Group() {
    // Properties definition
    this.teamleader;
    this.groupName;
    this.users;
    this.groupInformedBy; // by WhatsApp or by SMS or by email
    this.maxPlayers;
    this.adult;

    // Methods definition
    this.construct = function (teamleader, groupName, users, groupInformedBy, maxPlayers, adult) {
        this.groupName = groupName;
        this.users = users;
        this.groupInformedBy = groupInformedBy;
        this.maxPlayers = maxPlayers;
        this.adult = adult;
        this.teamleader = teamleader;
    };

    // getter and setter
    this.getGroupName = function () { return this.groupName; };
    this.setGroupName = function (groupName) { this.groupName = groupName; };

    this.getUsers = function () { return this.users; };
    this.setUsers = function (users) { this.users = users; };

    this.setTeamleader = function(teamleader){this.teamleader = teamleader;};
    this.getTeamleader = function(){return this.teamleader;};

    /*this.addUser = function (userName, userMovil){
        this.user = new User(userName, "", userMovil);
        this.users.push(user);
    };

    this.deleteUser = function(){

    };*/

    this.getGroupInformedBy = function () { return this.groupInformedBy; };
    this.setGroupInformedBy = function (groupInformedBy) { this.groupInformedBy = groupInformedBy; };

    this.getMaxPlayers = function () { return this.maxPlayers; };
    this.setMaxPlayers = function (maxPlayers) { this.maxPlayers = maxPlayers; };

    this.getAdult = function () { return this.adult; };
    this.setAdult = function (adult) { this.adult = adult; };

} // END Canvas class
