function copyCode(event) {
  // Tìm phần tử code gần nhất với nút được nhấn
  const codeBlock = event.target
    .closest(".code-container")
    .querySelector("code").innerText;

  // Sao chép nội dung
  navigator.clipboard
    .writeText(codeBlock)
    .then(() => {
      console.log("Code đã được sao chép!");
    })
    .catch((err) => {
      console.error("Lỗi sao chép:", err);
      console.log("Không thể sao chép code!");
    });
}
