class EmployeeList {
    constructor() {
        // Đảm bảo jQuery đã sẵn sàng trước khi liên kết sự kiện click
        $(document).ready(() => {
            this.addEventListeners();
        });
    }

    /**
     * Hàm bắt sự kiện
     * Nhthai 14.07.2024
     */
    addEventListeners() {
        let me = this;
        // sự kiện mở form thêm
        $("#btnGreenIcon").click(() => {
            $("#dialogContent").show();
        });

        // sự kiện mở form thêm
        $("#iconX").click(() => {
            $("#dialogContent").hide();
        });

        $("#btnGreenSave").click(()=> {
            $("#dialogContent").hide();
        })

        $("#btnCancel").click(()=> {
            $("#dialogContent").hide();
        })
    }
}

var oEmployeeList = new EmployeeList();