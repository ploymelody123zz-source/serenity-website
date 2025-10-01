document.getElementById('bookForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const data = {
    name: document.getElementById('name').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    service: document.getElementById('service').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    note: document.getElementById('note').value.trim()
  };

  if (!data.name || !data.phone || !data.service || !data.date || !data.time) {
    alert('กรอกข้อมูลให้ครบก่อนค่ะ');
    return;
  }

  const box = document.getElementById('ok');
  box.style.display = 'block';
  box.innerHTML = `
    ✅ รับคำจองของคุณแล้วค่ะ<br>
    ชื่อ: <b>${data.name}</b> | เบอร์: <b>${data.phone}</b><br>
    บริการ: <b>${data.service}</b><br>
    วันที่: <b>${data.date}</b> เวลา: <b>${data.time}</b><br>
    หมายเหตุ: ${data.note || '-'}
  `;

  this.reset();
});