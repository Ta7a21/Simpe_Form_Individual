function showData() {
  let newWindow = window.open(
    "",
    "Data Entered",
    "fullscreen=yes,resizable=yes"
  );
  newWindow.document.write(
    '<title> Welcome to MSP21</title> <link rel="stylesheet" href="styles.css"> <h1>Your Data</h1>'
  );
  const fname = document.getElementsByName("first_name")[0].value;
  const lname = document.getElementsByName("last_name")[0].value;
  const email = document.getElementsByName("email")[0].value;
  //const pass = document.getElementsByName("password")[0].value;
  const sex = document.getElementsByName("Gender")[0].value;
  const acode = document.getElementsByName("area_code")[0].value;
  const phone = document.getElementsByName("phone")[0].value;
  newWindow.document.write("<label>First Name: " + fname + "</label><br><br>");
  newWindow.document.write("<label>Last Name: " + lname + "</label><br><br>");
  newWindow.document.write("<label>email: " + email + "</label><br><br>");
  //newWindow.document.write("<label>Password: " + pass + "</label><br><br>");
  newWindow.document.write("<label>Gender: " + sex + "</label><br><br>");
  newWindow.document.write(
    "<label>Phone Number: " + acode + phone + "</label><br><br>"
  );
}
