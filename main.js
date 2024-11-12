const employeeData = [
    { name: 'Try Abriyanto', department: 'HRD', photo: 'images/try.webp' },
    { name: 'Dea Farida', department: 'Accounting', photo: 'images/dea.webp' },
    { name: 'Kurnia Aristarasi', department: 'Accounting', photo: 'images/kurnia.webp' },
    { name: 'Nanda WIjaya', department: 'Accounting', photo: 'images/nanda.webp' },
    { name: 'Sunyah Tutsari', department: 'Accounting', photo: 'images/sunyah.webp' },
    { name: 'Budi Setianegara', department: 'Accounting', photo: 'images/budi.webp' },
    { name: 'Anggi Dwi', department: 'Accounting' },
    { name: 'Yoni Bayu Putri', department: 'Sales', photo: 'images/yoni.webp' },
    { name: 'Rangga Chaerul', department: 'Sales', photo: 'images/rangga.webp' },
    { name: 'Siti Mutmainah', department: 'Sales', photo: 'images/siti.webp' },
    { name: 'Suchy Yuliandari', department: 'Sales', photo: 'images/suci.webp' },
    { name: 'Deden Tantan', department: 'Housekeeping', photo: 'images/deden.webp' },
    { name: 'Devian Aryaputra', department: 'Housekeeping', photo: 'images/devian.webp' },
    { name: 'Cipto', department: 'Housekeeping', photo: 'images/cipto.webp' },
    { name: 'Riska', department: 'Housekeeping', photo: 'images/riska.webp' },
    { name: 'Zulfadli', department: 'Housekeeping', photo: 'images/zul.webp' },
    { name: 'Indra', department: 'Housekeeping', photo: 'images/indra.webp' },
    { name: 'Riska', department: 'Housekeeping', photo: 'images/riska.webp' },
    { name: 'Yuli', department: 'Housekeeping' },
    { name: 'Mega', department: 'Housekeeping' },
    { name: 'Moh Nurus', department: 'FB Product', photo: 'images/nurus.webp' },
    { name: 'Azif Hasanudin', department: 'FB Product', photo: 'images/azif.webp' },
    { name: 'Jejen Sopian', department: 'FB Product', photo: 'images/jejen.webp' },
    { name: 'Gatan Gintana', department: 'FB Product', photo: 'images/gatan.webp' },
    { name: 'Amir', department: 'FB Product', photo: 'images/amir.webp' },
    { name: 'Danu', department: 'FB Product' },
    { name: 'Delima', department: 'FB Product' },
    { name: 'Zahro', department: 'FB Product' },
    { name: 'Tia', department: 'FB Product' },
    { name: 'Putri', department: 'FB Product' },
    { name: 'Nasila', department: 'FB Product' },
    { name: 'Aep Saepul Bahri', department: 'FB Service', photo: 'images/aep.png' },
    { name: 'Muhamad Fadjri', department: 'FB Service', photo: 'images/fajri.webp' },
    { name: 'Ilham Phaturohman', department: 'FB Service', photo: 'images/ilham.webp' },
    { name: 'Citra', department: 'FB Service' },
    { name: 'Sahra', department: 'FB Service' },
    { name: 'Nadia', department: 'FB Service' },
    { name: 'Herti', department: 'FB Service' },
    { name: 'Chaerul Ahmadi', department: 'Engineering', photo: 'images/chaerul.webp' },
    { name: 'Setio Wijianto', department: 'Engineering', photo: 'images/setio.webp' },
    { name: 'Di Igga Abimayu', department: 'Engineering', photo: 'images/diga.webp' },
    { name: 'Raka Apriansyah ', department: 'Engineering' },
    { name: 'Raka Apriansyah ', department: 'Engineering' },
    { name: 'Denis', department: 'Engineering' },
    { name: 'Asep', department: 'Security' },
    { name: 'Rahmat', department: 'Security' },
    { name: 'Fadli', department: 'Security' },
    { name: 'Nurdin', department: 'Security' },
    { name: 'Timan', department: 'Security' },
    { name: 'Akhlitma Dessy', department: 'Front Office', photo: 'images/desi.webp'  },
    { name: 'Ridwan', department: 'Front Office', photo: 'images/ridwan.webp' },
    { name: 'Arji', department: 'Front Office', photo: 'images/arji.webp' },
    { name: 'Regita', department: 'Front Office', photo: 'images/regita.webp' },
    { name: 'Yoga', department: 'Front Office' },
    { name: 'Nadia', department: 'Front Office' },
    { name: 'Eva', department: 'Front Office' },
];

