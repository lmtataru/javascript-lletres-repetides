function myFunction(){
    let my_name = ["L", "O", "R", "E", "D", "A", "N", "A"];
    let my_second_name = ["M", "A", "R", "I", "A"];
    let my_last_name = ["T", "A", "T", "A", "R", "U"];
    let fullname = my_second_name.concat("-", my_name, " ", my_last_name);

// Phase 1
    for( i = 0; i < my_name.length; i++){
        console.log(my_name[i]);
    }

// Phase 2
    my_name.push("8")
    for(let i = 0; i < my_name.length; i++){
        
        if(!isNaN(my_name[i])){
            console.log("People names do not contain the number: " + my_name[i]);
        } else if(my_name[i] == "A" || my_name[i] == "E" ||
           my_name[i] == "I" || my_name[i] == "O" ||
           my_name[i] == "U"){
            console.log("I found the VOWEL: " + my_name[i]);
        } else {
            console.log("I found the CONSONANT: " + my_name[i]);
        } 
    }

// Phase 3
    my_name.pop();

    let my_name_list = {};

    for(let i = 0; i < my_name.length; i++){
        if(my_name[i] in my_name_list) {
            my_name_list[my_name[i]] += 1;
        } else {
            my_name_list[my_name[i]] = 1;
        }
    }

    console.log(my_name_list); 

// Phase 4
    console.log(fullname);
}