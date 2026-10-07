// Đơn giá sản phẩm cố định (dạng số nguyên để tính toán)
const PRODUCT_PRICE = 1034550;

// Lấy các phần tử DOM cần thiết
const quantityInput = document.getElementById("quantityInput");
const btnDecrease = document.getElementById("btnDecrease");
const btnIncrease = document.getElementById("btnIncrease");
const subtotalDisplay = document.getElementById("subtotalDisplay");

/**
 * Định dạng số thành định dạng tiền tệ Việt Nam (vd: 1.034.550₫)
 */
function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN") + "₫";
}

/**
 * YÊU CẦU ĐỀ BÀI:
 * Viết hàm tính giá trị Tạm tính = Số lượng * Giá sản phẩm, và hiển thị vào trường Tạm tính
 */
function tinhTamTinh() {
  // Lấy số lượng hiện tại (ép kiểu về số nguyên)
  let soLuong = parseInt(quantityInput.value, 10);
  if (isNaN(soLuong) || soLuong < 1) {
    soLuong = 1;
    quantityInput.value = 1;
  }

  // Tạm tính = Số lượng * Giá sản phẩm
  const tamTinh = soLuong * PRODUCT_PRICE;

  // Hiển thị giá trị đã tính toán vào trường Tạm tính trên giao diện
  subtotalDisplay.innerText = formatCurrency(tamTinh);
}

// Bắt sự kiện khi bấm nút giảm (-)
btnDecrease.addEventListener("click", function () {
  let currentQty = parseInt(quantityInput.value, 10) || 1;
  if (currentQty > 1) {
    quantityInput.value = currentQty - 1;
    tinhTamTinh(); // Cập nhật lại Tạm tính
  }
});

// Bắt sự kiện khi bấm nút tăng (+)
btnIncrease.addEventListener("click", function () {
  let currentQty = parseInt(quantityInput.value, 10) || 1;
  quantityInput.value = currentQty + 1;
  tinhTamTinh(); // Cập nhật lại Tạm tính
});

// Chạy lần đầu khi load trang
document.addEventListener("DOMContentLoaded", function () {
  tinhTamTinh();
});
