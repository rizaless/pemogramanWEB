document.getElementById('tambah-data').addEventListener('click', function() {
    const inputData = document.getElementById('input-data');
    const isiData = inputData.value.trim();

    if (isiData) {
        const li = document.createElement('li');
        li.textContent = isiData;

        const hapusData = document.createElement('button');
        hapusData.textContent = 'Hapus';
        hapusData.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(hapusData);
        document.getElementById('list-data').appendChild(li);
        inputData.value = ''; // Reset input
    } else {
        alert('Tugas tidak boleh kosong!');
    }
});
