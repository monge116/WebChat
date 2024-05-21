-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-05-2024 a las 12:13:51
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_usuarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `descripción_larga` text NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `genero` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `apellido`, `alias`, `descripción_larga`, `correo`, `contraseña`, `fecha_nacimiento`, `genero`) VALUES
(1, 'Gerardo', 'Matias', 'admin-sistema', 'Soy ingeniero en sistemas informaticos con muchos años de experiencia en el sector', 'gerarduco77@gmail.com', '6b401e74138e9fefd56a33381b39bf18', '1970-07-20', 'H'),
(2, 'Jorge', 'Garcia', 'jorgee14', 'Escritor de poesia amateur, en ocasiones tambien canto opera', 'superjorge14@gmail.com', '6b401e74138e9fefd56a33381b39bf18', '2005-10-14', 'H'),
(3, 'Virginia', 'Ramos', 'virgy_30', 'Asesora juridica', 'virginiaramos@gmail.com', '6b401e74138e9fefd56a33381b39bf18', '1998-02-11', 'M'),
(4, 'Yolanda', 'Corals', 'yo1anda', 'Me gusta la moda y conocer mundo', 'yoli113@gmail.com', 'ffacb18479e7bc21709d835a880396b5', '2001-12-22', 'M'),
(5, 'Josep', 'Latorre', 'ep_latorre', 'Vive y deja vivir, acuna matata', 'latorrejosep@gmail.com', '28b300aa954eaad380336c768bedb6d8', '1972-01-19', 'H');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`),
  ADD UNIQUE KEY `alias` (`alias`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
