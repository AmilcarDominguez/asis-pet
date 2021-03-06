PGDMP                         z         
   bd_asispet    9.2.10    9.2.10 8    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            ?           1262    116281 
   bd_asispet    DATABASE     ?   CREATE DATABASE bd_asispet WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Paraguay.1252' LC_CTYPE = 'Spanish_Paraguay.1252';
    DROP DATABASE bd_asispet;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    5            ?           0    0    public    ACL     ?   REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;
                  postgres    false    5            ?            3079    11727    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            ?           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    182            ?            1259    124518    banho    TABLE     ?   CREATE TABLE banho (
    ban_codigo integer NOT NULL,
    ban_fecha date,
    ban_notas character varying,
    ban_mas_codigo integer
);
    DROP TABLE public.banho;
       public         postgres    false    5            ?            1259    124516    banhos_ban_codigo_seq    SEQUENCE     w   CREATE SEQUENCE banhos_ban_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.banhos_ban_codigo_seq;
       public       postgres    false    5    179            ?           0    0    banhos_ban_codigo_seq    SEQUENCE OWNED BY     @   ALTER SEQUENCE banhos_ban_codigo_seq OWNED BY banho.ban_codigo;
            public       postgres    false    178            ?            1259    116304    gasto    TABLE     ?   CREATE TABLE gasto (
    gas_codigo integer NOT NULL,
    gas_descripcion character varying,
    gas_monto integer,
    gas_fecha date,
    gas_mas_codigo integer
);
    DROP TABLE public.gasto;
       public         postgres    false    5            ?            1259    116302    gasto_gas_codigo_seq    SEQUENCE     v   CREATE SEQUENCE gasto_gas_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.gasto_gas_codigo_seq;
       public       postgres    false    173    5            ?           0    0    gasto_gas_codigo_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE gasto_gas_codigo_seq OWNED BY gasto.gas_codigo;
            public       postgres    false    172            ?            1259    116295    mascota    TABLE       CREATE TABLE mascota (
    mas_codigo integer NOT NULL,
    mas_nombre character varying,
    mas_sexo character varying,
    mas_raza character varying,
    mas_fecha_nacimiento date,
    mas_notas character varying,
    mas_tipo character varying,
    mas_usu_codigo integer
);
    DROP TABLE public.mascota;
       public         postgres    false    5            ?            1259    116293    mascota_mas_codigo_seq    SEQUENCE     x   CREATE SEQUENCE mascota_mas_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.mascota_mas_codigo_seq;
       public       postgres    false    5    171            ?           0    0    mascota_mas_codigo_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE mascota_mas_codigo_seq OWNED BY mascota.mas_codigo;
            public       postgres    false    170            ?            1259    124507 
   peluqueria    TABLE     ?   CREATE TABLE peluqueria (
    pel_codigo integer NOT NULL,
    pel_fecha date,
    pel_notas character varying,
    pel_mas_codigo integer
);
    DROP TABLE public.peluqueria;
       public         postgres    false    5            ?            1259    124505    peluqueria_pel_codigo_seq    SEQUENCE     {   CREATE SEQUENCE peluqueria_pel_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.peluqueria_pel_codigo_seq;
       public       postgres    false    5    177            ?           0    0    peluqueria_pel_codigo_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE peluqueria_pel_codigo_seq OWNED BY peluqueria.pel_codigo;
            public       postgres    false    176            ?            1259    132715    rol    TABLE     ?   CREATE TABLE rol (
    rol_id integer NOT NULL,
    rol_fecha date,
    rol_descripcion character varying,
    rol_usu_id integer
);
    DROP TABLE public.rol;
       public         postgres    false    5            ?            1259    132713    rol_rol_id_seq    SEQUENCE     p   CREATE SEQUENCE rol_rol_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.rol_rol_id_seq;
       public       postgres    false    181    5            ?           0    0    rol_rol_id_seq    SEQUENCE OWNED BY     3   ALTER SEQUENCE rol_rol_id_seq OWNED BY rol.rol_id;
            public       postgres    false    180            ?            1259    116284    usuario    TABLE     ?   CREATE TABLE usuario (
    usu_codigo integer NOT NULL,
    usu_nombre character varying,
    usu_correo character varying,
    usu_contra character varying,
    usu_token character varying
);
    DROP TABLE public.usuario;
       public         postgres    false    5            ?            1259    116282    usuario_usu_codigo_seq    SEQUENCE     x   CREATE SEQUENCE usuario_usu_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.usuario_usu_codigo_seq;
       public       postgres    false    5    169            ?           0    0    usuario_usu_codigo_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE usuario_usu_codigo_seq OWNED BY usuario.usu_codigo;
            public       postgres    false    168            ?            1259    124496    vacuna    TABLE     ?   CREATE TABLE vacuna (
    vac_codigo integer NOT NULL,
    vac_denominacion character varying,
    vac_fecha date,
    vac_notas character varying,
    vac_mas_codigo integer
);
    DROP TABLE public.vacuna;
       public         postgres    false    5            ?            1259    124494    vacunacion_vac_codigo_seq    SEQUENCE     {   CREATE SEQUENCE vacunacion_vac_codigo_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.vacunacion_vac_codigo_seq;
       public       postgres    false    175    5            ?           0    0    vacunacion_vac_codigo_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE vacunacion_vac_codigo_seq OWNED BY vacuna.vac_codigo;
            public       postgres    false    174            B           2604    124521 
   ban_codigo    DEFAULT     g   ALTER TABLE ONLY banho ALTER COLUMN ban_codigo SET DEFAULT nextval('banhos_ban_codigo_seq'::regclass);
 ?   ALTER TABLE public.banho ALTER COLUMN ban_codigo DROP DEFAULT;
       public       postgres    false    179    178    179            ?           2604    116307 
   gas_codigo    DEFAULT     f   ALTER TABLE ONLY gasto ALTER COLUMN gas_codigo SET DEFAULT nextval('gasto_gas_codigo_seq'::regclass);
 ?   ALTER TABLE public.gasto ALTER COLUMN gas_codigo DROP DEFAULT;
       public       postgres    false    172    173    173            >           2604    116298 
   mas_codigo    DEFAULT     j   ALTER TABLE ONLY mascota ALTER COLUMN mas_codigo SET DEFAULT nextval('mascota_mas_codigo_seq'::regclass);
 A   ALTER TABLE public.mascota ALTER COLUMN mas_codigo DROP DEFAULT;
       public       postgres    false    170    171    171            A           2604    124510 
   pel_codigo    DEFAULT     p   ALTER TABLE ONLY peluqueria ALTER COLUMN pel_codigo SET DEFAULT nextval('peluqueria_pel_codigo_seq'::regclass);
 D   ALTER TABLE public.peluqueria ALTER COLUMN pel_codigo DROP DEFAULT;
       public       postgres    false    177    176    177            C           2604    132718    rol_id    DEFAULT     Z   ALTER TABLE ONLY rol ALTER COLUMN rol_id SET DEFAULT nextval('rol_rol_id_seq'::regclass);
 9   ALTER TABLE public.rol ALTER COLUMN rol_id DROP DEFAULT;
       public       postgres    false    181    180    181            =           2604    116287 
   usu_codigo    DEFAULT     j   ALTER TABLE ONLY usuario ALTER COLUMN usu_codigo SET DEFAULT nextval('usuario_usu_codigo_seq'::regclass);
 A   ALTER TABLE public.usuario ALTER COLUMN usu_codigo DROP DEFAULT;
       public       postgres    false    168    169    169            @           2604    124499 
   vac_codigo    DEFAULT     l   ALTER TABLE ONLY vacuna ALTER COLUMN vac_codigo SET DEFAULT nextval('vacunacion_vac_codigo_seq'::regclass);
 @   ALTER TABLE public.vacuna ALTER COLUMN vac_codigo DROP DEFAULT;
       public       postgres    false    174    175    175            ?          0    124518    banho 
   TABLE DATA               J   COPY banho (ban_codigo, ban_fecha, ban_notas, ban_mas_codigo) FROM stdin;
    public       postgres    false    179   ?9       ?           0    0    banhos_ban_codigo_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('banhos_ban_codigo_seq', 4, true);
            public       postgres    false    178            ?          0    116304    gasto 
   TABLE DATA               [   COPY gasto (gas_codigo, gas_descripcion, gas_monto, gas_fecha, gas_mas_codigo) FROM stdin;
    public       postgres    false    173   ?9       ?           0    0    gasto_gas_codigo_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('gasto_gas_codigo_seq', 23, true);
            public       postgres    false    172            ?          0    116295    mascota 
   TABLE DATA               ?   COPY mascota (mas_codigo, mas_nombre, mas_sexo, mas_raza, mas_fecha_nacimiento, mas_notas, mas_tipo, mas_usu_codigo) FROM stdin;
    public       postgres    false    171   *:       ?           0    0    mascota_mas_codigo_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('mascota_mas_codigo_seq', 21, true);
            public       postgres    false    170            ?          0    124507 
   peluqueria 
   TABLE DATA               O   COPY peluqueria (pel_codigo, pel_fecha, pel_notas, pel_mas_codigo) FROM stdin;
    public       postgres    false    177   ?:       ?           0    0    peluqueria_pel_codigo_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('peluqueria_pel_codigo_seq', 3, true);
            public       postgres    false    176            ?          0    132715    rol 
   TABLE DATA               F   COPY rol (rol_id, rol_fecha, rol_descripcion, rol_usu_id) FROM stdin;
    public       postgres    false    181   
;       ?           0    0    rol_rol_id_seq    SEQUENCE SET     5   SELECT pg_catalog.setval('rol_rol_id_seq', 1, true);
            public       postgres    false    180            ?          0    116284    usuario 
   TABLE DATA               U   COPY usuario (usu_codigo, usu_nombre, usu_correo, usu_contra, usu_token) FROM stdin;
    public       postgres    false    169   w;       ?           0    0    usuario_usu_codigo_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('usuario_usu_codigo_seq', 12, true);
            public       postgres    false    168            ?          0    124496    vacuna 
   TABLE DATA               ]   COPY vacuna (vac_codigo, vac_denominacion, vac_fecha, vac_notas, vac_mas_codigo) FROM stdin;
    public       postgres    false    175   6<       ?           0    0    vacunacion_vac_codigo_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('vacunacion_vac_codigo_seq', 4, true);
            public       postgres    false    174            M           2606    124526    banhos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY banho
    ADD CONSTRAINT banhos_pkey PRIMARY KEY (ban_codigo);
 ;   ALTER TABLE ONLY public.banho DROP CONSTRAINT banhos_pkey;
       public         postgres    false    179    179            G           2606    116312 
   gasto_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY gasto
    ADD CONSTRAINT gasto_pkey PRIMARY KEY (gas_codigo);
 :   ALTER TABLE ONLY public.gasto DROP CONSTRAINT gasto_pkey;
       public         postgres    false    173    173            K           2606    124515    peluqueria_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY peluqueria
    ADD CONSTRAINT peluqueria_pkey PRIMARY KEY (pel_codigo);
 D   ALTER TABLE ONLY public.peluqueria DROP CONSTRAINT peluqueria_pkey;
       public         postgres    false    177    177            O           2606    132723    rol_pkey 
   CONSTRAINT     G   ALTER TABLE ONLY rol
    ADD CONSTRAINT rol_pkey PRIMARY KEY (rol_id);
 6   ALTER TABLE ONLY public.rol DROP CONSTRAINT rol_pkey;
       public         postgres    false    181    181            E           2606    116289    usuario_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (usu_codigo);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public         postgres    false    169    169            I           2606    124504    vacunacion_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY vacuna
    ADD CONSTRAINT vacunacion_pkey PRIMARY KEY (vac_codigo);
 @   ALTER TABLE ONLY public.vacuna DROP CONSTRAINT vacunacion_pkey;
       public         postgres    false    175    175            ?   0   x?3?4202?50"N'?????}|\C?9-?L҆X?c???? ?V      ?   -   x?32?t???u???46500?4202?50?5??4??????? ?_?      ?   ?   x?5?K
?0????*??Hz????FZ??%t"8I?M?)???@??????֯ЕUC?G>??~??Qȓ?t&Mq5*?Օ Yq???b??`?^??ۄM"?Mn?????J묱??v??-?Z]ھ?i?!?yn?{N3z?c?إ-?      ?   +   x?3?4202?50?52?t?
q?4??2????"Dc???? ???      ?   ]   x?3?4202?50?50?tL????,.)JL?/?4?2B?-.M,??W00?c???2?*T?e???@? E?̡2(2@Q.ClR Q?=... ?A+?      ?   ?   x?5??
?0 ?k}?^?????%*????/A?i?i?H???+?????!?&?cd5?????$????鲐nH4R??ǿ??=??k`4??mi??	??iu?C??I???K?Iţ?I˦_????[X?6????d?)A?V?S???6Xx>?a???冋????n??d????o???,      ?   E   x?3?p
??
?4202?50?50?t??V00?4??2??????????1?52BQ???? ??J     