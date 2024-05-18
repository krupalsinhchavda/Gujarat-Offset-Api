-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2024 at 12:15 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `printingcompanydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `chemical`
--

CREATE TABLE `chemical` (
  `id` int(11) NOT NULL,
  `chemical_type` varchar(100) DEFAULT NULL,
  `product` varchar(100) DEFAULT NULL,
  `supplier_name` varchar(100) DEFAULT NULL,
  `chemical_name` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `rate` decimal(10,2) DEFAULT NULL,
  `used_for` varchar(255) DEFAULT NULL,
  `packaging_details` text DEFAULT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `delivery_address` text DEFAULT NULL,
  `contact_person` varchar(255) DEFAULT NULL,
  `opening_hours` varchar(100) DEFAULT NULL,
  `multiple_address` tinyint(1) DEFAULT 0,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `finishingmaterial`
--

CREATE TABLE `finishingmaterial` (
  `id` int(11) NOT NULL,
  `supplier` varchar(100) DEFAULT NULL,
  `product` varchar(100) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `packing_rate` decimal(10,2) DEFAULT NULL,
  `packaging_details` text DEFAULT NULL,
  `glue` tinyint(1) DEFAULT 0,
  `rubber` tinyint(1) DEFAULT 0,
  `stitching_pin` tinyint(1) DEFAULT 0,
  `tape` tinyint(1) DEFAULT 0,
  `tape_roll` tinyint(1) DEFAULT 0,
  `thread` tinyint(1) DEFAULT 0,
  `icard_punch` tinyint(1) DEFAULT 0,
  `staple` tinyint(1) DEFAULT 0,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `flexmaterial`
--

CREATE TABLE `flexmaterial` (
  `id` int(11) NOT NULL,
  `material_type` varchar(100) DEFAULT NULL,
  `gsm` int(11) DEFAULT NULL,
  `roll_width` decimal(10,2) DEFAULT NULL,
  `packaging_details` text DEFAULT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ink`
--

CREATE TABLE `ink` (
  `id` int(11) NOT NULL,
  `brand_name` varchar(100) DEFAULT NULL,
  `supplier_name` varchar(100) DEFAULT NULL,
  `no` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `packaging_details` text DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `rate` decimal(10,2) DEFAULT NULL,
  `special_ink_job` text DEFAULT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `masterdata`
--

CREATE TABLE `masterdata` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paper`
--

CREATE TABLE `paper` (
  `id` int(11) NOT NULL,
  `size` varchar(50) DEFAULT NULL,
  `gsm` int(11) DEFAULT NULL,
  `make` varchar(100) DEFAULT NULL,
  `mill` varchar(100) DEFAULT NULL,
  `brand_name` varchar(100) DEFAULT NULL,
  `packaging_details` text DEFAULT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `platetype`
--

CREATE TABLE `platetype` (
  `id` int(11) NOT NULL,
  `type` enum('CTP','PS') NOT NULL,
  `createdOn` datetime DEFAULT current_timestamp(),
  `modifiedOn` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chemical`
--
ALTER TABLE `chemical`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finishingmaterial`
--
ALTER TABLE `finishingmaterial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flexmaterial`
--
ALTER TABLE `flexmaterial`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ink`
--
ALTER TABLE `ink`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `masterdata`
--
ALTER TABLE `masterdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paper`
--
ALTER TABLE `paper`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `platetype`
--
ALTER TABLE `platetype`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chemical`
--
ALTER TABLE `chemical`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `finishingmaterial`
--
ALTER TABLE `finishingmaterial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flexmaterial`
--
ALTER TABLE `flexmaterial`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ink`
--
ALTER TABLE `ink`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `masterdata`
--
ALTER TABLE `masterdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paper`
--
ALTER TABLE `paper`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `platetype`
--
ALTER TABLE `platetype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
