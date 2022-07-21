const updateTabla = async (item) => {
  let result = await fetch("http://localhost:5000/updateUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: item }),
  });
  let data = await result.json();
  console.log(data);
  
  return  data.rowCount === 1 ;

};

const updateDatabaseItem = (item) => {
    return new Promise((resolv, reject) => {
      fetch("http://localhost:5000/updateUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: item }),
      });
    });
  };


export default{
    updateTabla , 
    updateDatabaseItem,
}