function User(id, name, email, password, cnpj) {
    const private = { id, name, email, password, cnpj }

    // return just getters and setters to closure
    return {

        getId() { return private.id; },

        getName() { return private.name; },
        setName(name) { private.name = name; },

        getEmail() { return private.email; },
        setEmail(email) { private.email = email; },

        getPassword() { return private.password; },
        setPassword(password) { private.password = password; },

        getCNPJ() { return private.cnpj; },
        setCNPJ(cnpj) { private.cnpj = cnpj; },

    }
}

module.exports = User;

