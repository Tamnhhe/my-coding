function copyCode() {
  const codeBlock = document.getElementById('code-block').innerText;

  navigator.clipboard.writeText(codeBlock).then(() => {
    alert('Code đã được sao chép!');
  }).catch(err => {
    console.error('Lỗi sao chép:', err);
    alert('Không thể sao chép code!');
  });
}
