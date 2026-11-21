-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

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
CREATE TABLE public.Profile (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text NOT NULL DEFAULT 'حسن الفرحات الجنيدي'::text,
  profession text NOT NULL DEFAULT 'الأمين العام لرئاسة الإمارة الجنيدية في العراق'::text,
  bio text NOT NULL DEFAULT 'الأمين العام لرئاسة الإمارة الجنيدية في العراق، مواليد 1991 البغدادية.'::text,
  img_url text NOT NULL DEFAULT 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80'::text,
  location text DEFAULT 'العراق - البغدادية'::text,
  birth_year integer DEFAULT 1991,
  credentials jsonb NOT NULL DEFAULT '[{"label": "سنة الميلاد", "value": "1991"}, {"label": "المنطقة", "value": "العراق - البغدادية"}, {"label": "المقام العشائري", "value": "الأمانة العامة"}, {"label": "الديوان", "value": "رئاسة الإمارة الجنيدية"}]'::jsonb,
  actions jsonb NOT NULL DEFAULT '[{"href": "/clan", "label": "ديوان رئاسة الإمارة", "variant": "primary"}, {"href": "/profile", "label": "السيرة والمسيرة", "variant": "secondary"}]'::jsonb,
  links jsonb DEFAULT '{"facebook": "https://facebook.com"}'::jsonb,
  CONSTRAINT Profile_pkey PRIMARY KEY (id)
);