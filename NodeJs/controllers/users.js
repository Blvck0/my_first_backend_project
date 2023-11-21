import { v4 as uuidv4} from 'uuid';

let users = [];

const getUser = (req, res) => {

    console.log(users);

    res.send(users);
}

const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4()}); 

    res.send(`Account addded successfully.`);
}

const updateUser = (req, res) => {
    const { id } = req.params;

    const {firstName,lastName,email,age} = req.body;

    const user = users.find((user) => user.id == id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (age) user.age = age;

    res.send('User account updated...');

}

const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send('User deleted...');
}

const getUserById = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser); 
}

export {createUser, getUser, updateUser, deleteUser, getUserById};