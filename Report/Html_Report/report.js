$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin_Scenario.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    }
  ],
  "line": 7,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The \"\u003cUsername\u003e\"  In UserName",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The \"\u003cPassword\u003e\"  In PassWord",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "AAA",
        "123"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2"
    },
    {
      "cells": [
        "NNN",
        "345"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3"
    },
    {
      "cells": [
        "SuriyaVeeran17",
        "Music17"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The \"AAA\"  In UserName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The \"123\"  In PassWord",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 5188693400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAA",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_UserName(String)"
});
formatter.result({
  "duration": 6463468100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_PassWord(String)"
});
formatter.result({
  "duration": 1858889900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 5152590800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The \"NNN\"  In UserName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The \"345\"  In PassWord",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 1221780000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NNN",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_UserName(String)"
});
formatter.result({
  "duration": 606963000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "345",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_PassWord(String)"
});
formatter.result({
  "duration": 429711500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 923529000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Enter The \"SuriyaVeeran17\"  In UserName",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Enter The \"Music17\"  In PassWord",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 1155853500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuriyaVeeran17",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_UserName(String)"
});
formatter.result({
  "duration": 659233200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_PassWord(String)"
});
formatter.result({
  "duration": 493756000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2879546000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Search And Select The Room And Details In The Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-and-select-the-room-and-details-in-the-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Select The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Select The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Select The Children Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Click The Search Button It Navigates To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location()"
});
formatter.result({
  "duration": 1389893800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 383958200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 381331100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 523703000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Check_In_Date()"
});
formatter.result({
  "duration": 1073190800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Check_Out_Date()"
});
formatter.result({
  "duration": 557187800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 445515100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Children_Per_Room()"
});
formatter.result({
  "duration": 411047500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Search_Button_It_Navigates_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1685451600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User Confirm The Room In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-the-room-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User Click The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "User Click The Continue Button It Navigates To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Select_Button()"
});
formatter.result({
  "duration": 396167600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Continue_Button_It_Navigates_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 1770929100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "User Book The Room And Payment Details In Search Hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-the-room-and-payment-details-in-search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "User Enter The Valid First Name",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User Enter The Valid Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User Enter The Valid Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Choose The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Select The Select Month In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Select The Select Year In The Expiry Date Box",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Enter The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User Click The Book Now Button It Navigates To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Valid_First_Name()"
});
formatter.result({
  "duration": 491561900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Valid_Last_Name()"
});
formatter.result({
  "duration": 549512400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 622342800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Valid_Credit_Card_Number()"
});
formatter.result({
  "duration": 530347100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Choose_The_Credit_Card_Type()"
});
formatter.result({
  "duration": 518184300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Select_Month_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 570181600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Select_Year_In_The_Expiry_Date_Box()"
});
formatter.result({
  "duration": 331919900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_CVV_Number()"
});
formatter.result({
  "duration": 314299000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Book_Now_Button_It_Navigates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 231748600,
  "status": "passed"
});
});