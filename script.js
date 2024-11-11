class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  controllaEta(persona) {
    if (this.age > persona.age) {
      return this.firstName + " è più vecchio di " + persona.firstName;
    } else {
      return persona.firstName + " è più vecchio di " + this.firstName;
    }
  }
}
let persona1 = new User("Alessia", "Campanile", 21, "Valmontone");
let persona2 = new User("Mario", "Rossi", 30, "Roma");

console.log(persona1.controllaEta(persona2));

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(pet) {
    return this.ownerName === pet.ownerName;
  }
}
const petUl = document.getElementById("lista");
const petForm = document.getElementById("petForm");
petForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPetName = document.getElementById("petName").value;

  const inputOwnerName = document.getElementById("ownerName").value;
  const inputSpecies = document.getElementById("species").value;
  const inputBreed = document.getElementById("breed").value;
  const pet = new Pet(inputPetName, inputOwnerName, inputSpecies, inputBreed);
  console.log(pet);
  const nuovoLi = document.createElement("li");
  nuovoLi.innerText = " Animale: " + pet.petName + " Proprietario " + pet.ownerName + " Specie: " + pet.species + " Razza : " + pet.breed;
  petUl.appendChild(nuovoLi);
  petForm.reset();
});
