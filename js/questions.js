// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "Which of the following is the correct syntax for declaring a variable in C?",
    answer: "int var_name;",
    options: [
      "int var_name;",
      "variable int var_name;",
      "declare int var_name;",
      "int: var_name;",
    ],
  },
  {
    numb: 2,
    question:
      "Which of the following is the correct syntax to include a header file in C?",
    answer: "#include <stdio.h>",
    options: [
      "#include <stdio>",
      "#include <stdio.h>",
      "#include stdio.h",
      "include <stdio.h>",
    ],
  },
  {
    numb: 3,
    question: "Which of the following is not a valid C variable name?",
    answer: "2variable",
    options: ["var_1", "_variable", "variable2", "2variable"],
  },
  {
    numb: 4,
    question:
      "Which data type is used to create a variable that can store text?",
    answer: "char",
    options: ["int", "float", "char", "double"],
  },
  {
    numb: 5,
    question: "Which of the following is used for comments in C?",
    answer: "// comment",
    options: ["/* comment */", "// comment", "** comment **", "# comment"],
  },
  {
    numb: 6,
    question: "Which function is used to print output to the screen in C?",
    answer: "printf()",
    options: ["print()", "printf()", "cout", "echo()"],
  },
  {
    numb: 7,
    question: "Which function is used to read input from the user in C?",
    answer: "scanf()",
    options: ["input()", "scanf()", "get()", "read()"],
  },
  {
    numb: 8,
    question:
      'What will be the output of the following code: printf("%d", 10+5);?',
    answer: "15",
    options: ["10+5", "15", "105", "Error"],
  },
  {
    numb: 9,
    question: "Which keyword is used to define a constant in C?",
    answer: "const",
    options: ["constant", "define", "const", "fixed"],
  },
  {
    numb: 10,
    question: "What is the correct way to declare a pointer in C?",
    answer: "int *ptr;",
    options: ["int ptr*;", "int *ptr;", "int &ptr;", "pointer int ptr;"],
  },
  {
    numb: 11,
    question: 'What is the output of the following code: printf("%d", 9/2);?',
    answer: "4",
    options: ["4.5", "4", "4.0", "Error"],
  },
  {
    numb: 12,
    question:
      "Which of the following is the correct syntax to define a function in C?",
    answer: "return_type function_name(parameters) { // code }",
    options: [
      "function return_type function_name(parameters) { // code }",
      "return_type function_name(parameters);",
      "return_type function_name(parameters) { // code }",
      "return_type function_name { parameters } // code",
    ],
  },
  {
    numb: 13,
    question:
      'What will be the output of the following code: printf("%d", 5*3);?',
    answer: "15",
    options: ["53", "15", "5*3", "Error"],
  },
  {
    numb: 14,
    question: "Which loop is guaranteed to execute at least once?",
    answer: "do-while loop",
    options: ["for loop", "while loop", "do-while loop", "none of the above"],
  },
  {
    numb: 15,
    question:
      "Which of the following operators is used to access the value stored at the address of a pointer?",
    answer: "*",
    options: ["&", "*", "$", "#"],
  },
  {
    numb: 16,
    question: "Which keyword is used to return a value from a function?",
    answer: "return",
    options: ["break", "return", "exit", "stop"],
  },
  {
    numb: 17,
    question: "Which of the following is a valid conditional statement in C?",
    answer: "if (a > b) { // code }",
    options: [
      "if a > b then { // code }",
      "if (a > b) { // code }",
      "if a > b { // code }",
      "if (a > b) then { // code }",
    ],
  },
  {
    numb: 18,
    question: "Which function is used to find the length of a string in C?",
    answer: "strlen()",
    options: ["strlen()", "length()", "size()", "strlength()"],
  },
  {
    numb: 19,
    question: "What is the correct syntax to initialize an array in C?",
    answer: "int arr[5] = {1, 2, 3, 4, 5};",
    options: [
      "int arr[] = {1, 2, 3, 4, 5};",
      "int arr[5] = (1, 2, 3, 4, 5);",
      "int arr[5] = {1, 2, 3, 4, 5};",
      "int arr[5] = [1, 2, 3, 4, 5];",
    ],
  },
  {
    numb: 20,
    question:
      "Which of the following is the correct way to declare a structure in C?",
    answer: "struct Person { int age; char name[50]; };",
    options: [
      "struct Person { int age; char name[50]; };",
      "Person struct { int age; char name[50]; };",
      "structure Person { int age; char name[50]; };",
      "struct { int age; char name[50]; } Person;",
    ],
  },
  {
    numb: 21,
    question: "Which of the following is used to define a macro in C?",
    answer: "#define",
    options: ["#macro", "#define", "macro", "define"],
  },
  {
    numb: 22,
    question: 'What is the output of the following code: printf("%d", 7%2);?',
    answer: "1",
    options: ["3.5", "3", "1", "0.5"],
  },
  {
    numb: 23,
    question:
      "Which library function can be used to dynamically allocate memory in C?",
    answer: "malloc()",
    options: ["alloc()", "malloc()", "dalloc()", "memalloc()"],
  },
  {
    numb: 24,
    question:
      "What will be the output of the following code: printf(\"%c\", 'A' + 1);?",
    answer: "B",
    options: ["A1", "A+1", "B", "Error"],
  },
  {
    numb: 25,
    question:
      "Which of the following is the correct way to create an infinite loop in C?",
    answer: "while(1) { // code }",
    options: [
      "for(;;) { // code }",
      "while(1) { // code }",
      "while(true) { // code }",
      "loop { // code }",
    ],
  },
];