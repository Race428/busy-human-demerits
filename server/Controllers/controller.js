module.exports = {
  getUsers: async (req, res) => {
    const db = req.app.get("db");
    const users = await db.getUsers();

    //   for(let i = 0; i < users.length; i++){
    //       await db.getDemeritCount({user_id: +users[i].id}).then(respo => {
    //           users[i].demeritCount = respo[0];

    //       })

    //   }
    console.log(users);

    res.send(users);
  },

  addUser: async (req, res) => {
    const db = req.app.get("db");
    const { name } = req.body;
    await db.addUser({ name: name }).then(response => {
      res.status(200).send(response);
    });
  },
  changeDemerit: async (req, res) => {
    const db = req.app.get("db");
    const { name, count } = req.body;
    console.log(req.body)
 await db.changeDemerit({id:name.id, count: +count}).then(response => { 
     res.status(200).send(response)
 })

    // await db.addUser({ name: name }).then(response => {
    //   res.status(200).send(response);
    // });
  }
  // addDemerit: (req, res) => {

  // }
};
