// 4. Kata ‘Verificador de senhas’ : Crie uma função Verify() que retorne false para os casos listados no repositório e true caso contrário. 
/*Create a Password verifications class called “PasswordVerifier”.

Add the following verifications to a master function called “Verify()”

    - password should be larger than 8 chars
    - password should not be null
    - password should have one uppercase letter at least
    - password should have one lowercase letter at least
    - password should have one number at least

Each one of these should throw an exception with a different message of your choosing */

const Verify = (segnha) => {
    const padrao = /\d{8}\[A-Z]\[a-z]\[0-9]/gi;
    return segnha.match(padrao);
}

console.log(Verify('12345678'));