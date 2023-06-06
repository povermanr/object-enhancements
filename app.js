function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastName
    }
};

let favoriteNumber = 13;
const instructor = {
    firstName: "Mabel",
    [favoriteNumber]: "That is my favorite!"
};

const greetInstructor = {
    firstName: "Mabel",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
};

const d = createAnimal("dog", "bark", "Woooof!")
d.bark()

const c = createAnimal("cat", "cry", "MEOOOOOOOOW!")
c.cry()

function createAnimal(species, verb, noise) {
    return {
        species, [verb]() {
            return noise;
        }
    }
}