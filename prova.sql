-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loja_docess` DEFAULT CHARACTER SET utf8 ;
USE `loja_docess` ;

-- -----------------------------------------------------
-- Table `mydb`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_docess`.`categorias` (
  `id_categorias` INT NOT NULL AUTO_INCREMENT,
  `nome_categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categorias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`doces`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_docess`.`doces` (
  `id_doces` INT NOT NULL AUTO_INCREMENT,
  `nome_doce` VARCHAR(45) NOT NULL,
  `id_categorias` INT NOT NULL,
  PRIMARY KEY (`id_doces`),
  INDEX `fk_doces_categorias_idx` (`id_categorias` ASC) ,categorias
  CONSTRAINT `fk_doces_categorias`
    FOREIGN KEY (`id_categorias`)
    REFERENCES `loja_docess`.`categorias` (`id_categorias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;







insert into categorias values(
null,
"Bolo"
);

insert into doces values(
null,
"Red velvet",
"1"
);

insert into doces values(
null,
"Bolo de Cenoura",
"1"
);

insert into doces values(
null,
"Torta de maça",
"1"
);