let attendanceData = []; // Declare the attendanceData variable

function loadNames() {
    const nameDropdown = document.getElementById("name");
    nameDropdown.innerHTML = "<option value='' disabled selected>Pilih atau cari nama</option>";

    const groupedEmployees = employeeData.reduce((groups, employee) => {
        if (!groups[employee.department]) groups[employee.department] = [];
        groups[employee.department].push(employee);
        return groups;
    }, {});

    for (const department in groupedEmployees) {
        groupedEmployees[department].forEach((employee, index) => {
            const option = document.createElement("option");
            option.value = employee.name;
            option.textContent = employee.name;
            if (index === 0) option.classList.add("option-bold");
            nameDropdown.appendChild(option);
        });
    }
}

function updateDepartment() {
    const selectedName = document.getElementById("name").value;
    const departmentInput = document.getElementById("department");
    const selectedEmployee = employeeData.find(employee => employee.name === selectedName);
    if (selectedEmployee) departmentInput.value = selectedEmployee.department;
    const downloadButton = document.getElementById("download");
        if (selectedEmployee.department === "HRD") {
            downloadButton.style.display = "block";
        } else {
            downloadButton.style.display = "none";
        }
}

function toggleShiftDropdown() {
    const department = document.getElementById("department").value;
    const shiftContainer = document.getElementById("shift-container");
    const departmentsWithShift = ['Front Office', 'FB Service', 'FB Product', 'Engineering', 'Housekeeping'];
    shiftContainer.style.display = departmentsWithShift.includes(department) ? "block" : "none";
}

function updatePhoto() {
    const selectedName = document.getElementById("name").value;
    const selectedEmployee = employeeData.find(employee => employee.name === selectedName);
    const photoContainer = document.getElementById("employee-photo");

    if (selectedEmployee && selectedEmployee.photo) {
        photoContainer.src = selectedEmployee.photo;
        photoContainer.style.display = "inline-block"; // Show the photo
    } else {
        photoContainer.style.display = "none"; // Hide the photo if not available
    }
}

document.getElementById('attendance-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const shift = document.getElementById('shift').value || "N/A";
    const date = new Date().toLocaleDateString();
    const alreadyMarked = attendanceData.some(entry => entry.name === name && entry.date === date);

    if (alreadyMarked) {
        showModal("Anda sudah ambil makan hari ini. Cukup ambil makan sekali sehari.");
        return;
    }

    attendanceData.push({ date, name, department, shift, status: "Sudah Makan" });
    showModal("Selamat makan!");
    document.getElementById('attendance-form').reset();
    toggleShiftDropdown();
    updatePhoto();
});

function showModal(message) {
    const modal = document.getElementById('modal-notification');
    document.getElementById('modal-message').innerText = message;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal-notification').style.display = "none";
}

// Menutup modal jika klik di luar konten modal
window.onclick = function(event) {
    const modal = document.getElementById('modal-notification');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function downloadSpreadsheet() {
    if (attendanceData.length === 0) {
        alert("Tidak ada data untuk diunduh.");
        return;
    }

    let csvContent = "Tanggal,Nama,Departemen,Shift,Status\n";
    attendanceData.forEach(row => {
        csvContent += `${row.date},${row.name},${row.department},${row.shift},${row.status}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "data_absensi.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

loadNames();
