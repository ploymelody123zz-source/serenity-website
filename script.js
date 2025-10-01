// ----- LINE OA Config -----
const LINE_ACCESS_TOKEN = "Ed7NZ94i1ZhZQQexdlK2YJ4gOmpK0fFTd30+gdl+OBzxO6m1xndHs8Fw62FQVC3bTaIxrmp4DQbRLXeIWR5a7mQ5y8d2gD2jB0eY06m4dgEz64jJMhA4QKrenOeKTKwifvV9kOzKIHyhYElMsYcU2wdB04t89/1O/w1cDnyilFU=";
const LINE_USER_ID = "U90e45436f06ea3c6f39dcdada5332200";  // 

// ฟังก์ชันส่งข้อความเข้า LINE OA
function sendToLine(message) {
  fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${LINE_ACCESS_TOKEN}`
    },
    body: JSON.stringify({
      to: LINE_USER_ID,
      messages: [{ type: "text", text: message }]
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ ส่งไป LINE แล้ว:", data);
  })
  .catch(err => console.error("❌ Error:", err));
}

// ----- ดักการส่งฟอร์ม -----
document.getElementById("bookForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const message = `📌 มีการจองใหม่
👤 ชื่อ: ${name}
📞 เบอร์: ${phone}
💆 บริการ: ${service}
📅 วันที่: ${date} เวลา: ${time}`;

  alert("✅ ระบบรับคำจองแล้ว ส่งเข้า LINE ให้เรียบร้อย");
  sendToLine(message);
});
