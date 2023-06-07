-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-06-2023 a las 08:40:07
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `healthtrack`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil_usuario`
--

CREATE TABLE `perfil_usuario` (
  `id_perfil` int(11) NOT NULL,
  `preferencias` varchar(80) NOT NULL,
  `metas_de_salud` varchar(90) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `perfil_usuario`
--

INSERT INTO `perfil_usuario` (`id_perfil`, `preferencias`, `metas_de_salud`, `id_usuario`) VALUES
(1, 'Prefiero no ir al gym, soy una persona que le gusta hacer ejercico en su casa o ', 'Ingrese al gym esta semana y quieor cambiar mi vida por eso ingrese a esta pagin', 26),
(5, 'me gusta probartu boca', 'me vuelvo loco cuando dices ', 71),
(8, 'prefiero no hacer tanto cardio', 'ya que estoy en volumen jj ademas que me aburre', 72);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimiento_salud`
--

CREATE TABLE `seguimiento_salud` (
  `id_seguimiento` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `alimentos` varchar(60) NOT NULL,
  `actividad_fisica` varchar(60) NOT NULL,
  `frecuencia_cardiaca` int(10) NOT NULL,
  `peso` float NOT NULL,
  `presion_arterial` int(10) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `seguimiento_salud`
--

INSERT INTO `seguimiento_salud` (`id_seguimiento`, `fecha`, `alimentos`, `actividad_fisica`, `frecuencia_cardiaca`, `peso`, `presion_arterial`, `id_usuario`) VALUES
(25, '2023-05-31', 'Cereales y derivados, azúcar y dulces', 'Alta', 90, 90, 90, 66),
(26, '2023-06-13', 'Frutas', 'Alta', 89, 89, 89, 68),
(27, '2023-06-05', 'Patatas, legumbres, frutos secos', 'Baja', 99, 99, 99, 68),
(28, '2023-05-31', 'Patatas, legumbres, frutos secos', 'Baja', 90, 90, 90, 67),
(29, '2023-06-06', 'Carnes, pescados y huevos', 'Moderada', 99, 99, 99, 66),
(30, '2023-06-11', 'Carnes, pescados y huevos', 'Baja', 89, 89, 89, 69),
(31, '2023-05-30', 'Patatas, legumbres, frutos secos', 'Baja', 98, 98, 98, 68),
(32, '2023-05-29', 'Carnes, pescados y huevos', 'Baja', 89, 98, 98, 67),
(33, '2023-05-31', 'Patatas, legumbres, frutos secos', 'Moderada', 88, 90, 77, 70),
(34, '2023-05-31', 'Verduras y Hortalizas', 'Moderada', 87, 90, 98, 70),
(35, '2023-05-31', 'Carnes, pescados y huevos', 'Baja', 88, 77, 66, 70),
(36, '2023-05-31', 'Leche y derivados', 'Actividad fisica', 66, 77, 64, 71),
(37, '2023-06-05', 'Verduras y Hortalizas', 'Moderada', 67, 98, 88, 71),
(38, '2023-05-02', 'Grasas, aceite y mantequilla', 'Alta', 100, 100, 90, 72),
(39, '2002-06-01', 'Patatas, legumbres, frutos secos', 'Moderada', 100, 100, 100, 72),
(41, '2023-06-01', 'Leche y derivados', 'Moderada', 87, 87, 87, 70),
(42, '2023-06-19', 'Patatas, legumbres, frutos secos', 'Moderada', 99, 88, 66, 70),
(43, '2023-06-19', 'Verduras y Hortalizas', 'Baja', 88, 90, 88, 70),
(44, '2023-06-01', 'Patatas, legumbres, frutos secos', 'Baja', 99, 77, 55, 70),
(45, '2023-06-18', 'Carnes, pescados y huevos', 'Moderada', 88, 77, 66, 70),
(46, '2023-06-02', 'Carnes, pescados y huevos', 'Baja', 76, 90, 88, 72);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `contrasena` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `apellido`, `correo`, `contrasena`) VALUES
(26, 'Raul', 'Afanador', 'raul@gmail.com', '$2b$12$k49M5XLRm8GOH3t8cKT8HuQAErEvEZurRESImqg9SraGVX9O1rZ9G'),
(66, 'Juan sebastian ', 'Afanador Mora', 'sebastian321lol@gmail.com', '$2b$12$Euk5TcXD3NPAt4osnA6rjO/n3Pi734zjo6lyATb7sU6kqWCH0fBYW'),
(67, 'Juan', 'bossa', 'botsa@gmail.com', '$2b$12$07zHuZUEcJFE4LWPs1rBXuBKxROqoSBZbPU/e53/XQPJj4X5oBpnq'),
(68, 'perla', 'maria', 'perla@gmail.com', '$2b$12$eZoz46TZSI10CHSco7x/geEgAwmvUt3M.qtGczhgsgfeljJ1VbeTG'),
(69, 'betoben', 'afanador', 'beto321@gmail.com', '$2b$12$f170Vc5Nt3JMcbxIzGkq.uAb6yXSHY2pboBpZf7caNEVWFfKCEeZC'),
(70, 'prueba', 'jimenez', 'prueba1@gmail.com', '$2b$12$mOwX5.z0RLbuTrfUerq9vOism3FhEA7dK/Or9TEHnEVG.Qv0oziqy'),
(71, 'juan sebastian ', 'afanador mora', 'juan@gmail.com', '$2b$12$OEjj0f90Xr8bVBGT.PKm7.cmTPQpMs1F/xdM2jD2XBhnF6tmB0VSK'),
(72, 'admin', 'afanador', 'admin@gmail.com', '$2b$12$BCVMieoulVPz2bvBBkrr.e3CVjbb6K1vbVFhgs8sP5l7xuyi/ibeO'),
(88, 'admin', 'afanador', 'administrador@hotmail.com', '$2b$12$0uz6j4gQ4oIP4YGvz5D8CuYD12Q5wU1/kuUoUDUo3/emeremkZf7C');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  ADD PRIMARY KEY (`id_perfil`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `seguimiento_salud`
--
ALTER TABLE `seguimiento_salud`
  ADD PRIMARY KEY (`id_seguimiento`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  MODIFY `id_perfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `seguimiento_salud`
--
ALTER TABLE `seguimiento_salud`
  MODIFY `id_seguimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `perfil_usuario`
--
ALTER TABLE `perfil_usuario`
  ADD CONSTRAINT `perfil_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `seguimiento_salud`
--
ALTER TABLE `seguimiento_salud`
  ADD CONSTRAINT `seguimiento_salud_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
