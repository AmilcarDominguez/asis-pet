PGDMP     3                    z         
   bd_asispet    9.2.10    9.2.10                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            «            1259    116295    mascota    TABLE     ω   CREATE TABLE mascota (
    mas_codigo integer NOT NULL,
    mas_nombre character varying,
    mas_tipo_codigo integer,
    mas_sexo character varying,
    mas_raza character varying,
    mas_fecha_nacimiento date,
    mas_notas character varying
);
    DROP TABLE public.mascota;
       public         postgres    false            ͺ            1259    116293    mascota_mas_codigo_seq    SEQUENCE     x   CREATE SEQUENCE mascota_mas_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.mascota_mas_codigo_seq;
       public       postgres    false    171                       0    0    mascota_mas_codigo_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE mascota_mas_codigo_seq OWNED BY mascota.mas_codigo;
            public       postgres    false    170                       2604    116298 
   mas_codigo    DEFAULT     j   ALTER TABLE ONLY mascota ALTER COLUMN mas_codigo SET DEFAULT nextval('mascota_mas_codigo_seq'::regclass);
 A   ALTER TABLE public.mascota ALTER COLUMN mas_codigo DROP DEFAULT;
       public       postgres    false    171    170    171                      0    116295    mascota 
   TABLE DATA               x   COPY mascota (mas_codigo, mas_nombre, mas_tipo_codigo, mas_sexo, mas_raza, mas_fecha_nacimiento, mas_notas) FROM stdin;
    public       postgres    false    171   :                  0    0    mascota_mas_codigo_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('mascota_mas_codigo_seq', 1, false);
            public       postgres    false    170                  xΡγββ Ε ©     