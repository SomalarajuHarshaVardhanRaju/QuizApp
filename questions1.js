const questions = [
    {
        category: "programming",
        questions: [
            {
                question: "Which of the following is not a Java keyword?",
                options: ["static", "Boolean", "void", "private"],
                answer: "Boolean"
            },
            {
                question: "What is the default value of an int variable in Java?",
                options: ["0", "null", "undefined", "1"],
                answer: "0"
            },
            {
                question: "Which method is the entry point of a Java program?",
                options: ["start()", "main()", "run()", "init()"],
                answer: "main()"
            },
            {
                question: "Which of these is not a primitive data type in Java?",
                options: ["int", "float", "String", "char"],
                answer: "String"
            },
            {
                question: "Which operator is used for comparison in Java?",
                options: ["=", "==", "===", "!="],
                answer: "=="
            },
            {
                question: "Which keyword is used to inherit a class in Java?",
                options: ["this", "super", "extends", "implements"],
                answer: "extends"
            },
            {
                question: "Which of the following is used to handle exceptions in Java?",
                options: ["try-catch", "catch-try", "error handling", "exception"],
                answer: "try-catch"
            },
            {
                question: "Which package contains the Scanner class?",
                options: ["java.util", "java.io", "java.lang", "java.awt"],
                answer: "java.util"
            },
            {
                question: "What is the size of a byte variable in Java?",
                options: ["8 bits", "16 bits", "32 bits", "64 bits"],
                answer: "8 bits"
            },
            {
                question: "Which method is used to print output in Java?",
                options: ["System.out.print()", "console.log()", "print()", "echo()"],
                answer: "System.out.print()"
            },
            {
                question: "Which of the following is not an access modifier in Java?",
                options: ["public", "private", "protected", "package"],
                answer: "package"
            },
            {
                question: "Which keyword is used to create an object in Java?",
                options: ["new", "create", "object", "instance"],
                answer: "new"
            },
            {
                question: "Which of these is a valid array declaration in Java?",
                options: ["int[] arr;", "arr[] int;", "int arr[];", "Both int[] arr; and int arr[];"],
                answer: "Both int[] arr; and int arr[];"
            },
            {
                question: "Which of the following loops is not available in Java?",
                options: ["for", "while", "do-while", "foreach"],
                answer: "foreach"
            },
            {
                question: "Which keyword is used to prevent inheritance?",
                options: ["final", "static", "private", "abstract"],
                answer: "final"
            },
            {
                question: "Which method is used to compare two strings in Java?",
                options: ["equals()", "==", "compare()", "compareTo()"],
                answer: "equals()"
            },
            {
                question: "Which of the following is a wrapper class in Java?",
                options: ["Integer", "int", "float", "char"],
                answer: "Integer"
            },
            {
                question: "Which exception is thrown when dividing by zero in Java?",
                options: ["ArithmeticException", "NullPointerException", "IOException", "IndexOutOfBoundsException"],
                answer: "ArithmeticException"
            },
            {
                question: "Which keyword is used to define a constant in Java?",
                options: ["final", "const", "static", "constant"],
                answer: "final"
            },
            {
                question: "Which of the following is not a valid identifier in Java?",
                options: ["_myVar", "$myVar", "myVar1", "1myVar"],
                answer: "1myVar"
            },
            {
                question: "Which method is used to get the length of a string in Java?",
                options: ["length()", "size()", "getLength()", "count()"],
                answer: "length()"
            },
            {
                question: "Which of the following is used to import a package in Java?",
                options: ["import", "package", "include", "using"],
                answer: "import"
            },
            {
                question: "Which of these is not a feature of Java?",
                options: ["Platform independent", "Object-oriented", "Supports pointers", "Automatic garbage collection"],
                answer: "Supports pointers"
            },
            {
                question: "Which keyword is used to refer to the current object?",
                options: ["this", "super", "self", "current"],
                answer: "this"
            },
            {
                question: "Which of the following is the correct file extension for Java files?",
                options: [".java", ".jav", ".class", ".js"],
                answer: ".java"
            }
        ]
    },

        
    {
        category: "geography",
        questions: [
            {
                question: "What is the largest continent by area?",
                options: ["Africa", "Asia", "Europe", "North America"],
                answer: "Asia"
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                answer: "Nile"
            },
            {
                question: "Which country has the largest population?",
                options: ["India", "United States", "China", "Indonesia"],
                answer: "China"
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
                answer: "Sahara"
            },
            {
                question: "Mount Everest is located in which mountain range?",
                options: ["Andes", "Rockies", "Himalayas", "Alps"],
                answer: "Himalayas"
            },
            {
                question: "Which ocean is the deepest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                answer: "Pacific"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "Thailand", "South Korea"],
                answer: "Japan"
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Nauru", "Vatican City", "San Marino"],
                answer: "Vatican City"
            },
            {
                question: "Which river flows through Paris?",
                options: ["Thames", "Danube", "Seine", "Rhine"],
                answer: "Seine"
            },
            {
                question: "Which continent has the most countries?",
                options: ["Asia", "Europe", "Africa", "South America"],
                answer: "Africa"
            },
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                answer: "Ottawa"
            },
            {
                question: "Which country is both in Europe and Asia?",
                options: ["Russia", "Egypt", "Turkey", "Kazakhstan"],
                answer: "Russia"
            },
            {
                question: "Which is the largest island in the world?",
                options: ["Greenland", "Australia", "Borneo", "Madagascar"],
                answer: "Greenland"
            },
            {
                question: "Which US state has the longest coastline?",
                options: ["California", "Florida", "Alaska", "Texas"],
                answer: "Alaska"
            },
            {
                question: "What is the capital of Brazil?",
                options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
                answer: "Brasília"
            },
            {
                question: "Which African country is the most populous?",
                options: ["Egypt", "Nigeria", "Ethiopia", "South Africa"],
                answer: "Nigeria"
            },
            {
                question: "Which is the largest lake in Africa?",
                options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
                answer: "Lake Victoria"
            },
            {
                question: "Which mountain is the highest in Africa?",
                options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Elgon", "Mount Meru"],
                answer: "Mount Kilimanjaro"
            },
            {
                question: "Which country has the most natural lakes?",
                options: ["Canada", "United States", "Russia", "India"],
                answer: "Canada"
            },
            {
                question: "What is the capital of Egypt?",
                options: ["Cairo", "Alexandria", "Giza", "Luxor"],
                answer: "Cairo"
            },
            {
                question: "Which is the southernmost continent?",
                options: ["Africa", "Australia", "South America", "Antarctica"],
                answer: "Antarctica"
            },
            {
                question: "Which river is sacred to Hindus?",
                options: ["Indus", "Ganges", "Brahmaputra", "Yamuna"],
                answer: "Ganges"
            },
            {
                question: "Which country is known as the Land of a Thousand Lakes?",
                options: ["Sweden", "Finland", "Norway", "Denmark"],
                answer: "Finland"
            },
            {
                question: "Which is the largest peninsula in the world?",
                options: ["Iberian", "Arabian", "Indian", "Balkan"],
                answer: "Arabian"
            }
        ]
    },
    {
        category: "mathematics",
        questions: [
            {
                question: "What is the value of π (pi) rounded to two decimal places?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                answer: "3.14"
            },
            {
                question: "What is 7 × 8?",
                options: ["54", "56", "58", "60"],
                answer: "56"
            },
            {
                question: "What is the square root of 81?",
                options: ["7", "8", "9", "10"],
                answer: "9"
            },
            {
                question: "What is 15% of 200?",
                options: ["20", "25", "30", "35"],
                answer: "30"
            },
            {
                question: "What is the next prime number after 7?",
                options: ["9", "10", "11", "13"],
                answer: "11"
            },
            {
                question: "What is the value of 2³?",
                options: ["6", "8", "9", "12"],
                answer: "8"
            },
            {
                question: "What is the perimeter of a square with side 5 cm?",
                options: ["10 cm", "15 cm", "20 cm", "25 cm"],
                answer: "20 cm"
            },
            {
                question: "What is the sum of the angles in a triangle?",
                options: ["90°", "180°", "270°", "360°"],
                answer: "180°"
            },
            {
                question: "What is 100 divided by 4?",
                options: ["20", "24", "25", "40"],
                answer: "25"
            },
            {
                question: "What is the value of 5 factorial (5!)?",
                options: ["20", "60", "100", "120"],
                answer: "120"
            },
            {
                question: "What is the area of a rectangle with length 8 and width 3?",
                options: ["11", "24", "32", "38"],
                answer: "24"
            },
            {
                question: "What is the smallest two-digit prime number?",
                options: ["10", "11", "13", "17"],
                answer: "11"
            },
            {
                question: "What is the cube root of 27?",
                options: ["2", "3", "4", "5"],
                answer: "3"
            },
            {
                question: "What is 2/5 as a percentage?",
                options: ["20%", "25%", "40%", "50%"],
                answer: "40%"
            },
            {
                question: "What is the value of x if 2x + 3 = 11?",
                options: ["3", "4", "5", "6"],
                answer: "4"
            },
            {
                question: "What is the median of the numbers 3, 7, 9, 15, 21?",
                options: ["7", "9", "12", "15"],
                answer: "9"
            },
            {
                question: "What is the largest three-digit number?",
                options: ["999", "1000", "900", "909"],
                answer: "999"
            },
            {
                question: "What is the value of 10²?",
                options: ["10", "20", "100", "1000"],
                answer: "100"
            },
            {
                question: "What is the sum of the first five natural numbers?",
                options: ["10", "12", "15", "20"],
                answer: "15"
            },
            {
                question: "What is the value of sin(90°)?",
                options: ["0", "0.5", "1", "2"],
                answer: "1"
            },
            {
                question: "What is the next number in the sequence: 2, 4, 8, 16, ...?",
                options: ["18", "20", "24", "32"],
                answer: "32"
            },
            {
                question: "What is the value of 0 divided by any nonzero number?",
                options: ["0", "1", "undefined", "infinity"],
                answer: "0"
            },
            {
                question: "What is the value of log₁₀(100)?",
                options: ["1", "2", "10", "100"],
                answer: "2"
            },
            {
                question: "What is the probability of getting a head when tossing a fair coin?",
                options: ["0", "0.25", "0.5", "1"],
                answer: "0.5"
            },
            {
                question: "What is the value of 12 × 12?",
                options: ["124", "132", "144", "156"],
                answer: "144"
            }
        ]
    },
    {
        category: "entertainment",
        questions: [
            {
                question: "Who played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
                answer: "Robert Downey Jr."
            },
            {
                question: "Which movie won the Oscar for Best Picture in 2020?",
                options: ["1917", "Joker", "Parasite", "Ford v Ferrari"],
                answer: "Parasite"
            },
            {
                question: "Who is known as the King of Pop?",
                options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
                answer: "Michael Jackson"
            },
            {
                question: "Which TV series features the Stark family?",
                options: ["Breaking Bad", "Game of Thrones", "The Crown", "Stranger Things"],
                answer: "Game of Thrones"
            },
            {
                question: "Who directed the movie 'Inception'?",
                options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
                answer: "Christopher Nolan"
            },
            {
                question: "Which singer released the album '1989'?",
                options: ["Adele", "Taylor Swift", "Katy Perry", "Selena Gomez"],
                answer: "Taylor Swift"
            },
            {
                question: "What is the name of the wizarding school in Harry Potter?",
                options: ["Beauxbatons", "Durmstrang", "Hogwarts", "Ilvermorny"],
                answer: "Hogwarts"
            },
            {
                question: "Which movie features the song 'Let It Go'?",
                options: ["Moana", "Frozen", "Tangled", "Coco"],
                answer: "Frozen"
            },
            {
                question: "Who played Jack in Titanic?",
                options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Matt Damon"],
                answer: "Leonardo DiCaprio"
            },
            {
                question: "Which band is known for the song 'Bohemian Rhapsody'?",
                options: ["Queen", "The Beatles", "Pink Floyd", "Led Zeppelin"],
                answer: "Queen"
            },
            {
                question: "Who is the creator of the Star Wars franchise?",
                options: ["George Lucas", "J.J. Abrams", "Steven Spielberg", "James Cameron"],
                answer: "George Lucas"
            },
            {
                question: "Which animated movie features a talking snowman named Olaf?",
                options: ["Frozen", "Shrek", "Toy Story", "Despicable Me"],
                answer: "Frozen"
            },
            {
                question: "Who won the first season of American Idol?",
                options: ["Kelly Clarkson", "Carrie Underwood", "Jennifer Hudson", "Fantasia Barrino"],
                answer: "Kelly Clarkson"
            },
            {
                question: "Which movie is famous for the quote 'I'll be back'?",
                options: ["Die Hard", "The Terminator", "Predator", "RoboCop"],
                answer: "The Terminator"
            },
            {
                question: "Who played the Joker in 'The Dark Knight'?",
                options: ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
                answer: "Heath Ledger"
            },
            {
                question: "Which TV show is set in the fictional town of Hawkins, Indiana?",
                options: ["Riverdale", "Stranger Things", "The Vampire Diaries", "Supernatural"],
                answer: "Stranger Things"
            },
            {
                question: "Who is the lead singer of the band U2?",
                options: ["Bono", "Sting", "Freddie Mercury", "Mick Jagger"],
                answer: "Bono"
            },
            {
                question: "Which movie features a character named Simba?",
                options: ["The Lion King", "Madagascar", "Finding Nemo", "Zootopia"],
                answer: "The Lion King"
            },
            {
                question: "Who played Hermione Granger in the Harry Potter movies?",
                options: ["Emma Watson", "Emma Stone", "Natalie Portman", "Keira Knightley"],
                answer: "Emma Watson"
            },
            {
                question: "Which artist painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                answer: "Leonardo da Vinci"
            },
            {
                question: "Which movie series features a character named Luke Skywalker?",
                options: ["Star Wars", "Star Trek", "Indiana Jones", "Jurassic Park"],
                answer: "Star Wars"
            },
            {
                question: "Who is the author of the 'Game of Thrones' book series?",
                options: ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Stephen King"],
                answer: "George R.R. Martin"
            },
            {
                question: "Which movie features the character Tony Stark?",
                options: ["Iron Man", "Batman", "Superman", "Spider-Man"],
                answer: "Iron Man"
            },
            {
                question: "Who sang the hit song 'Shape of You'?",
                options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Sam Smith"],
                answer: "Ed Sheeran"
            },
            {
                question: "Which movie won the Oscar for Best Animated Feature in 2019?",
                options: ["Toy Story 4", "Frozen II", "How to Train Your Dragon: The Hidden World", "Missing Link"],
                answer: "Toy Story 4"
            }
        ]
    }
];