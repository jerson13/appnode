create table users(
	id BIGSERIAL PRIMARY KEY,
	email VARCHAR(255) not null unique,
	name varchar(255) not null,
	lasname varchar(255) not null,
	phone varchar(80) not null unique,
	image varchar(255) null,
	password varchar(255) not null,
	is_available boolean null,
	session_token varchar(255) null,
	created_at timestamp(8) not null,
	updated_at timestamp(8) not null
	
);