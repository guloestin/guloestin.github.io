document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = form.querySelector("input[type='text']").value.trim();
    let email = form.querySelector("input[type='email']").value.trim();
    let message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Semua field harus diisi!");
      return;
    }

    alert(`✅ Terima kasih ${name}, pesanmu sudah terkirim!`);
    form.reset();
  });
});
