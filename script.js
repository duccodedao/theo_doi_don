document.addEventListener("DOMContentLoaded", function() {
    var orders = [
        { 
            name: "3T SPORT ", //Tên Pgae
            code: "FbSubVip_L0JG5V1OD779", //Mã đơn
            id: "61558049377033", //UID Page
            server: "Server 2", // Máy chủ
            quantity: 3000, // Số lượng
            start: "0", // Bắt đầu
            increase: 4400, //Đã tăng
            price: 15000, //Đơn giá
            total: 45000, //Tổng cộng
            status: "Đã hoàn thành" //Trạng thái
        },
        // Các đơn hàng khác
        { 
            name: "3T SPORT ", //Tên Pgae
            code: "FbLikePageSpeed_XOYDSU35W16F ", //Mã đơn
            id: "61558049377033", //UID Page
            server: "Server 1", // Máy chủ
            quantity: 2000, // Số lượng
            start: "0", // Bắt đầu
            increase: 2000, //Đã tăng
            price: 32000, //Đơn giá
            total: 64000, //Tổng cộng
            status: "Đã hoàn thành" //Trạng thái
        },
        // Các đơn hàng khác
    ];

    var tableBody = document.getElementById("orderTableBody");
    var searchForm = document.getElementById("searchForm");
    var orderTable = document.getElementById("orderTable");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

        if (searchInput === "") {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Vui lòng nhập mã đơn',
            });
            return;
        }

        var filteredOrders = orders.filter(function(order) {
            return order.code.toLowerCase().includes(searchInput);
        });

        if (filteredOrders.length > 0) {
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Đơn hàng được tìm thấy!',
                text: 'Thông tin đơn hàng đã được hiển thị.',
            });
        } else {
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Không tìm thấy đơn hàng',
                text: 'Mã đơn không tồn tại.',
            });
        }

        displayOrders(filteredOrders);
    });

    function displayOrders(orders) {
        tableBody.innerHTML = "";

        if (orders.length > 0) {
            orderTable.classList.remove("hidden");
            searchForm.classList.add("hidden");

            orders.forEach(function(order) {
                var row = document.createElement("tr");
                row.innerHTML = `
                    <td>${order.name}</td>
                    <td>${order.code}</td>
                    <td>${order.id}</td>
                    <td>${order.server}</td>
                    <td>${order.quantity}</td>
                    <td>${order.start}</td>
                    <td>${order.increase}</td>
                    <td>${order.price}</td>
                    <td>${order.total}</td>
                    <td>${order.status}</td>
                `;
                tableBody.appendChild(row);
            });
        } else {
            orderTable.classList.add("hidden");
            searchForm.classList.remove("hidden");
        }
    }
});
