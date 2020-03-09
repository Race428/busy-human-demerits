insert into demerit_users ( 
    name,
    demerit_count
) 

values ( 
    ${name},
    0
)
returning * 