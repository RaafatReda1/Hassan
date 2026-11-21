-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.Profile (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text,
  bio text,
  img_url text,
  profession text,
  location text,
  links jsonb,
  CONSTRAINT Profile_pkey PRIMARY KEY (id)
);
CREATE TABLE public.Articles (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  title text,
  content text,
  imgs_url jsonb,
  cat_id bigint,
  status text,
  is_published boolean,
  is_edited jsonb,
  seo_title text,
  seo_description text,
  CONSTRAINT Articles_pkey PRIMARY KEY (id),
  CONSTRAINT Articles_cat_id_fkey FOREIGN KEY (cat_id) REFERENCES public.Categories(id)
);
CREATE TABLE public.Categories (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text,
  slug text,
  parent_id smallint,
  CONSTRAINT Categories_pkey PRIMARY KEY (id)
);
CREATE TABLE public.Admins (
  id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text,
  phone numeric,
  email character varying,
  CONSTRAINT Admins_pkey PRIMARY KEY (id),
  CONSTRAINT Admins_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);