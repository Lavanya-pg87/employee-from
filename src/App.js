import React, { useState } from 'react';
import './App.css';

function App() {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    // Define the addEmployee function
    const addEmployee = () => {
        if (name === '' || profession === '' || age === '') {
            setMessage('All fields are required.');
            setMessageType('error');
            return;
        }

        const newEmployee = {
            id: employees.length + 1,
            name: name,
            profession: profession,
            age: parseInt(age)
        };

        setEmployees([...employees, newEmployee]);
        setMessage('Employee added successfully.');
        setMessageType('success');
        setName('');
        setProfession('');
        setAge('');
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    return (
        <div className="App">
            <h1>Employee Form</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
                <label htmlFor="profession">Profession:</label>
                <input type="text" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)} required /><br /><br />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required /><br /><br />
                <button type="button" onClick={addEmployee}>Add Employee</button>
            </form>
            <p className={messageType}>{message}</p>
            <h2>Added Employees</h2>
            <div id="employeeList">
                {employees.map(employee => (
                    <div key={employee.id} id={`employee-${employee.id}`}>
                        <p>ID: {employee.id}, Name: {employee.name}, Profession: {employee.profession}, Age: {employee.age}</p>
                        <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
