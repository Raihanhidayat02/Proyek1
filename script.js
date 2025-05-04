// Kamu bisa menambahkan fungsionalitas JavaScript di sini sesuai kebutuhan

// Contoh: Efek scroll halus untuk tombol "Lihat Produk"
document.querySelector('a[href="#produk"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#produk').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Contoh: Fungsionalitas keranjang atau fitur interaktif lainnya bisa ditambahkan di sini.
  