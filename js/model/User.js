function User() {
    // Properties definition
    this.name;
    this.mail;
    this.movil;
    this.dni;

    // Methods definition
    this.construct = function (name, mail, movil,dni) {
        this.name = name;
        this.mail = mail;
        this.movil = movil;
        this.dni;
    };

    // getter and setter
    this.getName = function () { return this.name; };
    this.setName = function (name) { this.name = name; };

    this.getMail = function () { return this.mail; };
    this.setMail = function (mail) { this.mail = mail; };

    this.getMovil = function () { return this.movil; };
    this.setMovil = function (movil) { this.movil = movil; };

    this.getDni = function () { return this.dni; };
    this.setDni = function (dni) { this.dni = dni; };

}
