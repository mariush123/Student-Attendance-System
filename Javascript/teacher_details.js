document.addEventListener("DOMContentLoaded", function() {
    const teacherForm = document.getElementById("teacherForm");
    const teacherList = document.getElementById("teacherList");
    const removeButton = document.getElementById("removeSelected");

    // Function to Add a New Teacher
    teacherForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Ensure all fields are filled
        if (name === "" || email === "" || phone === "" || username === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        // Create a new row in the table
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="checkbox" class="teacher-checkbox"></td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${username}</td>
            <td>${password}</td>
        `;

        // Append row to table
        teacherList.appendChild(row);

        // Clear the form fields
        teacherForm.reset();
    });

    // Function to Remove Selected Teachers
    removeButton.addEventListener("click", function() {
        const checkboxes = document.querySelectorAll(".teacher-checkbox:checked");

        if (checkboxes.length === 0) {
            alert("Please select at least one teacher to remove.");
            return;
        }

        checkboxes.forEach((checkbox) => {
            checkbox.closest("tr").remove();
        });
    });
});
