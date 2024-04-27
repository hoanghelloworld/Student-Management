document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Lấy giá trị từ trường email và password
        var email = document.getElementById('Email').value;
        var password = document.getElementById('Password').value;

        // Kiểm tra logic đăng nhập ở đây (trong ví dụ này, email là "admin" và password là "123456")
        if (email !== '' && password !== '') {
            // Lưu tên người dùng vào Local Storage
            localStorage.setItem('username', email);

            window.location.href = "home.html";
        } else {
            // Đăng nhập thất bại, hiển thị thông báo lỗi hoặc thực hiện hành động khác
            alert("Invalid email or password. Please try again.");
        }
    });
});
