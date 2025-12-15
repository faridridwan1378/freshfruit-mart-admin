// DATA PRODUK — BISA DIEDIT DI ADMIN
let produk = JSON.parse(localStorage.getItem('freshfruit_produk')) || [
  {id:1, nama:"Jeruk Medan Premium", harga:25000, satuan:"kg", stok:50, foto:"https://images.unsplash.com/photo-1547514701-42782101795e?w=600"},
  {id:2, nama:"Mangga Harum Manis", harga:35000, satuan:"kg", stok:30, foto:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=600"},
  {id:3, nama:"Alpukat Mentega", harga:45000, satuan:"kg", stok:20, foto:"https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=600"},
  {id:4, nama:"Semangka Merah", harga:18000, satuan:"kg", stok:40, foto:"https://images.unsplash.com/photo-1571576237785-5c8f2e5d6639?w=600"},
  {id:5, nama:"Pisang Cavendish", harga:15000, satuan:"sisir", stok:80, foto:"https://images.unsplash.com/photo-1571771894821-ce9b9c5bcca9?w=600"}
];

function simpanProduk() {
  localStorage.setItem('freshfruit_produk', JSON.stringify(produk));
}