PGDMP     '    -    	            z         
   bd_asispet    9.2.10    9.2.10     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           1262    116281 
   bd_asispet    DATABASE     �   CREATE DATABASE bd_asispet WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Paraguay.1252' LC_CTYPE = 'Spanish_Paraguay.1252';
    DROP DATABASE bd_asispet;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    5            �           0    0    public    ACL     �   REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;
                  postgres    false    5            �            3079    11727    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    172            �            1259    116295    mascota    TABLE     �   CREATE TABLE mascota (
    mas_codigo integer NOT NULL,
    mas_nombre character varying,
    mas_tipo_codigo integer,
    mas_sexo character varying,
    mas_raza character varying,
    mas_fecha_nacimiento date,
    mas_notas character varying
);
    DROP TABLE public.mascota;
       public         postgres    false    5            �            1259    116293    mascota_mas_codigo_seq    SEQUENCE     x   CREATE SEQUENCE mascota_mas_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.mascota_mas_codigo_seq;
       public       postgres    false    171    5            �           0    0    mascota_mas_codigo_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE mascota_mas_codigo_seq OWNED BY mascota.mas_codigo;
            public       postgres    false    170            �            1259    116284    usuario    TABLE     �   CREATE TABLE usuario (
    usu_codigo integer NOT NULL,
    usu_nombre character varying,
    usu_correo character varying,
    usu_contra character varying
);
    DROP TABLE public.usuario;
       public         postgres    false    5            �            1259    116282    usuario_usu_codigo_seq    SEQUENCE     x   CREATE SEQUENCE usuario_usu_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_usu_codigo_seq;
       public       postgres    false    5    169            �           0    0    usuario_usu_codigo_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE usuario_usu_codigo_seq OWNED BY usuario.usu_codigo;
            public       postgres    false    168                       2604    116298 
   mas_codigo    DEFAULT     j   ALTER TABLE ONLY mascota ALTER COLUMN mas_codigo SET DEFAULT nextval('mascota_mas_codigo_seq'::regclass);
 A   ALTER TABLE public.mascota ALTER COLUMN mas_codigo DROP DEFAULT;
       public       postgres    false    171    170    171                       2604    116287 
   usu_codigo    DEFAULT     j   ALTER TABLE ONLY usuario ALTER COLUMN usu_codigo SET DEFAULT nextval('usuario_usu_codigo_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN usu_codigo DROP DEFAULT;
       public       postgres    false    169    168    169            �          0    116295    mascota 
   TABLE DATA               x   COPY mascota (mas_codigo, mas_nombre, mas_tipo_codigo, mas_sexo, mas_raza, mas_fecha_nacimiento, mas_notas) FROM stdin;
    public       postgres    false    171   �       �           0    0    mascota_mas_codigo_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('mascota_mas_codigo_seq', 1, false);
            public       postgres    false    170            �          0    116284    usuario 
   TABLE DATA               J   COPY usuario (usu_codigo, usu_nombre, usu_correo, usu_contra) FROM stdin;
    public       postgres    false    169   �       �           0    0    usuario_usu_codigo_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('usuario_usu_codigo_seq', 1, true);
            public       postgres    false    168                       2606    116289    usuario_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usu_codigo);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public         postgres    false    169    169            �      x������ � �      �   8   x�3�t���IN,�L��)���y饩U�F�&鹉�9z�����)@q�W� ��     