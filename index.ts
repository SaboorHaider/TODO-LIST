#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let todos :string[] = ["saboor", "haider"];

async function createTodo(todos:string[]){ 
    do{let ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Select an Option you want to do",
        choices: ["Add", "update", "view", "delete"],
    })

    if (ans.select == "Add") {
        let addTodo = await inquirer.prompt({
            name:"todo",
            type: "input",
            message: "Add items in the list"
        });
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(chalk.green(todo)));
     };

    if (ans.select == "update"){
        let updateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update items in the list",
            choices: todos.map(item => item)
        });
        let addtodo = await inquirer.prompt({
            name:"todo",
            type: "input",
            message: "Add items in the list"
        });

        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo,addtodo.todo]
        todos.forEach(todo => console.log(todo));
    }
    if (ans.select== "view"){
        console.log("*** TO DO LIST***");
        todos.forEach(todo => console.log(todo));
        console.log("*********************");
 
    }

    if (ans.select == "delete"){
        let deleteTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update items in the list",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo]
        todos.forEach(todo => console.log(todo));
    }   
}while(true)
}   
createTodo(todos)