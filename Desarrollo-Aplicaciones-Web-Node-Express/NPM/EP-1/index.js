import logplease from "logplease";

const logger = logplease.create("Leccion3");

//mensaje tipo debug
//se usan normalmente para revisar información durante el desarrollo
logger.debug("Hola mundo");

//mensaje de información
//se usan normalmente para mostrar información general del programa
logger.info("Información de último momento, Node.js es lo máximo!!");

//mensaje de tipo warning
//se usa para mostrar advertencias
logger.warn("Tirando warnings");

//mensaje de tipo error
//se usa para mostrar mensajes de problemas o errores importantes
logger.error("Algo no está bien!!");
