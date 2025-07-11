document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('inp1').value.trim();
  const password = document.getElementById('inp2').value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters long.");
    return;
  }

  alert("✅ Form submitted successfully!");
});
