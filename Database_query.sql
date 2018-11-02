-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 02 Nov 2018 pada 01.02
-- Versi server: 10.1.36-MariaDB
-- Versi PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spr_tik`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `akun`
--

CREATE TABLE `akun` (
  `username` varchar(15) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `level` varchar(10) DEFAULT NULL,
  `kd_role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `akun`
--

INSERT INTO `akun` (`username`, `password`, `level`, `kd_role`) VALUES
('adahuys', '123456', 'Mahasiswa', '4616010017'),
('dylaya', '123456', 'Dosen', 'D0001'),
('eruvatar', '123456', 'Mahasiswa', '4616010053'),
('ujanju', '123456', 'Mahasiswa', '4616010043');

-- --------------------------------------------------------

--
-- Struktur dari tabel `dosen`
--

CREATE TABLE `dosen` (
  `NIP` varchar(15) NOT NULL,
  `nm_dosen` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dosen`
--

INSERT INTO `dosen` (`NIP`, `nm_dosen`) VALUES
('D0001', 'Mauldy Laya, S.Kom. M.Kom'),
('D0002', 'Dewi Yanti Liliana, S.Kom'),
('D0003', 'Drs. Refirman, M.Kom'),
('D0004', 'Nur Fauzi Soelaiman, ST. '),
('D0005', 'Mera Kartika Delimayanti,'),
('D0006', 'Masnadi, S.Kom. M.Kom'),
('D0007', 'Iwan Sonjaya, ST MT'),
('D0008', 'Indri Neforawati, ST. MT'),
('D0009', 'Drs. Achmad Bachris Sati,'),
('D0010', 'Drs. Agus Setiawan, M.Kom'),
('D0011', 'Drs. Abdul Aziz, MMSI'),
('D0012', 'Shinta Oktaviana R, S.Kom, M.Kom'),
('D0013', 'Dr. Eng. Muhammad Rahmat Widyanto, S.Kom, M.Eng'),
('D0014', 'Risna Sari, S.Kom, M.Ti'),
('D0015', 'Yoyok Sabar Waluyo, SS. M.Hum'),
('D0016', 'FITRIA NUGRAHANI, S.Pd, M.Si'),
('D0017', ' Dra. Lenny Brida, M.Si'),
('D0018', 'Drs. Cecep Sulaeman, ST'),
('D0019', 'Dra. Yogi Widiawati, M.Hum'),
('D0020', 'Drs. Syupriadi N. ST, M.Kom');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwal`
--

CREATE TABLE `jadwal` (
  `kd_jadwal` varchar(10) NOT NULL,
  `nm_jadwal` text,
  `hari` varchar(10) DEFAULT NULL,
  `tgl` date NOT NULL,
  `jam_awal` time DEFAULT NULL,
  `jam_akhir` time NOT NULL,
  `NIP` varchar(15) DEFAULT NULL,
  `kd_ruang` varchar(10) DEFAULT NULL,
  `kd_kelas` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `jadwal`
--

INSERT INTO `jadwal` (`kd_jadwal`, `nm_jadwal`, `hari`, `tgl`, `jam_awal`, `jam_akhir`, `NIP`, `kd_ruang`, `kd_kelas`) VALUES
('JM1A01', 'PENGANTAR MULTIMEDIA', 'JUMAT', '2018-10-19', '07:30:00', '11:05:00', 'D0008', 'AA301', 'TI1A'),
('JM1B01', 'SISTEM OPERASI', 'JUMAT', '2018-10-26', '07:30:00', '13:35:00', 'D0001', 'AA301', 'TI1B'),
('JM1TMD1', 'PENGANTAR  MULTIMEDIA', 'JUMAT', '2018-11-02', '07:30:00', '11:05:00', 'D0013', 'AA204', 'TMD1'),
('JM1TMD2', 'SISTEM OPERASI', 'JUMAT', '2018-11-09', '13:35:00', '19:35:00', 'D0019', 'AA304', 'TMD1'),
('JM1TMJ1', 'ALGORITMA DAN PEMOGRAMAN', 'JUMAT', '2018-11-16', '07:30:00', '13:35:00', 'D0015', 'AA301', 'TMJ1'),
('JM5TMJ1', 'FORENSIK DIGITAL', 'JUMAT', '2018-11-23', '07:30:00', '11:05:00', 'D0017', 'AA305', 'TMJ5'),
('KM1A01', 'MATEMATIKA DISKRIT', 'KAMIS', '2018-10-18', '07:30:00', '11:05:00', 'D0005', 'AA301', 'TI1A'),
('KM1A02', 'PENGANTAR KEWARGANEGARAAN', 'KAMIS', '2018-10-25', '13:35:00', '11:25:00', 'D0006', 'AA301', 'TI1A'),
('KM1A03', 'PENDIDIKAN AGAMA ISLAM DALAM TIK', 'KAMIS', '2018-11-01', '14:25:00', '17:25:00', 'D0007', 'AA301', 'TI1A'),
('KM1B01', 'PENDIDIKAN AGAMA ISLAM DALAM TIK', 'KAMIS', '2018-11-08', '07:30:00', '11:25:00', 'D0007', 'AA303', 'TI1A'),
('KM1B02', 'MATEMATIKA DISKRIT', 'KAMIS', '2018-11-15', '15:45:00', '17:25:00', 'D0005', 'AA303', 'TI1B'),
('KM1TMD1', 'PENDIDIKAN KEWARGANEGARAAN', 'KAMIS', '2018-12-06', '07:30:00', '10:00:00', 'D0018', 'AA302', 'TMD1'),
('KM3A02', 'PEMOGRAMAN VISUAL', 'KAMIS', '2018-11-22', '13:35:00', '19:35:00', 'D0009', 'AA302', 'TI3A'),
('KM3B02', 'BASIS DATA', 'KAMIS', '2018-11-29', '13:35:00', '19:35:00', 'D0010', 'AA305', 'TI3B'),
('KM3TMD1', 'GAMBAR DIGITAL', 'KAMIS', '2018-12-13', '07:30:00', '11:05:00', 'D0002', 'AA204', 'TMD3'),
('KM3TMD2', 'PEINSIP DAN PERANCANGAN ANIMASI', 'KAMIS', '2018-12-20', '15:45:00', '19:35:00', 'D0003', 'AA304', 'TMD3'),
('RB1B01', 'PENGANTAR MULTIMEDIA', 'RABU', '2018-10-17', '07:30:00', '13:35:00', 'D0008', 'AA302', 'TI1B'),
('RB1B02', 'PENDIDIKAN KEWARGANEGARAAN', 'RABU', '2018-10-24', '13:35:00', '17:25:00', 'D0006', 'AA302', 'TI1A'),
('RB1TMD1', 'ALGORITMA DAN PEMOGRAMAN', 'RABU', '2018-10-31', '07:30:00', '11:05:00', 'D0015', 'AA303', 'TMD1'),
('RB1TMJ1', 'PENGANTAR MULTIMEDIA', 'RABU', '2018-11-07', '07:30:00', '11:55:00', 'D0013', 'AA301', 'TMJ1'),
('RB1TMJ2', 'BAHASA INGGRIS UNTUK TIK 1', 'RABU', '2018-11-14', '13:35:00', '17:25:00', 'D0014', 'AA303', 'TMJ1'),
('RB3TMD1', 'PENGEMBANGAN DAN PERANCANGAN GAME', 'RABU', '2018-11-21', '12:45:00', '15:15:00', 'D0001', 'AA205', 'TMD3'),
('SL1A01', 'ALGORITMA DAN PEMOGRAMAN', 'SELASA', '2018-10-16', '07:30:00', '12:45:00', 'D0003', 'LABGSG4', 'TI1A'),
('SL1A02', 'PENGANTAR TEKNOLOGI DAN INFORMASI', 'SELASA', '2018-10-23', '13:35:00', '17:25:00', 'D0004', 'AA301', 'TI1A'),
('SL1B01', 'ALGORITMA DAN PEMOGRAMAN', 'SELASA', '2018-10-30', '07:30:00', '12:45:00', 'D0003', 'AA301', 'TI1B'),
('SL1B02', 'BAHASA INGGRIS UNTUK TIK 1', 'SELASA', '2018-10-23', '13:35:00', '17:25:00', 'D0002', 'AA301', 'TI1B'),
('SL1TMJ1', 'BAHASA INGGRIS UNTUK TIK 1', 'SELASA', '2018-10-30', '13:35:00', '17:25:00', 'D0012', 'AA303', 'TMJ1'),
('SL3TMD1', 'DKV LANJUT', 'SELASA', '2018-10-30', '07:30:00', '13:35:00', 'D0013', 'AA204', 'TMD3'),
('SL3TMD2', 'ALJABAR LINEAR', 'SELASA', '2018-10-23', '15:45:00', '19:35:00', 'D0009', 'AA304', 'TMD3'),
('SN1A01', 'SISTEM OPERASI', 'SENIN', '2018-10-22', '07:30:00', '13:35:00', 'D0001', 'AA301', 'TI1A'),
('SN1A02', 'BAHASA INGGRIS UNTUK TIK 1', 'SENIN', '2018-10-22', '13:35:00', '17:25:00', 'D0002', 'AA301', 'TI1A'),
('SN1B01', 'PENGANTAR TEKNOLOGI DAN INFORMASI', 'SENIN', '2018-10-22', '13:35:00', '17:25:00', 'D0004', 'AA302', 'TI1B'),
('SN1TMD1', 'BAHASA INGGRIS UNTUK TIK 1', 'SENIN', '2018-10-22', '10:15:00', '14:25:00', 'D0012', 'AA303', 'TMD1'),
('SN1TMJ1', 'PENGANTAR MULTIMEDIA', 'SENIN', '2018-10-29', '07:30:00', '13:35:00', 'D0011', 'AA302', 'TMJ1'),
('SN3TMJ1', 'REKAYASA PERANGKAT LUNAK', 'SENIN', '2018-10-22', '15:45:00', '18:15:00', 'D0016', 'AA303', 'TMJ3'),
('SN5TMJ1', 'PEMOGRAMAN EMBEDED', 'SENIN', '2018-10-22', '07:30:00', '13:35:00', 'D0017', 'AA205', 'TMJ5');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `kd_kelas` varchar(10) NOT NULL,
  `nm_kelas` text,
  `semester` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`kd_kelas`, `nm_kelas`, `semester`) VALUES
('TI1A', 'Teknik Informatika', '1'),
('TI1B', 'Teknik Informatika', '1'),
('TI3A', 'Teknik Informatika', '3'),
('TI3B', 'Teknik Informatika', '3'),
('TI5A', 'Teknik Informatika', '5'),
('TI5B', 'Teknik Informatika', '5'),
('TI7', 'Teknik Informatika', '7'),
('TMD1', 'Teknik Multimedia dan Digital', '1'),
('TMD3', 'Teknik Multimedia dan Digital', '3'),
('TMD5', 'Teknik Multimedia dan Digital', '5'),
('TMD7', 'Teknik Multimedia dan Digital', '7'),
('TMJ1', 'Teknik Multimedia dan Jaringa', '1'),
('TMJ3', 'Teknik Multimedia dan Jaringa', '3'),
('TMJ5', 'Teknik Multimedia dan Jaringa', '5'),
('TMJ7', 'Teknik Multimedia dan Jaringa', '7');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `NIM` varchar(15) NOT NULL,
  `nm_mhs` varchar(25) DEFAULT NULL,
  `kd_kelas` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`NIM`, `nm_mhs`, `kd_kelas`) VALUES
