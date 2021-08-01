    var images[
        "https://drive.google.com/file/d/1ERisecoNgPC17UZHDLX0ouo5-j12G3NX/view?usp=sharing",

        "https://drive.google.com/file/d/1lpCadLJMfGmFFLxgCYhS0qN8-wN0pYeZ/view?usp=sharing",

        "https://drive.google.com/file/d/10yZ4oXqaom051NTZI-pBMQ8Z2FaZE8-T/view?usp=sharing",

       "https://drive.google.com/file/d/1Amav9MrJrbMeja4tUMsB6HKX93CkWWBK/view?usp=sharing",

        "https://drive.google.com/file/d/1Amav9MrJrbMeja4tUMsB6HKX93CkWWBK/view?usp=sharing"
    ];

    var names ["This Is My Father" , 
        "This Is My Mother" , 

        "This Is My Sister" , 

        "This Is Me" , 

        "This Is My Family"];

      var i = 0
      function update() 
      
      { i++;
          var number_of_family_members_in_an_array = 5
          if (i > number_of_family_members_in_an_array)
          {
              i = 0;
          }
             var updatedImage = images(i);
             var updatedName = names(i);
             document.getElementById("family_member_image").src = updatedImage;
             document.getElementById("family_member_name").innerHTML = updatedName;
      }





