PGDMP         "                z         
   bd_asispet    9.2.10    9.2.10 1    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
                       false    180            �            1259    124518    banho    TABLE     m   CREATE TABLE banho (
    ban_codigo integer NOT NULL,
    ban_fecha date,
    ban_notas character varying
);
    DROP TABLE public.banho;
       public         postgres    false    5            �            1259    124516    banhos_ban_codigo_seq    SEQUENCE     w   CREATE SEQUENCE banhos_ban_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.banhos_ban_codigo_seq;
       public       postgres    false    179    5            �           0    0    banhos_ban_codigo_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE banhos_ban_codigo_seq OWNED BY banho.ban_codigo;
            public       postgres    false    178            �            1259    116304    gasto    TABLE     �   CREATE TABLE gasto (
    gas_codigo integer NOT NULL,
    gas_descripcion character varying,
    gas_monto integer,
    gas_fecha date
);
    DROP TABLE public.gasto;
       public         postgres    false    5            �            1259    116302    gasto_gas_codigo_seq    SEQUENCE     v   CREATE SEQUENCE gasto_gas_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.gasto_gas_codigo_seq;
       public       postgres    false    5    173            �           0    0    gasto_gas_codigo_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE gasto_gas_codigo_seq OWNED BY gasto.gas_codigo;
            public       postgres    false    172            �            1259    116295    mascota    TABLE     �   CREATE TABLE mascota (
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
       public       postgres    false    5    171            �           0    0    mascota_mas_codigo_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE mascota_mas_codigo_seq OWNED BY mascota.mas_codigo;
            public       postgres    false    170            �            1259    124507 
   peluqueria    TABLE     r   CREATE TABLE peluqueria (
    pel_codigo integer NOT NULL,
    pel_fecha date,
    pel_notas character varying
);
    DROP TABLE public.peluqueria;
       public         postgres    false    5            �            1259    124505    peluqueria_pel_codigo_seq    SEQUENCE     {   CREATE SEQUENCE peluqueria_pel_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.peluqueria_pel_codigo_seq;
       public       postgres    false    5    177            �           0    0    peluqueria_pel_codigo_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE peluqueria_pel_codigo_seq OWNED BY peluqueria.pel_codigo;
            public       postgres    false    176            �            1259    116284    usuario    TABLE     �   CREATE TABLE usuario (
    usu_codigo integer NOT NULL,
    usu_nombre character varying,
    usu_correo character varying,
    usu_contra character varying,
    token character varying
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
            public       postgres    false    168            �            1259    124496 
   vacunacion    TABLE     �   CREATE TABLE vacunacion (
    vac_codigo integer NOT NULL,
    vac_denominacion character varying,
    vac_fecha date,
    vac_notas character varying
);
    DROP TABLE public.vacunacion;
       public         postgres    false    5            �            1259    124494    vacunacion_vac_codigo_seq    SEQUENCE     {   CREATE SEQUENCE vacunacion_vac_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.vacunacion_vac_codigo_seq;
       public       postgres    false    5    175            �           0    0    vacunacion_vac_codigo_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE vacunacion_vac_codigo_seq OWNED BY vacunacion.vac_codigo;
            public       postgres    false    174            ;           2604    124521 
   ban_codigo    DEFAULT     g   ALTER TABLE ONLY banho ALTER COLUMN ban_codigo SET DEFAULT nextval('banhos_ban_codigo_seq'::regclass);
 ?   ALTER TABLE public.banho ALTER COLUMN ban_codigo DROP DEFAULT;
       public       postgres    false    178    179    179            8           2604    116307 
   gas_codigo    DEFAULT     f   ALTER TABLE ONLY gasto ALTER COLUMN gas_codigo SET DEFAULT nextval('gasto_gas_codigo_seq'::regclass);
 ?   ALTER TABLE public.gasto ALTER COLUMN gas_codigo DROP DEFAULT;
       public       postgres    false    172    173    173            7           2604    116298 
   mas_codigo    DEFAULT     j   ALTER TABLE ONLY mascota ALTER COLUMN mas_codigo SET DEFAULT nextval('mascota_mas_codigo_seq'::regclass);
 A   ALTER TABLE public.mascota ALTER COLUMN mas_codigo DROP DEFAULT;
       public       postgres    false    170    171    171            :           2604    124510 
   pel_codigo    DEFAULT     p   ALTER TABLE ONLY peluqueria ALTER COLUMN pel_codigo SET DEFAULT nextval('peluqueria_pel_codigo_seq'::regclass);
 D   ALTER TABLE public.peluqueria ALTER COLUMN pel_codigo DROP DEFAULT;
       public       postgres    false    176    177    177            6           2604    116287 
   usu_codigo    DEFAULT     j   ALTER TABLE ONLY usuario ALTER COLUMN usu_codigo SET DEFAULT nextval('usuario_usu_codigo_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN usu_codigo DROP DEFAULT;
       public       postgres    false    169    168    169            9           2604    124499 
   vac_codigo    DEFAULT     p   ALTER TABLE ONLY vacunacion ALTER COLUMN vac_codigo SET DEFAULT nextval('vacunacion_vac_codigo_seq'::regclass);
 D   ALTER TABLE public.vacunacion ALTER COLUMN vac_codigo DROP DEFAULT;
       public       postgres    false    174    175    175            �          0    124518    banho 
   TABLE DATA               :   COPY banho (ban_codigo, ban_fecha, ban_notas) FROM stdin;
    public       postgres    false    179   -2       �           0    0    banhos_ban_codigo_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('banhos_ban_codigo_seq', 1, false);
            public       postgres    false    178            �          0    116304    gasto 
   TABLE DATA               K   COPY gasto (gas_codigo, gas_descripcion, gas_monto, gas_fecha) FROM stdin;
    public       postgres    false    173   J2       �           0    0    gasto_gas_codigo_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('gasto_gas_codigo_seq', 1, false);
            public       postgres    false    172            �          0    116295    mascota 
   TABLE DATA               x   COPY mascota (mas_codigo, mas_nombre, mas_tipo_codigo, mas_sexo, mas_raza, mas_fecha_nacimiento, mas_notas) FROM stdin;
    public       postgres    false    171   g2       �           0    0    mascota_mas_codigo_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('mascota_mas_codigo_seq', 1, false);
            public       postgres    false    170            �          0    124507 
   peluqueria 
   TABLE DATA               ?   COPY peluqueria (pel_codigo, pel_fecha, pel_notas) FROM stdin;
    public       postgres    false    177   �2       �           0    0    peluqueria_pel_codigo_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('peluqueria_pel_codigo_seq', 1, false);
            public       postgres    false    176            �          0    116284    usuario 
   TABLE DATA               Q   COPY usuario (usu_codigo, usu_nombre, usu_correo, usu_contra, token) FROM stdin;
    public       postgres    false    169   �2       �           0    0    usuario_usu_codigo_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('usuario_usu_codigo_seq', 1, true);
            public       postgres    false    168            �          0    124496 
   vacunacion 
   TABLE DATA               Q   COPY vacunacion (vac_codigo, vac_denominacion, vac_fecha, vac_notas) FROM stdin;
    public       postgres    false    175   �2       �           0    0    vacunacion_vac_codigo_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('vacunacion_vac_codigo_seq', 1, false);
            public       postgres    false    174            E           2606    124526    banhos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY banho
    ADD CONSTRAINT banhos_pkey PRIMARY KEY (ban_codigo);
 ;   ALTER TABLE ONLY public.banho DROP CONSTRAINT banhos_pkey;
       public         postgres    false    179    179            ?           2606    116312 
   gasto_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY gasto
    ADD CONSTRAINT gasto_pkey PRIMARY KEY (gas_codigo);
 :   ALTER TABLE ONLY public.gasto DROP CONSTRAINT gasto_pkey;
       public         postgres    false    173    173            C           2606    124515    peluqueria_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY peluqueria
    ADD CONSTRAINT peluqueria_pkey PRIMARY KEY (pel_codigo);
 D   ALTER TABLE ONLY public.peluqueria DROP CONSTRAINT peluqueria_pkey;
       public         postgres    false    177    177            =           2606    116289    usuario_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usu_codigo);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public         postgres    false    169    169            A           2606    124504    vacunacion_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY vacunacion
    ADD CONSTRAINT vacunacion_pkey PRIMARY KEY (vac_codigo);
 D   ALTER TABLE ONLY public.vacunacion DROP CONSTRAINT vacunacion_pkey;
       public         postgres    false    175    175            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   ;   x�3�t���IN,�L��)���y饩U�F�&鹉�9z�����)@q�g�W� H�6      �      x������ � �     