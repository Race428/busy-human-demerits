update demerit_users 
set demerit_count = ${count}
where id = ${id}

returning * 