const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.REACT_APP_DB_DATABASE}`;
const useDatabaseQuery = `USE ${process.env.REACT_APP_DB_DATABASE}`;

const createRegisterTableQuery = `
CREATE TABLE IF NOT EXISTS ebook (
    user_id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(60) NOT NULL,
    lastName VARCHAR(60) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    websiteurl VARCHAR(60) NOT NULL,
    companyName VARCHAR(60) NOT NULL,
    empstrength VARCHAR(60) NOT NULL,
    UNIQUE INDEX user_id_UNIQUE (user_id ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

module.exports = {
  createRegisterTableQuery,
  createDatabaseQuery,
  useDatabaseQuery,
};
