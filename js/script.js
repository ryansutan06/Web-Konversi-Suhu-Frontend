let isReversed = false;

// Tombol Konversi
function konversi() {
    const input = parseFloat(document.getElementById('suhu').value);
    const hasilInput = document.getElementById('hasil-suhu');
    const penjelasan = document.getElementById('detail-suhu');
    const labelInput = document.getElementById('input-suhu');
    const labelHasil = document.getElementById('label-hasil');

    // Jika nilai input kosong
    if (isNaN(input)) {
        hasilInput.value = "";
        penjelasan.value = "";
        alert("Masukkan nilai suhu terlebih dahulu!");
        return;
    }

    let c, f, detailText = "";

    if (!isReversed) {
        // Celsius ke Fahrenheit
        c = input;
        f = (c * 9 / 5) + 32;
        hasilInput.value = f.toFixed(2);
        labelHasil.innerText = "Fahrenheit (°F):";
        detailText =
        `Mengkonversi ${c}°C ke Fahrenheit\n` +
        `\n` +
        `Langkah - langkah kalkulasi:\n` +
        `S(°F) = (S(°C) × 9/5) + 32\n` +
        `S(°F) = (${c} × 9/5) + 32\n` +
        `S(°F) = ${f.toFixed(2)}\n` +
        `\n` +
        `Jadi ${c}°C = ${f.toFixed(2)}°F`;
    } else {
        // Fahrenheit ke Celsius
        f = input;
        c = (f - 32) * 5 / 9;
        hasilInput.value = c.toFixed(2);
        labelHasil.innerText = "Celsius (°C):";
        detailText =
        `Mengkonversi ${f}°F ke Celcius\n` +
        `\n` +
        `Langkah - langkah kalkulasi:\n` +
        `S(°C) = (S(°F) - 32) × 5/9\n` +
        `S(°C) = (${f} - 32) × 5/9\n` +
        `S(°C) = ${c.toFixed(2)}\n` +
        `\n` +
        `Jadi ${f}°F = ${c.toFixed(2)}°C`;
    }

    penjelasan.value = detailText;
}

// Tombol Reset
function resetForm() {
    const input = document.getElementById('suhu').value;
    if (input === "") {
        alert("Tidak ada nilai yang perlu dihapus. Silakan masukkan nilai suhu terlebih dahulu!");
        return;
    }
    // Pop-up tombol reset validasi
    const konfirmasi = confirm("Apakah anda yakin ingin menghapus?");
    if (konfirmasi) {
        document.getElementById('suhu').value = "";
        document.getElementById('hasil-suhu').value = "";
        document.getElementById('detail-suhu').value = "";
    }
}

// Tombol Reserve
function reverse() {
  isReversed = !isReversed;

  const inputField = document.getElementById('suhu');
  const outputField = document.getElementById('hasil-suhu');
  const labelInput = document.getElementById('input-suhu');
  const labelHasil = document.getElementById('label-hasil');

  // Tukar nilai input dan hasil
  inputField.value = outputField.value;

  // Perbarui label sesuai arah konversi
  labelInput.innerText = isReversed
    ? "Masukkan Suhu (°F):"
    : "Masukkan Suhu (°C):";

  labelHasil.innerText = isReversed
    ? "Celsius (°C):"
    : "Fahrenheit (°F):";

  // Jalankan konversi ulang
  konversi();
}

// Hubungkan tombol button
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons[0].addEventListener("click", konversi);
  buttons[1].addEventListener("click", resetForm);
  buttons[2].addEventListener("click", reverse);
});
