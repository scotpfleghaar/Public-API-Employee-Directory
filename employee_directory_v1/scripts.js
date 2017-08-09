$(document).ready(function () {


    // Gets all the information from the AJAX request and sends it to the paige
    var getEmployees = (function () {

        // Preform 12 AJAX requests to get 12 Employees on the page
        for (var i = 0; i < 12; i++) {
            //The url for the API used in this project
            var randUserAPI = 'https://randomuser.me/api/';

            //Displays the different facets of the JSON data to the page
            function displayInformation(data) {

                //Created an initial variable to build off of for each portion of the employee div
                var employeeHTML = '<div class="employee"><div class="profileImage">';
                employeeHTML += '<img src="' + data.results[0].picture.large + '" alt="Employee Photo">';
                employeeHTML += '</div><div class="profileInformation">';
                employeeHTML += '<h3 class="fullName">' + data.results[0].name.first + ' ' + data.results[0].name.last + '</h3>';
                employeeHTML += '<p class="email">' + data.results[0].email + '</p>'
                employeeHTML += '<p class="location">' + data.results[0].location.state + '</p>';
                employeeHTML += '<p class="phoneNumber invisiable">' + data.results[0].phone + '</p>';
                employeeHTML += '<p class="address invisiable">' + data.results[0].location.street + ' ' + data.results[0].location.city + ' ' + data.results[0].location.state + ' ' + data.results[0].location.postcode + '</p>';
                employeeHTML += '<p class="birthday invisiable">' + data.results[0].dob + '</p>';
                employeeHTML += '</div></div>';
                $('.employees').append(employeeHTML);

            }

            //jQuery JSON request 
            $.getJSON(randUserAPI, displayInformation);

        }

    })(); // end getEmployees


    var displayNameModal = (function () {
        // When the user clicks the button, open the modal
        $(".employees").on("click", ".employee", function () {

            // Finds the image from the element to be displayed in the modal
            var thisImage = $(this).find("img").attr("src");
            $('.spanPhoto').attr("src", thisImage);

            // References the opject for the displayText function
            var thisObject = $(this);

            // Displays text from a given element to the modal
            function displayText(spanName, elementName) {
                $(spanName).text($(thisObject).find(elementName).text());
            }

            //Displays the full name in the modal
            displayText('.spanFullName', ".fullName");

            //Displays the email in the modal
            displayText('.spanEmail', ".email");

            //Displays the location in the modal
            displayText('.spanLocation', ".location");

            //Displays the phone number in the modal
            displayText('.spanPhoneNumber', ".phoneNumber");

            //Displays the full address in the modal
            displayText('.spanFullAddress', ".address");

            //Because I wanted an additional piece of code in the birthday
            // text this would not be refactored with the above code/
            var thisBirthday = $(this).find(".birthday").text();
            $('.spanBirthday').text("Birthday: " + thisBirthday);

            // Displays the complete modal with all information
            $('#myModal').css("display", "block");
        });

        // When the user clicks on (x), close the modal
        $(".modal-content").on("click", ".close", function () {
            $('#myModal').css("display", "none");
        });
    })(); // end displayNameModal




}); // end ready
