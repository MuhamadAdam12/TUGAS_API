const mahasiswaNim = '2012006274';
const updateData = {
    nama: 'Sebastian Giovinco',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Cibogo Utara'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));