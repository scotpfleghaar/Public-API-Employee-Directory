$(document).ready(function () {




    var getEmployees = (function () {
        for (var i = 0; i < 12; i++) {
            var randUserAPI = 'https://randomuser.me/api/';

            function displayInformation(data) {
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


            $.getJSON(randUserAPI, displayInformation);

        }

    })(); // end getEmployees

    var displayName = (function () {
        // When the user clicks the button, open the modal
        $(".employees").on("click", ".employee", function () {

            var thisImage = $(this).find("img").attr("src");
            $('.spanPhoto').attr("src", thisImage);

            var thisObject = $(this);

            function displayText(spanName, elementName) {
                $(spanName).text($(thisObject).find(elementName).text());
            }

            displayText('.spanFullName', ".fullName");

            displayText('.spanEmail', ".email");

            displayText('.spanLocation', ".location");

            displayText('.spanPhoneNumber', ".phoneNumber");

            displayText('.spanFullAddress', ".address");

            var thisBirthday = $(this).find(".birthday").text();
            $('.spanBirthday').text("Birthday: " + thisBirthday);


            $('#myModal').css("display", "block");
        });

        // When the user clicks on (x), close the modal
        $(".modal-content").on("click", ".close", function () {
            $('#myModal').css("display", "none");
        });
    })();




}); // end ready
