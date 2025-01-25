```sql
-- Revoke all existing SELECT permissions
revoke all on public.artwork from public;

-- Enable Row Level Security
alter table public.artwork enable row level security;

-- Restrictive default policy
create policy "No direct access" on public.artwork
for select
to public
using (false);

create or replace function public.get_today_artwork()
returns public.artwork as $$
declare
   today_artwork public.artwork%rowtype;
   total_rows int;
   offset_value int;
begin
   select count(*) into total_rows from public.artwork;
   
   offset_value := (extract(doy from current_date) % total_rows)::int;
   
   select * into today_artwork 
   from public.artwork 
   order by image_id 
   offset offset_value 
   limit 1;
   
   return today_artwork;
end;
$$ language plpgsql;

create or replace function public.get_random_artwork()
returns public.artwork as $$
declare
    random_artwork public.artwork%rowtype;
begin
    select * into random_artwork from public.artwork order by random() limit 1;
    return random_artwork;
end;
$$ language plpgsql security definer 
    set role to authenticated;

```