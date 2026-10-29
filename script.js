// script.js - Lương Nhật Hảo - 1822030132

document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiển thị ngày giờ thực khi tải trang
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleString('vi-VN');
    }

    // 2. Xử lý sự kiện bấm nút để kiểm tra tương tác JavaScript
    const btn = document.getElementById('btn-click');
    const feedback = document.getElementById('click-feedback');
    let clickCount = 0;

    if (btn && feedback) {
        btn.addEventListener('click', () => {
            clickCount++;
            feedback.textContent = `Bạn đã nhấp ${clickCount} lần! Script JavaScript hoạt động bình thường 🎉`;
        });
    }
});

