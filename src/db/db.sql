CREATE USER 'InmobiliariaDB'@'localhost' IDENTIFIED BY 'inmobiliariaDB';
GRANT ALL PRIVILEGES ON *.* TO 'InmobiliariaDB'@'localhost';

create DATABASE InmobiliariaDB IF NOT EXISTS;

CREATE TABLE Categorias (
	id int auto_increment primary key,
    nombre varchar(50) not null
);

CREATE TABLE Ubicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    latitud DECIMAL(9, 6) NOT NULL,
    longitud DECIMAL(10, 6) NOT NULL
);

CREATE TABLE Propiedad_Caracteristicas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    num_banos INT,
    num_garage INT,
    num_habitaciones INT,
    area DECIMAL(10, 2),
    uso VARCHAR(100),
    num_pisos INT,
    patio BOOLEAN,
    piso INT,
    ascensor BOOLEAN
);


CREATE TABLE Propiedad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT,
    ubicacion_id INT,
    propiedad_caracteristicas_id INT,
    titulo VARCHAR(50) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2),
    destacado BOOLEAN,
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id),
    FOREIGN KEY (ubicacion_id) REFERENCES Ubicaciones(id),
    FOREIGN KEY (propiedad_caracteristicas_id) REFERENCES Propiedad_Caracteristicas(id)
);