('4616010002', 'Akram Rahadi R', 'TI 5B'),
('4616010004', 'Atika Purnama Sari', 'TI 5B'),
('4616010006', 'Edit Sanrio Putra', 'TI 5B'),
('4616010009', 'Muhammad Fatih Abdul Azis', 'TI 5B'),
('4616010011', 'Bella Syafira Hanum S', 'TI 5B'),
('4616010013', 'IIn Firlyana', 'TI 5B'),
('4616010015', 'Nisya Yunita', 'TI 5B'),
('4616010017', 'Shiddiq Asy Syuhada', 'TI 5B'),
('4616010019', 'Zuniar Fitra Hidaya', 'TI 5B'),
('4616010021', 'Dilla Savira', 'TI 5B'),
('4616010023', 'Muhammad Aryo Mujahid', 'TI 5B'),
('4616010027', 'Rifdah Neta', 'TI 5B'),
('4616010031', 'Yohanes Alexandro M', 'TI 5B'),
('4616010033', 'Abdul Wahid', 'TI 5B'),
('4616010035', 'Diana Ambarwati F', 'TI 5B'),
('4616010037', 'Fiqih', 'TI 5B'),
('4616010039', 'Harry Dwi Fitra A', 'TI 5B'),
('4616010041', 'Intan Yoshana', 'TI 5B'),
('4616010043', 'Janu Widyatana', 'TI 5B'),
('4616010045', 'Mohammad Yasin', 'TI 5B'),
('4616010047', 'Muhammad Amril S', 'TI 5B'),
('4616010051', 'Muhammad Rizky Pratama S', 'TI 5B'),
('4616010053', 'Naufal Mahfudz Ismail', 'TI 5B'),
('4616010055', 'Sheila Giovanna Namora', 'TI 5B'),
('4616010057', 'Tyas Ridha Indritami', 'TI 5B'),
('4616010059', 'Nadella Amelia', 'TI 5B'),
('4616010065', 'Azam Mukhtar', 'TI 5B');

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjaman`
--

CREATE TABLE `peminjaman` (
  `kd_peminjaman` int(5) NOT NULL,
  `kd_role` varchar(15) DEFAULT NULL,
  `kd_ruang` varchar(10) DEFAULT NULL,
  `jam_pinjam` time DEFAULT NULL,
  `jam_selesai` time DEFAULT NULL,
  `tgl` date NOT NULL,
  `tujuan` text NOT NULL,
  `hari` varchar(50) NOT NULL,
  `nm_jadwal` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `peminjaman`
--

INSERT INTO `peminjaman` (`kd_peminjaman`, `kd_role`, `kd_ruang`, `jam_pinjam`, `jam_selesai`, `tgl`, `tujuan`, `hari`, `nm_jadwal`) VALUES
(1, '4616010053', 'AA301', '00:00:00', '00:00:00', '2018-10-26', 'Workshop kotlin', 'Jumat', 'Workshop'),
(3, '4616010053', 'AA301', '07:30:00', '11:00:00', '2018-10-26', 'Workshop kotlin', 'Jumat', 'Workshop'),
(4, '4616010053', 'AA204', '09:00:00', '13:00:00', '0000-00-00', 'Workshop Kotlin', 'Jumat', 'Workshop'),
(5, '4616010053', 'AA204', '09:00:00', '13:00:00', '0000-00-00', 'Workshop Kotlin', 'Jumat', 'Workshop'),
(11, '4616010053', 'AA305', '08:00:00', '13:00:00', '2018-11-13', 'Workshop Kotlin', 'Selasa', 'Workshop'),
(12, '4616010053', 'AA303', '08:00:00', '12:00:00', '2019-01-03', 'Workshop di kotlin dan flutter', 'Kamis', 'Workshop'),
(14, '4616010053', 'AA305', '07:00:00', '13:00:00', '2019-01-03', 'Workshop di kotlin dan flutter', 'Kamis', 'Workshop'),
(15, '4616010053', 'AA304', '13:40:00', '17:41:00', '2018-12-03', 'Workshop di AA', 'Senin', 'Workshop'),
(16, '4616010053', 'AA302', '05:04:00', '11:00:00', '2018-11-02', 'Workshop di kotlin dan flutter', 'Jumat', 'Workshop'),
(17, '4616010017', 'AA302', '08:08:00', '12:08:00', '2019-03-03', 'Belajar bareng', 'Minggu', 'Makan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ruangan`
--

CREATE TABLE `ruangan` (
  `kd_ruang` varchar(10) NOT NULL,
  `nm_ruang` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ruangan`
--

INSERT INTO `ruangan` (`kd_ruang`, `nm_ruang`) VALUES
('AA204', 'Gedung AA lantai 2 ruang 204'),
('AA205', 'Gedung AA lantai 2 ruang 205'),
('AA301', 'Gedung AA lantai 3 ruang 301'),
('AA302', 'Gedung AA lantai 3 ruang 302'),
('AA303', 'Gedung AA lantai 3 ruang 303'),
('AA304', 'Gedung AA lantai 3 ruang 304'),
('AA305', 'Gedung AA lantai 3 ruang 305');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `akun`
--
ALTER TABLE `akun`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `kd_role` (`kd_role`);

--
-- Indeks untuk tabel `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`NIP`);

--
-- Indeks untuk tabel `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`kd_jadwal`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`kd_kelas`);

--
-- Indeks untuk tabel `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`NIM`);

--
-- Indeks untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`kd_peminjaman`);

--
-- Indeks untuk tabel `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`kd_ruang`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `kd_peminjaman` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
