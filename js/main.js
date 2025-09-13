document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".toggle-menu");
  const navbar = document.querySelector(".navbar");

  toggleMenu.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const product = document.getElementById("kindProduct").value.trim();
    const quantity = document.getElementById("quantity").value.trim();
    const address = document.getElementById("address").value.trim();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !product ||
      !quantity ||
      !address
    ) {
      alert("يرجى تعبئة جميع الحقول!");
      return;
    }

    let phoneNumber = "967777105343"; // رقمك هنا
    const message = `طلب جديد:%0A
الاسم: ${firstName} ${lastName}%0A
📧 البريد: ${email}%0A
📱 الهاتف: ${phone}%0A
🍞 المنتج: ${product}%0A
🔢 الكمية: ${quantity}%0A
📍 العنوان: ${address}`;

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  });
});
