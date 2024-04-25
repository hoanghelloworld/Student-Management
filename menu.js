function toggleMenu() {
  var menu = document.getElementById("myMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    closeContactBox();
    closeNoteBox()
  }
}

document.getElementById('logout').addEventListener('click', function(event) {
  // Ngăn chặn hành vi mặc định của nút
  event.preventDefault();
  // Ẩn menu
  toggleMenu();
});

function openContactBox() {
  var contactBox = document.getElementById("contactBox");
  contactBox.style.display = "block";
  toggleMenu();
}

function closeContactBox() {
  var contactBox = document.getElementById("contactBox");
  contactBox.style.display = "none";
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của form

  // Kiểm tra xem form có hợp lệ hay không
  var isValid = validateForm();

  if (isValid) {
    // Thực hiện các hành động khi form hợp lệ
    // Đóng box
    closeContactBox();
    
    // Gán input text bằng rỗng
    document.querySelector('input[type="text"]').value = '';

    // Hiển thị thông báo gửi thành công
    document.getElementById('success-message').style.display = 'block';
    
    // Tự động ẩn thông báo sau 3 giây
    setTimeout(function() {
      document.getElementById('success-message').style.display = 'none';
    }, 3000);
  }
});

// Hàm kiểm tra hợp lệ của form
function validateForm() {
  var inputText = document.querySelector('input[type="text"]').value;
  if (inputText.trim() === '') {
    return false;
  }
  return true;
}

function updateMarquee() {
  var noteContent = document.getElementById("noteInput").value;
  var marquee = document.querySelector('.notice marquee');
  marquee.textContent = noteContent;
}

// Đóng hộp note
function closeNoteBox() {
  var noteBox = document.querySelector(".note-box");
  noteBox.style.display = "none";
}

// Mở hộp note
function openNoteBox() {
  var noteBox = document.querySelector(".note-box");
  noteBox.style.display = "block";
  toggleMenu();
}

// Thêm sự kiện click cho nút note để mở hộp note
document.addEventListener("DOMContentLoaded", function() {
  var noteButton = document.querySelector(".note-button");
  noteButton.addEventListener("click", function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của nút
      openNoteBox(); // Gọi hàm để mở hộp note
  });
});

