// Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)
// công = (workingDays - lateDays)

// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
// ];

// // - Output: { id: 3, name: "Mark", workingDays: 25, lateDays: 1 }

// const chamChi = (a,b)=> {
//     const workA = a.workingDays - a.lateDays;
//     const workB = b.workingDays - b.lateDays;
//     return workB - workA;
// }
// console.log((employees.sort(chamChi))[0])//Bai 8

// Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value

// const employees = [
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//     { id: 4, name: "John", salary: 2200 },
// ];



// // - Output: {
// //     "John": [
// //         { id: 1, name: "John", salary: 2000 },
// //         { id: 4, name: "John", salary: 2200 },
// //     ],
// //     "Jane": [{ id: 2, name: "Jane", salary: 2500 }],
// //     "Mark": [{ id: 3, name: "Mark", salary: 3000 }],
// // }


// const nameUser = (employees) => {
//     const nameUserEmployees = {};
//     for (let i = 0; i < employees.length; i++) {
//         const employee = employees[i];
//         if (!nameUserEmployees[employee.name]) {
//             nameUserEmployees[employee.name] = [];
//         }
//         nameUserEmployees[employee.name].push(employee);
//     }
//     return nameUserEmployees;
// }

// console.log(nameUser(employees));//Bai9


// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên. 
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.

// hiệu suất = workingDays / salary
// const employees = [
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
// ];

// // - Output: { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 }

// const hieuSuatCaoNhat = (employees) => {
//     let hieuSuatCaoNhat = null;
//     let hieuSuatCao = 0;

//     for (let i = 0; i < employees.length; i++) {
//         const employee = employees[i];
//         const hieuqua = employee.workingDays / employee.salary;

//         if (hieuqua > hieuSuatCao) {
//             hieuSuatCao = hieuqua;
//             hieuSuatCaoNhat = employee;
//         }
//     }

//     return hieuSuatCaoNhat;
// };

// console.log(hieuSuatCaoNhat(employees));//Bai10

// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc, và số lượng nhân viên nằm trong mốc đó.

// const employees = [
//     { id: 1, name: "John", workingDays: 20 },
//     { id: 2, name: "Jane", workingDays: 22 },
//     { id: 3, name: "Mark", workingDays: 20 },
//     { id: 4, name: "Sam", workingDays: 24 },
//     { id: 5, name: "Lucy", workingDays: 22 },
// ];

// // - Output: {
// //     "20": 2,
// //     "22": 2,
// //     "24": 1
// // }

// const bieuDoPhanBoCongViec = (employees) => {
// const bieuDo = {};

// for (let i = 0; i < employees.length; i++) {
//     const workingDays = employees[i].workingDays;

//     if (!bieuDo[workingDays]) {
//         bieuDo[workingDays] = 0;
//     }

//     bieuDo[workingDays]++;
// }

// return bieuDo;
// };

// console.log(bieuDoPhanBoCongViec(employees));//Bai11

// Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về tên, email, số công làm việc, số công đi làm muộn, và mức lương của nhân viên. Tạo một danh sách các đối tượng mới trong đó mỗi đối tượng chứa tên nhân viên, email và thông tin tổng hợp về số công làm việc và đi làm muộn dưới dạng một object con.

// const employees = [
//     { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
// ];


// // - Output: [
// //     {
// //         name: "John",
// //         email: "john@example.com",
// //         workInfo: { workingDays: 22, lateDays: 2 }
// //     },
// //     {
// //         name: "Jane",
// //         email: "jane@example.com",
// //         workInfo: { workingDays: 20, lateDays: 0 }
// //     },
// //     {
// //         name: "Mark",
// //         email: "mark@example.com",
// //         workInfo: { workingDays: 25, lateDays: 1 }
// //     }
// // ]


// const danhSachDoiTuong = (employees) => {
//     return employees.map(employee => ({
//         name: employee.name,
//         email: employee.email,
//         workInfo: {
//             workingDays: employee.workingDays,
//             lateDays: employee.lateDays
//         }
//     }));
// };

// console.log(danhSachDoiTuong(employees));//bai 12

// Quản lý danh sách công việc

// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A


// let tasks = [ 
//     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
//     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
// ];


// Quản lý danh sách công việc

// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A


// let tasks = [ 
//     { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
//     { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//     { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
// ];

// function themCongViec(tasks, name, description) {
//     tasks.push({ name: name, description: description, completed: false });
// }

// themCongViec(tasks, "Play Game", "Dành 30 phút để Play Game");
// console.log(tasks);

// function danhDauCongViecHoanThanh(tasks, taskNames) {
//     taskNames.forEach(taskName => {
//         const task = tasks.find(t => t.name === taskName);
//         if (task) {
//             task.completed = true;
//         }
//     });
// }

// danhDauCongViecHoanThanh(tasks, ["Hoàn thành bài tập JavaScript", "Đi mua hàng"]);
// console.log(tasks);

// function sapXepThuTu(tasks, order = 'asc') {
//     tasks.sort((a, b) => {
//         if (a.name < b.name) {
//             if (order === 'asc') {
//                 return -1;
//             } else {
//                 return 1;
//             }
//         } else if (a.name > b.name) {
//             if (order === 'asc') {
//                 return 1;
//             } else {
//                 return -1;
//             }
//         } else {
//             return 0;
//         }
//     });
// }

// // Sắp xếp từ A -> Z
// sapXepThuTu(tasks, 'asc');
// console.log(tasks);

// // Sắp xếp từ Z -> A
// sapXepThuTu(tasks, 'desc');
// console.log(tasks);//Bai 13