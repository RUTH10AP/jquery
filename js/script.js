// // let sample1 = $("#sample1");
// // console.log(sample1);
// // console.log(sample1.text);
// // let redd = $(".red");
// // console.log(redd);
// // console.log(redd.text);
// // let techh = $("#techCompanies");
// // console.log(techh);
// // $(document).ready(function () {
// //   // Select the <ul> with ID 'techCompanies'
// //   var techCompanies = $("#techCompanies");

// //   // Count the number of direct <li> children
// //   var companyCount = techCompanies.children("li").length;

// //   // Display the count in the console
// //   console.log("Number of tech companies:", companyCount);
// // });
// // $(function () {
// //   let coppy = $("#bruck");
// //   let coppy2 = coppy.children("li").length;
// //   console.log("num of owner:", coppy2);
// // });
// let facebook = $("<li> Facebook </Li>");
// console.log(facebook);
// facebook.addClass("blue");
// $("#techCompanies").append(facebook);
// let tiktok = $("<li> tiktok </Li>");
// console.log(tiktok);
// tiktok.addClass("red");
// $("#techCompanies").append(tiktok);
// $(document).ready(function () {
//   // 2.1 Select the element with ID "techCompanies"
//   var techCompanies = $("#techCompanies");
//   console.log(techCompanies);

//   // 2.2 Count the number of companies
//   var companyCount = techCompanies.children("li").length;
//   console.log("Number of tech companies:", companyCount);

//   // 2.3 Select all elements with class "red"
//   var redCompanies = $(".red");
//   console.log(redCompanies);

//   // 2.4 Create a new <li> with content "Facebook"
//   var facebook = $("<li>Facebook</li>");
//   console.log(facebook);

//   // 2.5 Give the newly created element a class of "blue"
//   facebook.addClass("blue");

//   // 2.6 Append the new element after "Sony"
//   $("#techCompanies li:contains('Sony')").after(facebook);

//   // 2.7 Count how many companies are labeled blue and display inside "blueCompanies"
//   var blueCount = $(".blue").length;
//   $("#blueCompanies").text("Number of blue companies: " + blueCount);
// });

$(function () {
  $("#btn").click(function (e) {
    e.preventDefault();

    let firstName = $("#forF").val().trim();
    let lastName = $("#forL").val().trim();
    let email = $("#email").val().trim();

    // Clear previous messages
    $(".err").text("");
    $(".result").text("");

    // Validation
    if (!firstName || !lastName || !email) {
      $(".err").text("All fields are required");
    } else {
      // Hide form
      $("form").hide();

      // Show result
      $(".result").html(`
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
      `);
    }
  });
});
