// script.js

document.getElementById("generateBtn").addEventListener("click", function() {
  const otp = generateOTP(6);  // Generate a 6-digit OTP
  document.getElementById("otpDisplay").value = otp;  // Display OTP in input field
  document.getElementById("otpMessage").textContent = "Your OTP is generated!";
});

// Function to generate a random OTP of given length
function generateOTP(length) {
  let otp = '';
  const characters = '0123456789';
  for (let i = 0; i < length; i++) {
    otp += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return otp;
}
