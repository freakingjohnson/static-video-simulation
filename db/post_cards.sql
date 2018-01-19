insert into cards (
    card_name,
    card_desc,
    card_type,
    item_type,
    card_level,
    bad_stuff,
    how_many,
    picture_url
)
values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
);